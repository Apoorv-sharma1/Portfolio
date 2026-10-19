import mongoose from 'mongoose';

let isDbConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/apoorv_portfolio';
  
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2000,
      connectTimeoutMS: 2000,
      autoIndex: true
    });
    
    isDbConnected = true;
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}/${conn.connection.name}`);
    
    mongoose.connection.on('error', (err) => {
      console.error('[MongoDB] Connection runtime error:', err.message);
      isDbConnected = false;
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('[MongoDB] Disconnected from database.');
      isDbConnected = false;
    });

    return conn;
  } catch (error) {
    isDbConnected = false;
    console.warn(`[MongoDB Notice] Could not establish live connection to ${uri} (${error.message}).`);
    console.warn(`[MongoDB Resilient Mode] API operating in fallback in-memory mode for zero-downtime evaluation.`);
  }
};

export const getDbStatus = () => ({
  connected: isDbConnected,
  readyState: mongoose.connection.readyState,
  host: isDbConnected ? mongoose.connection.host : null
});
