const screenshot = require('desktop-screenshot')
const path = require('path');
const fs = require('fs');
const imgPath = "./image/screen.png";
const onScreenShot = () => {
  return new Promise((resolve,reject)=>{
    screenshot(imgPath, {
      width: 1920,
      height: 1080,
      quality: 120
    }, function (error, complete) {
      if (error) {
        console.log("Screenshot failed", error)
        reject(error)
      } else {
        console.log("Screenshot succeeded")
        resolve(parse(imgPath))
      }
    })
    // let data = parse(imgPath); // 返回base64;
    // return data;
  })
}

function parse(file) {
  let filePath = path.resolve(file); // 原始文件地址
  // 读取文件数据
  let data = fs.readFileSync(filePath);
  data = Buffer.from(data).toString('base64');
  return data;
}

module.exports = onScreenShot;