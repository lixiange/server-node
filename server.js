// var http = require("http");
// var path = require("path");
import Koa from "koa";
import Router from "koa-router";
import cors from "koa2-cors";
import config from './config.config.js'
// const bodyParser = require("koa-bodyparser");
// const mongoose = require("mongoose");
// const static = require("koa-static");
// const multer = require("koa-multer");
const app = new Koa();
const router = new Router();

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "/public"));
//   },
//   filename: function (req, file, cb) {
//     let type = file.originalname.split(".")[1];
//     cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`);
//   },
// });

app.use(
  cors({
    credentials: true,
  })
);

// app.use(bodyParser());

// const upload = multer({ storage: storage });
// app.use(static(path.join(__dirname, "/image")));

// mongoose.connect("mongodb://127.0.0.1:27017/config", function (err) {
//   if (err) {
//     console.log("数据库连接失败");
//   } else {
//     console.log("数据库连接成功");
//   }
// });

// router.get("/", function (ctx, next) {
//   ctx.body = "当前访问的是主页";
// });

// router.get("/news/:id", (ctx, next) => {
//   let params = ctx.params;
//   ctx.body = {
//     params,
//   };
// });

// router.post("/home/getData", async (ctx, next) => {
//   ctx.body = {
//     code: 200,
//     data: ctx.query,
//   };
// });

// //上传文件
// router.post("/doAdd", upload.single("file"), async (ctx, next) => {
//   ctx.body = {
//     code: 200,
//     data: ctx.req.file,
//   };
// });

