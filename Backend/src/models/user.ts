import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

interface User {
  first_name: string;
  last_name: string;
  user_name: string;
  email: string;
  password: string;
  gender: string;
}

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
userSchema.statics.findUserByCredentials = async (email, password) => {
  const user: User = (await User.findOne({ email })) as User;
  if (!email) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return user;
};

const User = mongoose.model("User", userSchema);

export default User;
