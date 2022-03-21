import UserController from "../controller/user.js";
import Router from "koa-router";
import multer from "koa-multer";
import path from "path";
const __dirname = path.resolve();

//设置文件上传目录，文件名
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/public"));
  },
  filename: function (req, file, cb) {
    // console.log(req)
    let type = file.originalname.split(".")[1];
    cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`);
  },
});

const upload = multer({ storage: storage });

const User = new Router();
User.post("/login", UserController.login);
User.post("/register", UserController.register);
User.post("/upload", upload.single("file"), UserController.upload);

export default User;
