import { createError } from "../error.js";
import user from "../models/user.js";
export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await user.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {}
  } else {
    return next(createError(403, "you can update only your account !"));
  }
};


export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await user.findByIdAndDelete(req.params.id);
      res.status(200).json("user has been deleted");
    } catch (error) {}
  } else {
    return next(createError(403, "you can can delete  only your account !"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const User = await user.findById(req.params.id);
    res.status(200).json(User)
  } catch (error) {
    next(err);
  }
};
export const subscribe = async (req, res, next) => {
  try {
    await user.findByIdAndUpdate(req.user.id,{
        $push:{suscribedUsers :req.params.id}
    })
    await user.findByIdAndUpdate(req.params.id, {
        $inc:{subscribers: 1}
    })
    res.status(200).json("Subscription successfull.")
  } catch (error) {
    next(err);
  }
};
export const unsubscribe = async (req, res, next) => {
    try {
        await user.findByIdAndUpdate(req.user.id,{
            $pull:{suscribedUsers:req.params.id}
        })
        await user.findByIdAndUpdate(req.params.id, {
            $inc:{subscribers: -1}
        })
        res.status(200).json("unSubscription successfull.")
      } catch (error) {
        next(err);
      }
};
export const like = async (req, res, next) => {
  try {
  } catch (error) {
    next(err);
  }
};
export const dislike = async (req, res, next) => {
  try {
  } catch (error) {
    next(err);
  } 
};
