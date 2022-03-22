import { FormModel } from "../mongoose/deConnect.js";
import form from "../constant/form.js";

class ArticleController {
  constructor() {
    this.addForm = this.addForm.bind(this);
  }
  /**
   * 创建文章
   * @param {*} ctx
   */
  async addForm(ctx) {
    // const { id, user } = ctx.state;
    // console.log(id);
    // console.log(user);
    try {
      const data = ctx.request.body;
    //   const checkBool = await this.checkArtparam(data);
      let length = await FormModel.countNum();
      if (data) {
        const d = await FormModel.create({
          data: data,
          id:length+1
        });
        if (d) {
          ctx.body = {
            code: 200,
            msg: form.ADD_SUCCESS,
            data: d.id,
          };
        }
      } else {
        ctx.body = {
          code: 400,
          msg: form.PARAM_FAIL,
          data: {},
        };
      }
    } catch (error) {
      ctx.throw(error);
    }
  }

  async getForm(ctx) {
    const id = ctx.request.query.formId;
    try {
      if (id) {
        let result = await FormModel.findForm({id});

        console.log(result);
        if (result) {
          ctx.body = {
            code: 200,
            data:result[0].data,
            msg: "success",
          };
        }
      } else {
        ctx.body = {
          code: 400,
          data: {},
          msg: Article.PARAM_FAIL,
        };
      }
    } catch (error) {
      ctx.throw(error);
    }
  }

  /**
   * 检查创建文章参数
   */
  checkArtparam(body) {
    if (!body) return false;
    const data = body;
    if (data.content && data.title && data.imgUrl) {
      return true;
    } else {
      return false;
    }
  }
}

export default new ArticleController();
