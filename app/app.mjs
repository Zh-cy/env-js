import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log(123);
  res.send('Hello World from Node.js app');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});