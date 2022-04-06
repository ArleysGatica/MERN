import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => { // req = request, res = response
    console.log(req.body);
    res.send('Hello World !!');     
});

export default router;