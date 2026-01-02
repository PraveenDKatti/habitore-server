// Triggered when a route is not found (e.g., /api/random-junk)
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Triggered when any other error occurs in the app
const errorHandler = (err, req, res, next) => {
  // If status code is 200 (OK) but there's an error, default to 500 (Server Error)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);
  res.json({
    message: err.message,
    // Only show stack trace in development mode (hide in production)
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };