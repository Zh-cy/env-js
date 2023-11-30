import express from 'express';
import userRouter from './routes/userRouter.mjs';
import cors from 'cors'; // 跨域？

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(userRouter);
app.use(express.static('resource'));
app.get('/hello', (req, res) => {
  console.log(123);
  res.send('Hello World1 from Node.js app');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
