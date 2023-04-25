import { Input, Pagination } from "@mantine/core";

import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { IconChevronDown } from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../actions/productActions";
import Product from "./Product";

const Products = (prop) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { products, totalCount } = productList;

  useEffect(() => {
    dispatch(listProducts(page));
  }, [dispatch, page]);

  return (
    <div className="ml-4">
      <div className="flex flex-row justify-between">
        {
          <div>
            <button
              onClick={() => {
                prop.setActive(true);
              }}
            >
              {" "}
              <i class="uil uil-align-justify text-3xl"></i>
            </button>
          </div>
        }
        <div className="flex flex-row ">
          <div className="flex items-center">Sort By: </div>

          <div className="ml-2 ">
            <Input
              label="Relevance"
              component="select"
              rightSection={<IconChevronDown size={14} stroke={1} />}
            >
              <option value="1">Relevance</option>
              <option value="Price">Price</option>
              <option value="Color">Color</option>
            </Input>
          </div>
        </div>
      </div>

      <div>
        {
          <Row>
            {products &&
              products.map((product, index) => (
                <Col sm={12} md={6} lg={4} xl={3} key={index}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
        }
      </div>

      <Pagination
        total={totalCount / 8}
        value={page}
        onChange={setPage}
        className="mt-10 flex justify-center"
      />
    </div>
  );
};

export default Products;
