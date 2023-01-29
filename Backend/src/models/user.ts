import { Model, Schema, HydratedDocument, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface IUser {
  first_name: string;
  last_name: string;
  user_name: string;
  email: string;
  password: string;
  gender: string;
}

interface IUserMethods {
  genUserAuthToken(): string;
}

interface UserModel extends Model<IUser, {}, IUserMethods> {
  findUserByCredentials(
    email: string,
    password: string
  ): Promise<HydratedDocument<IUser, IUserMethods>>;
}

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: [true, "Please provide a user name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 5,
  },
  gender: {
    type: String,
    required: true,
  },
});

//Hash a plain text password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

//Login credentials validation
userSchema.static(
  "findUserByCredentials",
  async function findUserByCredentials(email, password) {
    const user: any = await User.findOne({ email });
    if (!email) {
      throw new Error("Unable to login");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Unable to login");
    }

    return user;
  }
);

// Generte user authentication token
userSchema.method("genUserAuthToken", async function genUserAuthToken() {
  const user: any = this;
  const secret: string = process.env.JWT_SECRET as string;
  const maxAge: number = 3 * 24 * 60 * 60;
  const token = jwt.sign({ _id: user._id.toString(), user_name: user.user_name }, secret, {
    expiresIn: maxAge,
  });

  await user.save();

  return token;
});

const User = model<IUser, UserModel>("User", userSchema);

export default User;
