import express from 'express';
import router from './my_router.mjs';
import sqlConn from './mysql.js';

const app = express();
const port = process.env.PORT || 3000;
app.use(router);

app.get('/hello', (req, res) => {
  console.log(123);
  res.send('Hello World1 from Node.js app');
});

sqlConn.query('select * from user', (error, results, fields) => {
  if(error) throw error;
  app.get('/sql', (req, res) => {
    res.send(results);
  });
});

sqlConn.query('select * from user where id = 2', (error, results, fields) => {
  if(error) throw error;
  app.get('/firstname', (req, res) => {
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
