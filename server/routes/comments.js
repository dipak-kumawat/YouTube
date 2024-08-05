import express from 'express'
import { addComment, deleteComment, getComment } from '../controller/comments.js';
import { varifyToken } from '../varifyToken.js';

const router = express.Router()

router.post('/', varifyToken, addComment)
router.delete('/:id', varifyToken, deleteComment)
router.get('/:videoId', getComment)

export default router;