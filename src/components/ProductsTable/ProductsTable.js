import React, { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
function ProductsTable() {
  const [isShowModal, setIsShowModal] = useState(false);

  const deleteModalCancelAction = () => {
    console.log(" modal closed");
    setIsShowModal(false);
  };
  const deleteModalSubmitAction = () => {
    console.log(" modal submit");
    setIsShowModal(false);
  };

  return (
    <>
      <div className="product-table-box">
        <table className="product-table">
          <thead>
            <tr className="product-table__heading-tr">
              <th className="product-table__heading-th">عکس</th>
              <th className="product-table__heading-th">اسم</th>
              <th className="product-table__heading-th">قیمت</th>
              <th className="product-table__heading-th">موجودی</th>
              <th className="product-table__heading-th"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="products-table-tr">
              <td>
                <img
                  src="./images/iphone15.jpg"
                  alt="product"
                  className="product-table-img"
                />
              </td>
              <td>محصول</td>
              <td>92000 تومان</td>
              <td>82</td>
              <td className="table-btns">
                <button className="product-table-btn">جزئیات</button>
                <button
                  className="product-table-btn"
                  onClick={() => setIsShowModal(true)}
                >
                  حذف
                </button>
                <button className="product-table-btn">ویرایش</button>
              </td>
            </tr>
          </tbody>
        </table>
        {isShowModal && (
          <DeleteModal
            submit={deleteModalSubmitAction}
            cancel={deleteModalCancelAction}
          />
        )}
      </div>
    </>
  );
}

export default ProductsTable;
