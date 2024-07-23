import React from "react";
import "./AddNewProduct.css";
import { IoMdAdd } from "react-icons/io";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { TbBasketShare } from "react-icons/tb";

function AddNewProduct() {
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
                className="add-products__form__row1-box-input"
                placeholder="اسم محصول را وارد کنید"
              />
              <MdDriveFileRenameOutline className="add-products-icon" />
            </div>

            <div className="add-products__form__row1-box">
              <input
                type="text"
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
                className="add-products__form__row2-box-input"
                placeholder="موجودی محصول را وارد کنید"
              />
              <MdOutlineInventory2 className="add-products-icon" />
            </div>

            <div className="add-products__form__row2-box">
              <input
                type="text"
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
                className="add-products__form__row1-box-icon"
                placeholder="میزان محبوبیت محصول را بنویسید"
              />
              <AiOutlineLike className="add-products-icon" />
            </div>
            <div className="add-products__form__row1-box">
              <input
                type="text"
                className="add-products__form__row1-box-input"
                placeholder="میزان فروش محصول را بنویسید "
              />
              <TbBasketShare className="add-products-icon" />
            </div>
          </div>
        </div>
        <button className="add-products__form-btn">ثبت محصول</button>
      </form>
    </div>
  );
}

export default AddNewProduct;
