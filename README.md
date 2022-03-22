### 项目启动方法

npm install 安装项目依赖

npm run start 启动项目，根文件为app.js

### 项目介绍

使用node.js+koa+mongodb写的后台服务。

### 项目功能
mongoose连接mongodb数据库<br/>
koa2-cors 解决跨域  <br/>
koa-static 拖拽public目录下的静态文件  <br/>
koa-multer 完成文件上传到本地public目录<br/>
koa-bodyparser 将post发送的请求头解析到res.request.body中  <br/>
koa2-cors 解决跨域  <br/>
在config中配置需要校验token的api，在中间件中首先检查是否需要校验token，token是否失效，如果失效直接抛出token异常<br/>
errorHandler中封装了错误处理。对抛出的异常进行处理再返回。

### 项目地址

http://xjserver.site:4000
https://xjserver.site:9000

