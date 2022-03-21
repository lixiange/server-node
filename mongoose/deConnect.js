import mongoose from "mongoose";
// const mongoose = require("mongoose");
import UserModel from "../model/UserModel.js";
import ArticleModel from "../model/ArticleModel.js";
import FormModel from "../model/FormModel.js";
import config from "../config/config.js";
console.log("daozhel");
// mongoose.connect(config.db.url, {useNewUrlParser: true,useUnifiedTopology:true });
mongoose.connect(config.db.url, {
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
