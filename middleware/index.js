import config from "../config/config.js";
import jwt from "jsonwebtoken";
import { UserModel } from "../mongoose/deConnect.js";

/**
 * 中间件  检查token是否失效
 */

async function verify(ctx, next) {
  const {
    URL: { pathname },
    headers: { token },
  } = ctx.request;
  const isVerify = config.verifyPath.some((item) => {  //当前路径是否需要校验token
    return item === pathname;
  });
  if (isVerify) {
    let jwtVerify;
    try {
      jwtVerify = await jwt.verify(token, config.secret);
    } catch (err) {
      ctx.throw(401, "JsonWebTokenError", {
        name: "JsonWebTokenError",
      });
    }
    const { id, user } = jwtVerify;
    //判断用户是否存在
    const result = await UserModel.findUser({ _id: id, user: user });
    if (result[0] && id) {
      ctx.state = { id, user };
    }
    await next();
  } else {
    await next();
  }
}

/**
 * token异常报错
 */
async function tokenError(ctx, next) {
  await next().catch((err) => {
    if (err.name === "JsonWebTokenError") {
      ctx.status = 401;
      ctx.body = {
        error: err.originalError ? err.originalError.message : err.message,
      };
    } else {
      ctx.status = err.status || 500;
      ctx.body = {
        error: err.originalError ? err.originalError.message : err.message,
      };
    }
  });
}

/**
 * error处理
 * @param {*} ctx
 * @param {*} next
 */
async function errorHandler(ctx, next) {
  try {
    await next();
  } catch (err) {
    console.log(err)
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit("error", err, ctx);
  }
}

export { verify, tokenError, errorHandler };
