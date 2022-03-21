/**
 * 需要检查的token的请求地址
 */
const verifyPath = [];
// const verifyPath = ["/api/userlist", "/api/addArticle",'/api/getArticleList'];
export default {
  db: {
    url: "mongodb://81.70.164.72:27017/form-system",
    // url: "mongodb://127.0.0.1:27017/form-system",
  },
  verifyPath,
  port: 4000,
  secret: "liuheng9227fe78182er",
  serverHost: 'http://xjserver.site:4000',
  proxy_serverHost:'https://xjserver.site:9000' //https转发到http,防止跨域
};