router.get("/formlist", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: {
      dialogConf: {
        // 弹窗配置
        dialogDrawn: {
          //已抽过奖弹窗
          closeButtonYn: true, // 是否有关闭按钮
          dialogImg: "https://oss.intcolon.com/kcp/img/hadPrized.png", //对话框图片
          dialogType: 2, // 对话框类型，1-没有资格，2-已抽过奖，3-抽奖结果，4-抽奖记录
          maskClosable: true, //是否点击遮罩关闭
          redirectUrl: "", // 按钮跳转链接
          redirectYn: false, // 按钮是否跳转
        },
        dialogHistory: {
          //抽奖列表弹窗
          closeButtonYn: true,
          dialogImg: "https://oss.intcolon.com/kcp/img/prizelist.png",
          dialogType: "",
          maskClosable: false,
          redirectUrl: "",
          redirectYn: false,
        },
        dialogNoJoin: {
          //没有资格弹窗
          closeButtonYn: true,
          dialogImg: "https://oss.intcolon.com/kcp/img/regret.png",
          dialogType: "",
          maskClosable: false,
          redirectUrl: "",
          redirectYn: false,
        },
        dialogResult: {
          //抽奖结果弹窗
          closeButtonYn: true,
          dialogImg: "https://oss.intcolon.com/kcp/img/prize1.png",
          dialogType: "",
          maskClosable: false,
          redirectUrl:
            "https://app.jingsocial.com/microFrontend/survey/public/survey/ejpK7dKkZZLYFTuZHHq3vT?lead_source_type=survey&lead_source_value=ejpK7dKkZZLYFTuZHHq3vT&promotion_code=survey_qrcode&promotion_value=hMraVsxoqRuxpQAh3Svu8Z&promotion_channel_id=WWPWiWxuMQarkyzbTXCt8Z&global_promotion_channel_id=Zqd7mGcV795JQSXSAADWgN&global_promotion_sub_channel_id=XsK3uPtZGk9NbsgKdFCJtW&appId=wx2572f257ee226ed4",
          redirectYn: true,
        },
        dialogSubscribe: {
          //是否关注弹窗
          closeButtonYn: "",
          dialogImg: "https://oss.intcolon.com/kcp/qrcode.png",
          dialogType: "",
          maskClosable: "",
          redirectUrl: "",
          redirectYn: "",
        },
      },
      globalConf: {
        //全局配置
        beginTime: "", //开始时间
        endTime: "", // 结束时间
        wxShareDesc: "金佰利分享测试", //微信分享描述
        wxShareImg: "https://oss.intcolon.com/kcp/brandShare.jpg", // 微信分享图片
        wxShareTitle: "金佰利抽奖测试", // 微信分享标题
        wxShareUrl:
          "https://app.jingsocial.com/microFrontend/survey/public/survey/ejpK7dKkZZLYFTuZHHq3vT?lead_source_type=survey&lead_source_value=ejpK7dKkZZLYFTuZHHq3vT&promotion_code=survey_qrcode&promotion_value=hMraVsxoqRuxpQAh3Svu8Z&promotion_channel_id=WWPWiWxuMQarkyzbTXCt8Z&global_promotion_channel_id=Zqd7mGcV795JQSXSAADWgN&global_promotion_sub_channel_id=XsK3uPtZGk9NbsgKdFCJtW&appId=wx2572f257ee226ed4", // 微信分享跳转地址
        wxSharedYn: false, //是否可分享
        wxSubscribeYn: true, //是否强制关注
        nextPage:
          "https://app.jingsocial.com/microFrontend/survey/public/survey/ejpK7dKkZZLYFTuZHHq3vT?lead_source_type=survey&lead_source_value=ejpK7dKkZZLYFTuZHHq3vT&promotion_code=survey_qrcode&promotion_value=hMraVsxoqRuxpQAh3Svu8Z&promotion_channel_id=WWPWiWxuMQarkyzbTXCt8Z&global_promotion_channel_id=Zqd7mGcV795JQSXSAADWgN&global_promotion_sub_channel_id=XsK3uPtZGk9NbsgKdFCJtW&appId=wx2572f257ee226ed4",
      },
      pageConf: {
        //页面配置
        backgroudImg: "https://oss.intcolon.com/kcp/img/bg.png", //抽奖页背景图片
        balanceVisible: false, // 是否显示剩余抽奖次数
        classifyNum: 4, //奖品类别数量
        prizeList: [
          {
            pid: 18,
            prizeClassify: "一等奖",
            prizeClassifyNo: 1,
            prizeImg: "https://oss.intcolon.com/kcp/img/prize1.png",
            prizeName: "500元购物卡",
            prizeNo: 1,
          },
          {
            pid: 19,
            prizeClassify: "二等奖",
            prizeClassifyNo: 2,
            prizeImg: "https://oss.intcolon.com/kcp/img/prize1.png",
            prizeName: "100元购物卡",
            prizeNo: 2,
          },
          {
            pid: 20,
            prizeClassify: "三等奖",
            prizeClassifyNo: 3,
            prizeImg: "https://oss.intcolon.com/kcp/img/prize1.png",
            prizeName: "CBA联赛球员同款爱地球系列礼盒",
            prizeNo: 3,
          },
          {
            pid: 21,
            prizeClassify: "四等奖",
            prizeClassifyNo: 4,
            prizeImg: "https://oss.intcolon.com/kcp/img/prize1.png",
            prizeName: '随机"回血"红包',
            prizeNo: 4,
          },
        ],
        pageTitle: "金佰利商用测试", // 页面标题
        prizeLogType: 2, //抽奖记录显示类型，1-同抽奖结果弹窗，2-抽奖列表
        prizeTitleImg: "https://oss.intcolon.com/kcp/img/title_ceshi.png", // 抽奖名称图片
        ruleImg: "https://oss.intcolon.com/kcp/img/rule.png", // 规则图片
        wheelImg: "https://oss.intcolon.com/kcp/img/rotate_ceshi.png", // 转盘图片
        cursorImg: "https://oss.intcolon.com/kcp/img/middle.png",
        patchColor: "#ff3d41",
      },
      prizeVersion: 7,
    },
    message: "请求成功",
    success: true,
  };
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(4000, () => {
  console.log(`the server is running in ${config.serverHost}`);
});
