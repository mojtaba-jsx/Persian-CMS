import React from "react";
import "./Products.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import DetailsModal from "../DetailsModal/DetailsModal";
function Products() {
  return (
    <>
      <AddNewProduct />
      <ErrorBox message={"محصولی یافت نشد "} />
      <ProductsTable />
      <DetailsModal />
    </>
  );
}

export default Products;
