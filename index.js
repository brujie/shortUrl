const express = require('express');
const connectDB = require('./config/db');
const app = express();

// 连接MongoDB
connectDB();
app.use(express.json({
  extended: false
}));
app.use(express.static(__dirname));
app.get('/short',function(req,res){
  res.sendFile(__dirname + '/short.html');
});
// 路由，稍后设置
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port},Please open http://localhost:${port}/short`);
});