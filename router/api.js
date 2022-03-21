import Router from "koa-router";
import UserController from "../controller/user.js";
import ArticleController from "../controller/article.js";
import FormController from "../controller/form.js";

const Api = new Router();

/**
 * 用户信息
 */
Api.get("/userlist", UserController.getUserInfo);
Api.post("/addArticle", ArticleController.addActicle);
Api.post("/getArticleList", ArticleController.getArticleList);
Api.post("/addForm", FormController.addForm);
Api.get("/getForm", FormController.getForm);

export default Api;
