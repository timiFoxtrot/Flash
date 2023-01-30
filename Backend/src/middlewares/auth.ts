import express, { Application, Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

const secret: string = process.env.JWT_SECRET as string;

declare module "express-serve-static-core" {
  interface Request {
    _id: string,
    user_name: string
  }
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const bearerHeader = req.headers['authorization']

  if (bearerHeader !== undefined) {
    const bearerToken = bearerHeader.split(' ')[1]

    interface Dec {
      _id: string,
      user_name: string,
      iat: number,
      exp: number
    }

    const decoded: Dec = jwt.verify(bearerToken, secret) as Dec
    
    req._id = decoded._id 
    req.user_name = decoded.user_name
    console.log(req._id, req.user_name);
    next()
  } else {
    res.sendStatus(403)
  }
}