import { Router } from 'express';
import { getPost, postPost, getPostId, deletePost, putPost } from '../Controllers/Controllers.js';

const router = Router();

router.get('/post', getPost);

router.post('/post', postPost);

router.put('/post', putPost);

router.delete('/post', deletePost);

router.get('/post/:id', getPostId);


export default router;