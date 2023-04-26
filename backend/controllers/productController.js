import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import Group from "../models/groupModel.js";
import Brand from "../models/brandsModel.js";
import categorySchema from "../models/catogoriesModel.js";
import SubCategory from "../models/subcatogoriesModel.js";

export const getProducts = asyncHandler(async (req, res) => {
  const page = req.query.page;
  const totalCount = await Product.estimatedDocumentCount();
  const products = await Product.find({})
    .populate(["group", "subcategory", "brand", "category"])
    .skip((page - 1) * 8)
    .limit(8);
  res.json({ products, totalCount });
});

export const getProductById = asyncHandler(async (req, res) => {
  const id = req.query.id;
  const filterProperty = req.query.filterProperty;

  const product = await Product.find({ [filterProperty]: id }).populate([
    "group",
    "subcategory",
    "brand",
    "category",
  ]);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
