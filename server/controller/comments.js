import { createError } from "../error.js"
import Comment from "../models/Comments.js"
import Video from "../models/Video.js"

export const addComment = async (req, res, next) =>{
    const newComment = new Comment({...req.body, userId:req.user.id})
    try {
         const savedComment = await newComment.save()
        res.status(200).send(savedComment)
    } catch (error) {
        next(error)
    }
}
export const deleteComment = async (req, res, next) =>{
    try {
        const comment = await Comment.findById(req.params.id)
        const video = await Video.findById(req.params.id)
        if(req.user.id === comment.userId  || req.params.id === video.userId){
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json("the comment has been deleted.")

        }else {
            return next(createError(403, "you can delete only your comment! "))
        }
    } catch (error) {
        next(error)
    }
}
export const getComment = async (req, res, next) =>{
    try {
        const comment = await Comment.find({videoId:req.params.videoId})
        res.status(200).json(comment)
    } catch (error) {
        next(error)
    }
}