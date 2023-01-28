import express, { Application, Request, Response, NextFunction } from "express";
import Memory from "../models/memory";

interface Post {
  user_name: string;
  photo: string;
  title: string;
  description: string;
  location: string;
  likes: number;
  date_created?: string;
  date_updated?: string;
  comments: [{ user: string; comment: string }];
}

export const createMemory = (req: Request, res: Response) => {
  const newMemory = new Memory({
    user_name: "matosky",
    photo: "img.jpg",
    title: "skydiving",
    description: "moving withjam boys",
    location: "Abuja",
  });

  newMemory
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      console.log(err);
    });
}