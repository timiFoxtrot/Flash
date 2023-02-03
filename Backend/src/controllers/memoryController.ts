import express, { Application, Request, Response, NextFunction } from "express";
import Memory from "../models/memory";
import User from "../models/user";

export const createMemory = async (req: Request, res: Response) => {
  console.log(req.file);
  console.log('USERID>>', req.user);
  const memory = new Memory({
    user_id: req.user,
    user_name: req.body.user_name,
    photo: req.file?.filename,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    comments: [{ user: "you the best" }],
  });

  try {
    const newMemory = await memory.save();
    console.log(newMemory);
    res.status(201).json({
      status: "success",
      data: {
        memory: newMemory,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
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

    if (!memory) {
      res.status(404).send();
    }

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

export const deleteMemory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const memory = await Memory.findByIdAndRemove({ _id: req.params.id });
    if (!memory) {
      res.status(400).json({
        status: "fail",
        message: `No memory with id: ${req.params.id} exist`,
      });
    } else {
      res.status(200).json({
        status: "success",
        data: {
          memory,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getOwnMemory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.user;
  // const userName = req.user;
  try {
    const ownMemory = await Memory.find({ user_id: id });

    if (!ownMemory) {
      res.status(404).json({
        status: "success",
        message: "You have not created any memory",
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
        message: "User has not created a memory",
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

export const getAllMemories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(req.user)
  try {
    const memories = await Memory.find({}, null, { sort: { createdAt: -1 } });

    res.status(200).json({
      status: "success",
      results: memories.length,
      data: {
        memories,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

export const getSingleMemory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  try {
    const memory = await Memory.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        memory,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
