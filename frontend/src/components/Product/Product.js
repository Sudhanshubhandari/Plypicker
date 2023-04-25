import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Rating";

const Product = (props) => {
  const { product } = props;

  return (
    <Card className=" py-2 px-1 rounded h-full">
      <Card.Img src={product.attrs.imgs} variant="top" className="h-60" />
      <Card.Body>
        <Card.Title as="div">
          <strong>{product.product_name}</strong>
        </Card.Title>
        <Card.Text as="p" className="my-3">
          <Rating rating={product.averagerating} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
