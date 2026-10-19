import { Contact } from '../models/Contact.js';
import { getDbStatus } from '../config/database.js';

// In-memory fallback in case MongoDB instance is not reachable
const fallbackSubmissions = [];

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message, botCheck } = req.body;

    // Honeypot check for spam bots
    if (botCheck && botCheck.trim() !== '') {
      return res.status(400).json({
        success: false,
        message: 'Spam submission detected.'
      });
    }

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
        message: 'Validation failed. Please review your input.',
        errors
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = (subject || 'Portfolio Inquiry').trim();
    const cleanMessage = message.trim();
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
    const userAgent = req.headers['user-agent'] || null;

    // Check duplicate submissions within 3 minutes
    const threeMinutesAgo = new Date(Date.now() - 3 * 60 * 1000);
    const dbStatus = getDbStatus();

    if (dbStatus.connected) {
      const existing = await Contact.findOne({
        email: cleanEmail,
        message: cleanMessage,
        createdAt: { $gte: threeMinutesAgo }
      });

      if (existing) {
        return res.status(429).json({
          success: false,
          message: 'Duplicate submission detected. Please wait a few moments before sending the same message.'
        });
      }

      const newContact = await Contact.create({
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage,
        ipAddress: clientIp,
        userAgent
      });

      console.log(`[Contact Saved in MongoDB] From: ${cleanName} <${cleanEmail}>`);

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
      // Fallback mode
      const fallbackEntry = {
        _id: 'local_' + Date.now(),
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage,
        createdAt: new Date(),
        ipAddress: clientIp
      };
      fallbackSubmissions.push(fallbackEntry);
      console.warn(`[Contact Saved in Resilient Fallback] MongoDB offline. Message cached in memory: ${cleanEmail}`);

      return res.status(201).json({
        success: true,
        message: 'Your message has been received! (Stored in server queue while MongoDB connects).',
        data: {
          id: fallbackEntry._id,
          name: fallbackEntry.name,
          createdAt: fallbackEntry.createdAt
        }
      });
    }
  } catch (error) {
    next(error);
  }
};
