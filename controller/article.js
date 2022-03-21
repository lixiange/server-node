import { ArticleModel } from "../mongoose/deConnect.js";
import Article from "../constant/article.js";

class ArticleController {
  constructor() {
    this.addActicle = this.addActicle.bind(this);
  }
  /**
   * 创建文章
   * @param {*} ctx
   */
  async addActicle(ctx) {
    const { id, user } = ctx.state;
    // console.log(id);
    // console.log(user);
    try {
      const data = ctx.request.body;
      console.log(data)
      const checkBool = await this.checkArtparam(data);
      console.log(checkBool)
      if (checkBool) {
        const d = await ArticleModel.create({
          content: data.content,
          userId: id,
          userName: user,
          title: data.title,
          imgUrl: data.imgUrl,
          isLower: data.isLower,
        });
        if (d) {
          ctx.body = {
            code: 200,
            msg: Article.ADD_SUCCESS,
            data: d,
          };
        }
      } else {
        ctx.body = {
          code: 400,
          msg: Article.PARAM_FAIL,
          data: {},
        };
      }
    } catch (error) {
      ctx.throw(error);
    }
  }

  async getArticleList(ctx) {
    console.log('daozhel--getArticleList')
    const { user, id } = ctx.state;
    const obj = ctx.request.query;
    console.log(obj);
    try {
      if (obj.pageSize && obj.currentPage) {
        let totalPage = await ArticleModel.countNum({});

        let result = await ArticleModel.findArt(
          { userName: user, userId: id },
          {
            skip: Number((obj.currentPage - 1) * Number(obj.pageSize)),
            limit: Number(obj.pageSize),
          }
        );
        console.log(result);
        
        if (result) {
          ctx.body = {
            code: 200,
            data: {
              datalist: result,
              totalPage: Math.ceil(totalPage / obj.pageSize),
            },
            msg: "success",
          };
        }
      } else {
        console.log(111)
        let result = await ArticleModel.findAllArt(
        );
        console.log(result)
        ctx.body = {
          code: 200,
          data: {
            datalist: result,
            totalPage: 1,
          },
        };
      }
    } catch (error) {
      console.log(error)
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
