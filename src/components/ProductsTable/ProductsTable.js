import React, { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditsModal, setIsShowEditsModal] = useState(false);

  // ! Delete Modal Methods
  const deleteModalCancelAction = () => {
    console.log(" modal closed");
    setIsShowDeleteModal(false);
  };
  const deleteModalSubmitAction = () => {
    console.log(" modal submit");
    setIsShowDeleteModal(false);
  };

  // ! Details Modal Methods
  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  // ! Edit Modal Methods
  const updateProductInfos = (event) => {
    event.preventDefault()
    console.log("edited product");
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
                <button
                  className="product-table-btn"
                  onClick={() => setIsShowDetailsModal(true)}
                >
                  جزئیات
                </button>
                <button
                  className="product-table-btn"
                  onClick={() => setIsShowDeleteModal(true)}
                >
                  حذف
                </button>
                <button
                  className="product-table-btn"
                  onClick={() => setIsShowEditsModal(true)}
                >
                  ویرایش
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Delete Modal */}
        {isShowDeleteModal && (
          <DeleteModal
            submit={deleteModalSubmitAction}
            cancel={deleteModalCancelAction}
          />
        )}
        {/* Details Modal */}

        {isShowDetailsModal && <DetailsModal hideModal={closeDetailsModal} />}

        {/* Edit Modal */}

        {isShowEditsModal && (
          <EditModal
            onClose={() => setIsShowEditsModal(false)}
            onSubmit={updateProductInfos}
          />
        )}
      </div>
    </>
  );
}

export default ProductsTable;
