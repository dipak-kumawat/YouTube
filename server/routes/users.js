import express from 'express'
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from '../controller/user.js';
import { varifyToken } from '../varifyToken.js';

const router = express.Router()

//update
router.put('/:id',varifyToken, update )


//delete
router.delete('/:id',varifyToken, deleteUser)


//get a user
router.get('/find/:id', getUser)


//susbcribe a user
router.put('/sub/:id',varifyToken, subscribe)


//unsusbcribe a user
router.put('/unsub/:id',varifyToken, unsubscribe)

// like a video
router.put('/like/:videoId',varifyToken, like)

// dislike a video
router.put('/dislike/:videoId',varifyToken, dislike)


export default router;