import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.send({"name":"tom", "age": 18});
});

router.post('/', (req, res) => {
    res.send("hello post!");
});

export default router;
