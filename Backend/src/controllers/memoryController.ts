import express, { Application, Request, Response, NextFunction } from "express";
import Memory from "../models/memory";

interface Post {
  user_name?: string;
  photo?: string;
  title?: string;
  description?: string;
  location?: string;
  likes?: number;
  date_created?: string;
  date_updated?: string;
  comments?: [{ user: string; comment: string }];
}

export const createMemory = async (req: Request, res: Response) => {
  try {
    const newMemory = new Memory({ ...req.body });
    await newMemory.save();

    res.status(201).json({
      status: "success",
      data: {
        memory: newMemory,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const updateMemory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const allowedUpdates = ["description", "title", "likes"];
  const updates = Object.keys(req.body);
  const isValidUpdates = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidUpdates)
    return res.status(400).send({ Error: "Unknown update!" });

  try {
    const memory: any = await Memory.findOne({ _id: req.params.id });
    updates.forEach((update) => (memory[update] = req.body[update]));
    await memory.save();

    res.status(200).json({
      status: "success",
      data: {
        memory,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
