import React from "react";
import "./Products.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
function Products() {
  return (
    <>
      {/* <ErrorBox message={"محصولی یافت نشد "} /> */}
      <AddNewProduct />
    </>
  );
}

export default Products;
