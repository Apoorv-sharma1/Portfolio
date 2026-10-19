import app from './app.js';
import { connectDB } from './config/database.js';

const PORT = process.env.PORT || 5000;

const startServer = () => {
  const server = app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`🚀 Portfolio Server running in ${process.env.NODE_ENV || 'development'} mode`);
    console.log(`📡 URL: http://localhost:${PORT}`);
    console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`📄 PDF Resume: http://localhost:${PORT}/api/resume/pdf`);
    console.log(`📝 DOCX Resume: http://localhost:${PORT}/api/resume/docx`);
    console.log(`📬 Contact API: POST http://localhost:${PORT}/api/contact`);
    console.log(`===============================================`);
  });

  // Attempt MongoDB connection in background
  connectDB().catch(err => {
    console.warn('[MongoDB Background Error]', err.message);
  });

  const shutdown = () => {
    console.log('\nShutting down portfolio server gracefully...');
    server.close(() => {
      console.log('HTTP server closed.');
      process.exit(0);
    });
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
};

startServer();
