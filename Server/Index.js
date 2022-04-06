import express from 'express';
import PostRoutes from './Router/Post.routes.js';

const app = express();

app.use(PostRoutes)

app.listen(5000)
console.log('Server is running on port', 5000);
