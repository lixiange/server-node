import Koa from "koa";
import config from "./config/config.js";
import cors from "koa2-cors";
import staticFiles from "koa-static";
import bodyParser from "koa-bodyparser";
import { verify, tokenError, errorHandler } from "./middleware/index.js";
import path from "path";
import routers from "./router/index.js";
const __dirname = path.resolve();

const app = new Koa();

//解决跨域
app.use(
  cors({
    origin: () => {
      return '*';
    },
    // credentials: true,
  })
);

//静态托管文件
app.use(staticFiles(path.join(__dirname, "./public")));



//将post发送的请求头解析到res.request.body中
app.use(bodyParser());

app.use(async (ctx, next) => {
  await tokenError(ctx, next);
});

app.use(async (ctx, next) => [await verify(ctx, next)]);

routers(app);

app.use(errorHandler);

app.on("error", async (err) => {
  console.error("Server Error", err);
});
app.listen(config.port, async () => {
  console.log(`Node Server open:xjserver.site:${config.port}`);
});
