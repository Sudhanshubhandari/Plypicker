import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  Sub_Category_name: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  },
 
}, { versionKey: false },
{
  timestamps: true,
 });

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

export default SubCategory
