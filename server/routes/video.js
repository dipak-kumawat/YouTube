import express from 'express'
import { adddVideo, addView, deleteVideo, random, sub, trend, updateVideo } from '../controller/video.js';
import { varifyToken } from '../varifyToken.js';

const router = express.Router()

router.post('/',varifyToken , adddVideo)
router.put('/:id',varifyToken , adddVideo)
router.delete('/:id',varifyToken , adddVideo)
router.get('/find/:id' , adddVideo)
router.put('/view/:id' , addView)
router.get('/trend' , trend)
router.put('/random' , random)
router.put('/subscribe',varifyToken , sub)

export default router;