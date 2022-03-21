import Router from "koa-router";
import ArticleController from "../controller/article.js";

const Api = new Router();

/**
 * 用户信息
 */
Api.post("/addForm", ArticleController.addActicle);
Api.post("/getArticleList", ArticleController.getArticleList);

export default Api;
