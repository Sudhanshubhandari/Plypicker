import React, { useState } from "react";
import { Checkbox, ColorPicker, RangeSlider } from "@mantine/core";

import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import brandData from "../data/brandData";
import styles from "./Product.module.css";
const ProductFilter = ({ active ,setActive}) => {
  return (
    <Col
      lg={2}
      className={`text-xs ${styles.filterMenu} ${
        active && styles.active
      }  h-full bg-white`}
    >
      <ListGroup>
        <div className="flex flex-row justify-between items-center ">
          <div>
            <h2 className="text-sm">FILTER</h2>
          </div>
          {active && <div >
            <button
            onClick={() => {
              setActive(false);
            }}
            >
              {" "}
              <i class="uil uil-align-justify text-3xl"></i>
            </button>
          </div>}
        </div>
      </ListGroup>
      <ListGroup>
        <ListGroupItem>
          <strong>BRAND</strong>
          <div>
            {brandData.map((info, index) => (
              <div key={index} className="flex justify-between text-gray-500">
                <div>{info.company}</div>
                <div>{info.numberOfProducts}</div>
              </div>
            ))}
          </div>
          <div className="mt-2 text-amber-700 hover:cursor-pointer">
            +43 more
          </div>
        </ListGroupItem>
      </ListGroup>

      <ListGroup>
        <ListGroupItem>
          <strong> PRICE</strong>
          <ListGroup className="flex flex-row justify-center">
            <ListGroup>
              <ListGroupItem>Rs.7000</ListGroupItem>
            </ListGroup>
            <ListGroup>
              <ListGroupItem>Rs.4000</ListGroupItem>
            </ListGroup>
          </ListGroup>

          <RangeSlider
            label={null}
            mt="xs"
            mb="xl"
            defaultValue={[25, 75]}
            marks={[
              { value: 0, label: "1000" },
              { value: 25, label: "3000" },
              { value: 50, label: "5000" },
              { value: 75, label: "7500" },
              { value: 100, label: "1000" },
            ]}
          />
        </ListGroupItem>
      </ListGroup>

      <ListGroup>
        <ListGroupItem>
          <strong>CATOGORIES</strong>
          <ListGroup className="mt-2">
            <Checkbox
              labelPosition="left"
              label="I agree to sell my privacy"
              styles={{
                body: { justifyContent: "space-between", marginTop: "2px" },
              }}
            />
            <Checkbox
              labelPosition="left"
              label="I agree to sell my privacy"
              styles={{
                body: { justifyContent: "space-between", marginTop: "2px" },
              }}
            />
            <Checkbox
              labelPosition="left"
              label="I agree to sell my privacy"
              styles={{
                body: { justifyContent: "space-between", marginTop: "2px" },
              }}
            />
            <Checkbox
              labelPosition="left"
              label="I agree to sell my privacy"
              styles={{
                body: { justifyContent: "space-between", marginTop: "2px" },
              }}
            />
          </ListGroup>
        </ListGroupItem>
      </ListGroup>

      <ListGroup>
        <ListGroupItem>
          <strong>COLORS</strong>
          <ColorPicker
            withPicker={false}
            disallowInput
            swatchesPerRow={5}
            // swatchesStyle={{ borderRadius: "50%" }}
            size="xs"
            styles={{
              swatch: { width: "30px", height: "0px", borderRadius: "50%" },
            }}
            swatches={[
              "#25262b",
              "#868e96",
              "#fa5252",
              "#e64980",
              "#be4bdb",
              "#7950f2",
              "#4c6ef5",
              "#228be6",
              "#15aabf",
              "#12b886",
            ]}
          />
        </ListGroupItem>
      </ListGroup>

      <ListGroup>
        <ListGroupItem>
          <strong>SIZE(inch)</strong>
          <ListGroup className="mt-2">
            <Checkbox
              labelPosition="left"
              label="5X7"
              styles={{ body: { justifyContent: "space-between" } }}
            />
            <Checkbox
              labelPosition="left"
              label="7X8"
              styles={{
                body: { justifyContent: "space-between", marginTop: "2px" },
              }}
            />
            <Checkbox
              labelPosition="left"
              label="9X10"
              styles={{
                body: { justifyContent: "space-between", marginTop: "2px" },
              }}
            />
            <Checkbox
              labelPosition="left"
              label="11X12"
              styles={{
                body: { justifyContent: "space-between", marginTop: "2px" },
              }}
            />
            <Checkbox
              labelPosition="left"
              label="13X14"
              styles={{
                body: { justifyContent: "space-between", marginTop: "2px" },
              }}
            />
          </ListGroup>
        </ListGroupItem>
      </ListGroup>

      <ListGroup>
        <ListGroupItem>
          <strong>DISCOUNT</strong>
          <Checkbox
            labelPosition="left"
            label="10% and above"
            styles={{
              body: { justifyContent: "space-between", marginTop: "2px" },
            }}
          />

          <Checkbox
            labelPosition="left"
            label="20% and above"
            styles={{
              body: { justifyContent: "space-between", marginTop: "2px" },
            }}
          />
          <Checkbox
            labelPosition="left"
            label="30% and above"
            styles={{
              body: { justifyContent: "space-between", marginTop: "2px" },
            }}
          />
          <Checkbox
            labelPosition="left"
            label="40% and above"
            styles={{
              body: { justifyContent: "space-between", marginTop: "2px" },
            }}
          />
          <Checkbox
            labelPosition="left"
            label="50% and above"
            styles={{
              body: { justifyContent: "space-between", marginTop: "2px" },
            }}
          />
          <Checkbox
            labelPosition="left"
            label="60% and above"
            styles={{
              body: { justifyContent: "space-between", marginTop: "2px" },
            }}
          />
          <Checkbox
            labelPosition="left"
            label="70% and above"
            styles={{
              body: { justifyContent: "space-between", marginTop: "2px" },
            }}
          />
          <Checkbox
            labelPosition="left"
            label="80% and above"
            styles={{
              body: { justifyContent: "space-between", marginTop: "2px" },
            }}
          />
        </ListGroupItem>
      </ListGroup>
    </Col>
  );
};

export default ProductFilter;
