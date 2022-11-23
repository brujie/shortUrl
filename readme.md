# 短链接生成

url长链接转化为短链接

由于之前做过微信采集文章助手由于文章链接超长而想过自己实现一个短链接生成器,之前是采用了免费的短链接生成器由于存在次数限制,所以只做了首条数据处理短链接,保证信息的实时推送

![](image/readme/1668853171518.png)

本次项目主要技术

```
 // 依赖文件
 "config": "^3.2.2", // 获取config文件配置
 "express": "^4.17.1",	// 搭建本地服务器
 "mongoose": "^5.6.9",	// 连接mongodb
 "shortid": "^2.2.14",	// 短链接id生成
 "valid-url": "^1.0.9"	// 校验url地址
 // 新增
 "desktop-screenshot": "^0.1.1" // 屏幕截取
 "tencentcloud-sdk-nodejs": "^4.0.486" // 腾讯云orc识别
 "opn": "^6.0.0" // 自动打开浏览器
```

项目图片
![1668853171518](https://user-images.githubusercontent.com/54068022/203448614-55077d6d-de71-4845-8916-2c8a22e51957.png)
![1668853664893](https://user-images.githubusercontent.com/54068022/203448629-5635e1fd-af18-4343-9cba-16a503a1a39f.png)

使用内网穿透支持外网访问项目

![微信截图_20221122163521](https://user-images.githubusercontent.com/54068022/203448666-c90ca4d5-dcbd-4041-9a6f-41e7647f511b.png)

node截取屏幕,通过腾讯云ocr识别进行数据处理,获取随机返回的url进行访问短链接服务

搭建项目参考链接

[mongodb下载安装教程](https://blog.csdn.net/baidu_39298625/article/details/98592631?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-98592631-blog-118633286.pc_relevant_recovery_v2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-98592631-blog-118633286.pc_relevant_recovery_v2&utm_relevant_index=3 )

[短链接参考](https://cloud.tencent.com/developer/article/1492175?from=article.detail.1858351)
