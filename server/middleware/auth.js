const Errorhandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new Errorhandler("please Login to access this resources", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  // console.log("decodedData", decodedData);

  req.user = await User.findById(decodedData.id);
  // console.log("user", req.user);

  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new Errorhandler(
          `Role: ${req.user.role} is not allowed too access this resource`,
          403
        )
      );
    }

    next();
  };
};
