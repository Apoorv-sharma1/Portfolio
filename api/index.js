import app from '../server/src/app.js';
import { connectDB } from '../server/src/config/database.js';

let isConnected = false;

export default async function handler(req, res) {
  // Ensure database is initialized before processing request
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
    } catch (err) {
      console.warn('[Vercel API DB Notice]', err.message);
    }
  }

  // Forward request to Express app
  return app(req, res);
}
