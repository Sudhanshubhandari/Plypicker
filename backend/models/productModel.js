import mongoose from "mongoose";


const productSchema = mongoose.Schema(
    {
    group:[{type:mongoose.Schema.Types.ObjectId, required: true, ref: "Group"}],
    brand:[{type:mongoose.Schema.Types.ObjectId, required: true, ref: "Brand"}],
    product_id: String,
    product_name: String,
    plyUnit: Number,
    laborPerFloor: Number,
    applicability: Number,
    loadingUnloadingPrice: Number,
    product_description: String,
    category: [{type:mongoose.Schema.Types.ObjectId, required: true, ref: "Category"}],
    subcategory: [{type:mongoose.Schema.Types.ObjectId, required: true, ref: "SubCategory"}],
    plyid: String,
    desc: {
      color: String,
      thickness: String
    },
    attrs: {
      imgs: [String]
    },
    averageRating: Number,
    vars: Object,
    randomInt: Number
}
);

const Product = mongoose.model("Product", productSchema);

export default Product;
  