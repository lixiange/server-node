import mongoose from "mongoose";

const FormSchema = mongoose.Schema({
  createTime: {
    type: Date,
    default: Date.now,
  },
  data: {
    type: Object,
    default: false,
  },
  id: Number,
});

FormSchema.statics = {
  /**查找 */
  async findForm(id={}) {
    const result = await this.find(id);
    return result;
  },
  /**创建 */
  async createForm(data = {}) {
    const result = await this.create(data);
    return result;
  },
  /**总页数 */
  async countNum(data = {}, option = {}) {
    const result = await this.countDocuments(data);
    return result;
  },
};

const ArticleModel = mongoose.model("form-data", FormSchema);

export default ArticleModel;
