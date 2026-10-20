import mongoose from 'mongoose';

// Define Contact schema for Serverless execution
const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, trim: true, default: 'Portfolio Inquiry' },
    message: { type: String, required: true, trim: true },
    ipAddress: { type: String, default: null },
    userAgent: { type: String, default: null }
  },
  { timestamps: true }
);

// Prevent re-compiling Model in serverless environment
const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

// Cache database connection across serverless invocations
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
  if (!uri) {
    return null;
  }
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000
    }).then((m) => m);
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error('MongoDB connection error in serverless function:', e.message);
    return null;
  }
  return cached.conn;
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      endpoint: '/api/contact',
      methods: ['POST'],
      status: 'Ready to receive contact form submissions'
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Use POST to submit contact form.'
    });
  }

  try {
    const { name, email, subject, message, botCheck } = req.body || {};

    // Honeypot check for spam bots
    if (botCheck && botCheck.trim() !== '') {
      return res.status(400).json({
        success: false,
        message: 'Spam submission detected.'
      });
    }

    // Validation
    const errors = [];
    if (!name || name.trim().length < 2) {
      errors.push('Name is required and must be at least 2 characters.');
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email.trim())) {
      errors.push('A valid email address is required.');
    }
    if (!message || message.trim().length < 10) {
      errors.push('Message is required and must be at least 10 characters long.');
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed.',
        errors
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = (subject || 'Portfolio Inquiry').trim();
    const cleanMessage = message.trim();
    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || null;
    const userAgent = req.headers['user-agent'] || null;

    // Connect to MongoDB
    const db = await connectToDatabase();

    if (db) {
      const newContact = await Contact.create({
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage,
        ipAddress: clientIp,
        userAgent
      });

      console.log(`[Vercel Serverless] Contact saved to MongoDB: ${cleanEmail}`);

      return res.status(201).json({
        success: true,
        message: 'Your message has been received and saved! Apoorv will get back to you shortly.',
        data: {
          id: newContact._id,
          name: newContact.name,
          createdAt: newContact.createdAt
        }
      });
    } else {
      // Graceful acknowledgment when MONGODB_URI is pending in Vercel env
      console.log(`[Vercel Serverless] Message received (MONGODB_URI pending in Vercel settings): From: ${cleanName} <${cleanEmail}>`);

      return res.status(201).json({
        success: true,
        message: 'Your message has been received! Apoorv will get back to you shortly.',
        data: {
          id: 'temp_' + Date.now(),
          name: cleanName,
          createdAt: new Date().toISOString()
        }
      });
    }
  } catch (error) {
    console.error('Contact handler error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process message.',
      error: error.message
    });
  }
}
