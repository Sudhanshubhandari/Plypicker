const mongoose = require("mongoose");
const { Schema } = mongoose;

const brandSchema = new Schema({
  Category:[{type:mongoose.Schema.Types.ObjectId, required: true, ref: "Category"}],
  SubCategory: [{type:mongoose.Schema.Types.ObjectId, required: true, ref: "SubCategory"}],
  group: [{type:mongoose.Schema.Types.ObjectId, required: true, ref: "Group"}],
  Brand_name: String,
  Brand_image: String,
  
},
{
  timestamps: true,
 })

const Brand = mongoose.model("Brand", brandSchema);

module.exports =Brand;
