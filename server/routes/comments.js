import express from 'express'
import {  } from '../controller/comments.js';
import { varifyToken } from '../varifyToken.js';

const router = express.Router()

router.post('/', varifyToken,)

export default router;