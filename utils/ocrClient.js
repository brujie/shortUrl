const tencentcloud = require("tencentcloud-sdk-nodejs");
const OcrClient = tencentcloud.ocr.v20181119.Client;

const clientConfig = {
  credential: {
    secretId: "secretId", // 替换自己的secretId
    secretKey: "secretKey", //  替换自己的secretKey
  },
  region: "ap-beijing",
  profile: {
    httpProfile: {
      endpoint: "ocr.tencentcloudapi.com",
    },
  },
};

// 实例化要请求产品的client对象,clientProfile是可选的
const client = new OcrClient(clientConfig);
const ocrClient = (ImageBase64) => {
    return client.EnglishOCR({
      // "ImageUrl": "https://member.jingpinku.com/static/member/images/jingpinku.png" || "https://xxx.com/static/member/images/xxx.png"
      "ImageBase64": ImageBase64 // 此处使用base64处理
    }).then(
      (data) => {
        return data
      },
      (err) => {
        console.error("error", err);
      }
    );
}
module.exports = ocrClient;
