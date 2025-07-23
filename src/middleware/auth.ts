import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
dotenv.config()
// import user from '../models/User'
export const verifyToken = (req:Request, res:Response, next:NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
   (req as any).user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};