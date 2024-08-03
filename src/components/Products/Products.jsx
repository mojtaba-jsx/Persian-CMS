import React,{useEffect,useState} from "react";
import "./Products.css";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    getAllproducts();
  }, []);

  // ! get All Products
  const getAllproducts = () => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((products) => {
        setAllProducts(products);
      });
  };
  return (
    <>
      <AddNewProduct getAllProducts={getAllproducts} />
      <ProductsTable allProducts={allProducts} getAllProducts={getAllproducts} />
    </>
  );
}

export default Products;
