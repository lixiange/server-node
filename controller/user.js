import { UserModel } from "../mongoose/deConnect.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import User from "../constant/user.js";

class UserController {
  constructor() {
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }
  /**
   * 用户登录
   * @param {*} ctx
   * @param {*} next
   */
  async login(ctx, next) {
    try {
      const { user, password } = ctx.request.body;
      const result = await UserModel.findUser({
        user: user,
        password: password,
      });
      if (result[0] && result[0].isadmin) {
        const token = jwt.sign(
          {
            id: result[0]._id,
            user: user,
          },
          config.secret,
          {
            expiresIn: "100h", //到期时间
          }
        );
        ctx.body = {
          code: 200,
          data: {
            token,
            user,
          },
          msg: User.LOGIN_SUCCESS,
        };
      } else {
        ctx.body = {
          code: 404,
          desc: User.LOGIN_NOT_EXIST,
        };
      }
    } catch (err) {
      console.log(err);
      await next();
    }
  }
  /**
   * 用户注册
   * @param {*} ctx
   */
  async register(ctx) {
    try {
     
      console.log(ctx.request.body)
      const { user, password, photo, isadmin, avatarURL } = ctx.request.body;
      console.log(avatarURL)
      console.log('cehi')
      const result = await UserModel.findUser({
        user: user,
        photo: photo,
      });
      console.log(result)
      if (result[0]) {
        ctx.body = {
          code: 400,
          desc: User.USER_REGISTERED,
          data: result[0],
        };
      } else {
        const result = await UserModel.createUser({
          user: user,
          password: password,
          photo: photo,
          isadmin: isadmin || false,
          avatarURL: avatarURL,
        });
        if (result) {
          ctx.body = {
            code: 0,
            desc: User.REGISTER_SUCCESS,
            data: {
              user: user,
              photo: photo,
            },
          };
        } else {
          ctx.body = {
            code: 0,
            desc: User.REGISTER_FAIL,
            data: {},
          };
        }
      }
    } catch (error) {
      ctx.throw(error);
    }
  }
  /**
   * 获取用户信息
   * @param {*} ctx
   * @param {*} next
   */
  async getUserInfo(ctx) {
    try {
      const { id, user } = ctx.state;
      const result = await UserModel.findUser({
        _id: id,
        user: user,
      });
      if (result[0] && result[0].isadmin) {
        // console.log(result[0])
        const { user, photo, isadmin, avatarURL } = result[0];
        ctx.body = {
          code: 200,
          msg: User.SUCCESS,
          data: { user, photo, isadmin, avatarURL },
        };
      } else {
        ctx.body = {
          code: 400,
          desc: User.USER_LOGIN,
        };
      }
    } catch (err) {
      ctx.throw(err);
    }
  }

  async upload(ctx) {
    let file = ctx.req.file;
    ctx.body = {
      code: 200,
      msg: "上传成功",
      data: { url: `${config.proxy_serverHost}/${file.filename}` },
    };
  }
}
export default new UserController();
