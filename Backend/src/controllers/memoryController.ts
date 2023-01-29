import express, { Application, Request, Response, NextFunction } from "express";
import Memory from "../models/memory";


export const createMemory = async (req: Request, res: Response) => {
  const filename = req.file !== null ? req.file?.filename : null;
  const memory = new Memory({
    user_name: "cypher",
    photo: filename,
    title: "Jumping",
    description: "lorem description two four four",
    location: "America",
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
