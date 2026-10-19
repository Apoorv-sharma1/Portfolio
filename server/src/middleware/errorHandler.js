export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Resource not found at ${req.originalUrl}`
  });
};

export const errorHandler = (err, req, res, next) => {
  console.error('[API Server Error]', err);

  const statusCode = err.statusCode || 500;
  const isProd = process.env.NODE_ENV === 'production';

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(isProd ? {} : { stack: err.stack })
  });
};
