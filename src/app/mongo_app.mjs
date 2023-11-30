import express from 'express';
import pkg from 'mongoose';

const { connect, connection, Schema: _Schema, model } = pkg;
const app = express();
const port = 3000;

const mongoConnectionString = 'mongodb://mongo:27017/yourdbname';
connect(mongoConnectionString);

const db = connection;
db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));

const Schema = _Schema;
const TestDataSchema = new Schema({
  name: String
});
const TestData = model('TestData', TestDataSchema);

// 中间件，用于解析 JSON 请求体
app.use(json());

// GET 端口 - 读取数据
app.get('/api/data', async (req, res) => {
  try {
    console.log('get endpoint is called');
    const data = await TestData.find();
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST 端口 - 写入数据
app.post('/api/data', async (req, res) => {
  try {
    const newData = new TestData(req.body);
    const savedData = await newData.save();
    res.json(savedData);
  } catch (error) {
    res.status(500).send(error);
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
