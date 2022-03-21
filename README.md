### 项目启动方法

npm install 安装项目依赖

npm run start 启动项目，根文件为app.js

### 项目介绍

使用node.js+koa框架写的后台服务。

### 项目功能
koa2-cors 解决跨域  <br/>
koa-static 拖拽public目录下的静态文件  <br/>
koa-bodyparser 将post发送的请求头解析到res.request.body中  <br/>
koa2-cors 解决跨域  <br/>
在config中配置需要校验token的api，在中间件中首先检查数组中token是否失效，如果失效直接抛出异常<br/>
errorHandler中封装了错误处理。对抛出的异常进行处理再返回。

### 项目地址



