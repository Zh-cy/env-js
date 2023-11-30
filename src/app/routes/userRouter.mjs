import express from 'express';
import userModel from '../database/userModel.mjs';

const userRouter = express.Router();

userRouter.get('/search', async (req, res, next) => {
    try { 
        const result = await userModel.findAll({raw: true});
        res.json({code: 1001, msg: result});
    } catch (err) {
        next(err);
    }
});

userRouter.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        code: 1002, 
        msg: "internal server error",
    });
});

export default userRouter;