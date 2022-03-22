import Router from "koa-router";
import FormController from "../controller/form.js";


const Api = new Router();

/**
 * 用户信息
 */
Api.post("/addForm", FormController.addForm);
Api.get("/getForm", FormController.getForm);
export default Api;
