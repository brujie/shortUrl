const express = require('express');
const app = express();
const connectDB = require('./config/db');
const onScreenShot = require('./utils/screenShot.js'); // 截取图片
const ocrClient = require('./utils/ocrClient.js');  // 处理图片解析文本
const opn = require('opn'); // 浏览器打开网页

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

setTimeout(async ()=>{
  let base64 = await onScreenShot();
  let ocrData = await ocrClient(base64);
  console.log(ocrData.TextDetections.length)
  ocrData.TextDetections.map(item =>{
    if(item.DetectedText.indexOf('natappfree.cc') != -1){
      // http://wvka9s.natappfree.cc -> 127.0.0.1:5000 找到数据进行处理
      let url = item.DetectedText.split('-')[0].replace(/\s/g,'')+'/short';
      console.log(`请访问${url}`) // 短链接网址
      // 使用默认浏览器打开
      opn(url);  
    }
  })
},300)