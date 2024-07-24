import React from "react";
import "./Products.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import DeleteModal from '../DeleteModal/DeleteModal'
function Products() {
  return (
    <>
      <AddNewProduct />
      <ErrorBox message={"محصولی یافت نشد "} />
      <ProductsTable/>
      <DeleteModal/>
    </>
  );
}

export default Products;
