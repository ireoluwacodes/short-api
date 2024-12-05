import AsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import status from "http-status";

export const notFound = AsyncHandler(async (req, res, next) => {
  try {
    res.status(404);
    throw new Error(`Route not found : ${req.method} : ${req.originalUrl}`);
  } catch (error) {
    next(error);
  }
});

export const errHandler = (error, req, res, next) => {
  let statuscode = res.statusCode == 200 ? 500 : res.statusCode;
  let message = "A server error occurred";
  let type = "Server Error";
  if (error instanceof Error) {
    message = error.message;
  }
  if (error instanceof jwt.JsonWebTokenError) {
    statuscode = status.UNAUTHORIZED;
    message = error.message;
    type = "JWT Error or JWT Expired error";
  }
  return res.status(statuscode).json({
    status: "fail",
    type,
    message,
    // stack: error?.stack,
  });
};
