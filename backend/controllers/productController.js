import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

export const getProducts = asyncHandler(async (req, res) => {
    const page=req.query.page;
    const totalCount = await Product.estimatedDocumentCount();
    const products = await Product.find({}).skip((page-1)*8).limit(8);
    res.json({products,totalCount});
  });



