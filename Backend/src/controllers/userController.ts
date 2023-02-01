import express, { Application, Request, Response, NextFunction } from "express";
import User from "../models/user";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(JSON.parse(req.body.body))
    const newUser = await User.create(JSON.parse(req.body.body));
    const token = await newUser.genUserAuthToken();

    res.status(201).send({ newUser, token });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find({});
    res.status(201).json({
      status: "success",
      result: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body.body)
  try {
    const { email, password } = JSON.parse(req.body.body);

    const user = await User.findUserByCredentials(email, password);
    console.log(email, password)
    const token = await user.genUserAuthToken();

    res.send({ user, token });
  } catch (error) {
    res.status(400).json({
      messageFromDB: error,
    });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req._id;
  try {
    const user = await User.findById(id);

    if (user !== null) {
      await user.remove();
      res.status(204);
    }
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
