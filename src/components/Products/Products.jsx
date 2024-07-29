import React from "react";
import "./Products.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
function Products() {
  return (
    <>
      <AddNewProduct />
      <ProductsTable />
    </>
  );
}

export default Products;
