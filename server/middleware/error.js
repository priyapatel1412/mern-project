const Errorhandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  //Wrong MongoDB Id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new Errorhandler(message, 400);
  }

  //Mongoose duplicate Key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new Errorhandler(message, 400);
  }

  //Wrong JWT error
  if (err.code === "JsonWebTokenError") {
    const message = `Jsonb Web Token is invalid, try again`;
    err = new Errorhandler(message, 400);
  }

  //JWT Expire error
  if (err.code === "TokenExpiredError") {
    const message = `Jsonb Web Token is invalid, try again`;
    err = new Errorhandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    // error: err.stack,
    message: err.message,
  });
};

//Wrong MongoDB Id error
