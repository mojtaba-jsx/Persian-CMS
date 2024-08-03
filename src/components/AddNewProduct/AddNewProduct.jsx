import React, { useState } from "react";
import "./AddNewProduct.css";
import { IoMdAdd } from "react-icons/io";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { TbBasketShare } from "react-icons/tb";
import { IoMdColorPalette } from "react-icons/io";

function AddNewProduct({getAllProducts}) {
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductSell, setNewProductSell] = useState("");
  const [newProductColors, setNewProductColors] = useState("");

  const newProductInfo = {
    title: newProductName,
    price: newProductPrice,
    count: newProductCount,
    img: newProductImg,
    popularity: newProductPopularity,
    sale: newProductSell,
    colors: newProductColors,
  };
  console.log(newProductInfo);

  const addNewProduct = (event) => {
    // event.preventDefault();

    fetch(`http://localhost:8000/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        getAllProducts()
      });
  };

  return (
    <div className="add-products">
      <h1 className="add-products__title">
        افزودن محصول جدید
        <IoMdAdd className="add-products__title-icon" />
      </h1>
      <form action="#" className="add-products__form">
        <div className="add-products__form__wrapper">
          <div className="add-products__form__row1">
            <div className="add-products__form__row1-box">
              <input
                type="text"
                value={newProductName}
                onChange={(event) => setNewProductName(event.target.value)}
                className="add-products__form__row1-box-input"
                placeholder="اسم محصول را وارد کنید"
              />
              <MdDriveFileRenameOutline className="add-products-icon" />
            </div>

            <div className="add-products__form__row1-box">
              <input
                type="text"
                value={newProductPrice}
                onChange={(event) => setNewProductPrice(event.target.value)}
                className="add-products__form__row1-box-input"
                placeholder="قیمت محصول را بنویسید"
              />
              <IoIosPricetag className="add-products-icon" />
            </div>
          </div>

          <div className="add-products__form__row2">
            <div className="add-products__form__row2-box">
              <input
                type="text"
                value={newProductCount}
                onChange={(event) => setNewProductCount(event.target.value)}
                className="add-products__form__row2-box-input"
                placeholder="موجودی محصول را وارد کنید"
              />
              <MdOutlineInventory2 className="add-products-icon" />
            </div>

            <div className="add-products__form__row2-box">
              <input
                type="text"
                value={newProductImg}
                onChange={(event) => setNewProductImg(event.target.value)}
                className="add-products__form__row2-box-input"
                placeholder="آدرس عکس محصول را وارد کنید"
              />
              <FaImage className="add-products-icon" />
            </div>
          </div>

          <div className="add-products__form__row3">
            <div className="add-products__form__row1-box">
              <input
                type="text"
                value={newProductPopularity}
                onChange={(event) =>
                  setNewProductPopularity(event.target.value)
                }
                className="add-products__form__row1-box-icon"
                placeholder="میزان محبوبیت محصول را بنویسید"
              />
              <AiOutlineLike className="add-products-icon" />
            </div>

            <div className="add-products__form__row1-box">
              <input
                type="text"
                value={newProductSell}
                onChange={(event) => setNewProductSell(event.target.value)}
                className="add-products__form__row1-box-input"
                placeholder="میزان فروش محصول را بنویسید "
              />
              <TbBasketShare className="add-products-icon" />
              <input
                type="text"
                value={newProductColors}
                onChange={(event) => setNewProductColors(event.target.value)}
                className="add-products__form__row1-box-input"
                placeholder="رنگ های  محصول را بنویسید "
              />
              <IoMdColorPalette className="add-products-icon" />
            </div>
          </div>
        </div>
        <button className="add-products__form-btn" onClick={addNewProduct}>
          ثبت محصول
        </button>
      </form>
    </div>
  );
}

export default AddNewProduct;
