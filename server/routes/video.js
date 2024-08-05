import express from 'express'
import { adddVideo, addView, getByTag, getVideo, random, search, sub, trend, updateVideo } from '../controller/video.js';
import { varifyToken } from '../varifyToken.js';

const router = express.Router()

router.post('/',varifyToken , adddVideo)
router.put('/:id',varifyToken , adddVideo)
router.delete('/:id',varifyToken , adddVideo)
router.get('/find/:id' , getVideo)
router.put('/view/:id' , addView)
router.get('/trend' , trend)
router.get('/random' , random)
router.get('/sub',varifyToken , sub)
router.get('/tag' , getByTag)
router.get('/search' , search)

export default router;