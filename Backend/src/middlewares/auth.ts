import express, { Application, Request, Response, NextFunction } from "express";

declare module "express-serve-static-core" {
  interface Request {
    token?: string;
  }
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const bearerHeader = req.headers['authorization']

  if (bearerHeader !== undefined) {
    const bearerToken = bearerHeader.split(' ')[1]
    req.token = bearerToken
    console.log('req.token', req.token);
    next()
  } else {
    res.sendStatus(403)
  }
}