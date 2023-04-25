import express from "express";
import {
  getProducts,
  // getProductById,
  // deleteProduct,
  // createProduct,
  // updateProduct,
  // createReviewOfProduct,
} from "../controllers/productController.js";


const router = express.Router();
router.route("/").get(getProducts)
//   .route("/:id")
//   .get(getProductById)


export default router;