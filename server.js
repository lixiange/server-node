// var http = require("http");
// var path = require("path");
import Koa from "koa";
import Router from "koa-router";
import cors from "koa2-cors";
import config from './config.config.js'
// const bodyParser = require("koa-bodyparser");
// const mongoose = require("mongoose");
// const static = require("koa-static");
// const multer = require("koa-multer");
const app = new Koa();
const router = new Router();

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "/public"));
//   },
//   filename: function (req, file, cb) {
//     let type = file.originalname.split(".")[1];
//     cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`);
//   },
// });

app.use(
  cors({
    credentials: true,
  })
);

// app.use(bodyParser());

// const upload = multer({ storage: storage });
// app.use(static(path.join(__dirname, "/image")));

// mongoose.connect("mongodb://127.0.0.1:27017/config", function (err) {
//   if (err) {
//     console.log("数据库连接失败");
//   } else {
//     console.log("数据库连接成功");
//   }
// });

// router.get("/", function (ctx, next) {
//   ctx.body = "当前访问的是主页";
// });

// router.get("/news/:id", (ctx, next) => {
//   let params = ctx.params;
//   ctx.body = {
//     params,
//   };
// });

// router.post("/home/getData", async (ctx, next) => {
//   ctx.body = {
//     code: 200,
//     data: ctx.query,
//   };
// });

// //上传文件
// router.post("/doAdd", upload.single("file"), async (ctx, next) => {
//   ctx.body = {
//     code: 200,
//     data: ctx.req.file,
//   };
// });

router.get("/formlist", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: {},
    message: "请求成功",
    success: true,
  };
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(4000, () => {
  console.log(`the server is running in ${config.serverHost}`);
});
