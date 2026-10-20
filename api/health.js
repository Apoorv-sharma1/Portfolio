export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    success: true,
    status: 'operational',
    service: 'Apoorv Sharma Portfolio API',
    mongoConfigured: !!(process.env.MONGODB_URI || process.env.MONGO_URI),
    timestamp: new Date().toISOString()
  });
}
