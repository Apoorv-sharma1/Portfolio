import express from 'express';
import { getDbStatus } from '../config/database.js';

const router = express.Router();

router.get('/', (req, res) => {
  const dbStatus = getDbStatus();
  res.status(200).json({
    success: true,
    status: 'operational',
    service: 'Apoorv Sharma Developer Portfolio API',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    database: {
      connected: dbStatus.connected,
      state: dbStatus.readyState === 1 ? 'connected' : 'disconnected'
    },
    version: '1.0.0'
  });
});

export default router;
