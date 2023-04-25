import React, { useState } from "react";

import ProductFilter from "./ProductFilter";
import Products from "./Product/Products";

const Home = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="m-4 flex flex-row">
      <ProductFilter active={active} setActive={setActive} />
      <Products setActive={setActive} />
    </div>
  );
};

export default Home;
