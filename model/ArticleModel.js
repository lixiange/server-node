import mongoose from "mongoose";

const ArticleSchema = mongoose.Schema({
  content: String,
  createTime: {
    type: Date,
    default: Date.now,
  },
  title: String,
  imgUrl: String,
  isLower: {
    type: Boolean,
    default: false,
  },
  userName: String,
  userId: String,
});

ArticleSchema.statics = {
  /**查找 */
  async findArt(data = {}, option = {}) {
    const result = await this.find(data).skip(option.skip).limit(option.limit);
    return result;
  },
  async findAllArt(data = {}, option = {}) {
    const result = await this.find(data);
    return result;
  },
  /**创建 */
  async createArt(data = {}) {
    console.log('__')
    console.log(data);
    const result = await this.createArt(data);
    return result;
  },
  /**总页数 */
  async countNum(data = {}, option = {}) {
    const result = await this.countDocuments(data);
    return result;
  },
};

const ArticleModel = mongoose.model("article", ArticleSchema);

export default ArticleModel;
