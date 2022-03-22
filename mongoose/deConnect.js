import mongoose from "mongoose";
// const mongoose = require("mongoose");
import UserModel from "../model/UserModel.js";
import ArticleModel from "../model/ArticleModel.js";
import FormModel from "../model/FormModel.js";
import config from "../config/config.js";
// mongoose.connect(config.db.url, {useNewUrlParser: true,useUnifiedTopology:true }); //连接本地数据库，不需要用户名和密码
mongoose.connect(config.db.url, { //使用用户名和密码连接远程数据库
  authSource: "admin",
  user: "root",
  pass: "123456",
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db success");
});

export { UserModel, ArticleModel, FormModel };
