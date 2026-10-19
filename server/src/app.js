import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import healthRoutes from './routes/healthRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import resumeRoutes from './routes/resumeRoutes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { generalRateLimiter } from './middleware/rateLimiter.js';

dotenv.config();

const app = express();

// Security Headers
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' }
  })
);

// CORS setup
const configuredOrigins = (process.env.ALLOWED_ORIGINS || process.env.CLIENT_URL || '')
  .split(',')
  .map(o => o.trim())
  .filter(Boolean);

const defaultOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'https://apoorvsh.netlify.app'
];

const allowedOrigins = [...new Set([...configuredOrigins, ...defaultOrigins])];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, postman)
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.indexOf(origin) !== -1 ||
        process.env.NODE_ENV !== 'production' ||
        origin.endsWith('.vercel.app') ||
        origin.endsWith('.netlify.app')
      ) {
        return callback(null, true);
      }
      return callback(new Error('CORS policy blocked access for this origin.'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Body parsing with strict payload limit
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

// General Rate Limiting
app.use('/api', generalRateLimiter);

// API Routes
app.use('/api/health', healthRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/resume', resumeRoutes);

// Root informational endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Apoorv Sharma Developer Portfolio API is operational.',
    endpoints: {
      health: '/api/health',
      contact: 'POST /api/contact',
      resumePdf: '/api/resume/pdf',
      resumeDocx: '/api/resume/docx'
    }
  });
});

// 404 & Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
