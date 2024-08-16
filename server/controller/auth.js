import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import user from "../models/user.js";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signin = async (req, res, next) => {
  try {
    const User = await user.findOne({ name: req.body.name });
    if (!User) return next(createError(404, "User not found"));

    const isCorrect = await bcrypt.compare(req.body.password, User.password);
    if (!isCorrect)
      return next(createError(400, "Please Check the information"));

    const token = jwt.sign({ id: User._id }, process.env.JWT);
    const { password, ...others } = User._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};

export const signup = async (req, res, next) => {
  try {
    // const existingUser = await user.findOne({ email: req.body.email });
    // if (existingUser) {
    //   return res.status(400).send("User already exists");
    // }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new user({ ...req.body, password: hash });
    await newUser.save();

    res.status(200).send("user has been created");
  } catch (err) {
    next(err);
    // console.error(err); // Log the error for debugging
    // res.status(500).send("An error occurred");
  }
};


export const googleAuth = async(req, res, next)=>{
  try {
    const user = await User.findOne({email:req.body.email})
    if(user){
      const token = jwt.sign({id:user._id},process.env.JWT)
      
    res
    .cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200)
    .json(user._doc);
    }else{
      const newUser = new User ({
        ...req.body,
        fromGoogle:true
      })
      const savedUser = await newUser.save()
      const token = jwt.sign({id:savedUser._id},process.env.JWT)

    res
    .cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200)
    .json(savedUser._doc);
    }
  } catch (error) {
    next(error)
    
  }
}