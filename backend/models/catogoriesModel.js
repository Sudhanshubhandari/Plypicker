const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
  category_image: String
})

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
