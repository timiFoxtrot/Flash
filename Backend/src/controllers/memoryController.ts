import express, { Application, Request, Response, NextFunction } from "express";
import Memory from "../models/memory";
import User from "../models/user";

export const createMemory = async (req: Request, res: Response) => {
  const filename = req.file !== null ? req.file?.originalname : null;

  const memory = new Memory({
    user_name: req.body.user_name,
    photo: req.file,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    comments: [{ user: "you the best" }]
  });


  try {
    const newMemory = await memory.save();
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

export const getOwnMemory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req._id;
  const userName = req.user_name;
  try {
    const ownMemory = await Memory.find({ user_id: id });

    if (!ownMemory) {
      res.status(404).json({
        status: "success",
        message: "You have not created any memory"
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        memory: ownMemory,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const getMemoryByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_name } = req.body;
  try {
    const user = await User.findOne({ user_name });

    if (!user) {
      res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    const userMemories = await Memory.find({ user_name });

    if (!userMemories) {
      res.status(404).json({
        status: "fail",
        message: "User has not created a memory"
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        memory: userMemories,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
