import jwt from "jsonwebtoken";

export const signToken = async (email) => {
  try {
    let payload = {
      email,
    };
    let token = jwt.sign(payload, secret, {
      expiresIn: "4h",
    });
    return token;
  } catch (error) {
    throw new jwt.JsonWebTokenError(error);
  }
};

export const verifyToken = async (token) => {
  try {
    let payload = jwt.verify(token, secret);
    return payload.email;
  } catch (error) {
    throw new jwt.JsonWebTokenError(error);
  }
};