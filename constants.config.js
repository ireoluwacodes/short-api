import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const secret = process.env.JWT_SECRET;