import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import ErrorBox from "../ErrorBox/ErrorBox";
import { AiOutlineDollarCircle } from "react-icons/ai";
function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productID, setProductID] = useState(null);
  const [mainproductInfos, setMainproductInfos] = useState({});

  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors, setProductNewColors] = useState("");

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

  // ! Delete Modal Methods
  const deleteModalCancelAction = () => {
    console.log(" modal closed");
    setIsShowDeleteModal(false);
  };
  const deleteModalSubmitAction = () => {
    console.log(" modal submit");
    setIsShowDeleteModal(false);
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowDeleteModal(false);
        getAllproducts();
      });
  };

  // ! Details Modal Methods
  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  // ! Edit Modal Methods
  const updateProductInfos = (event) => {
    event.preventDefault();
    console.log("edited product");
  };

  return (
    <>
      <div className="product-table-box">
        {allProducts.length === 0 ? (
          <ErrorBox message={"محصولی یافت نشد "} />
        ) : (
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
              {allProducts.map((product) => (
                <tr className="products-table-tr" key={product.id}>
                  <td>
                    <img
                      src={product.img}
                      alt="product"
                      className="product-table-img"
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price} تومان</td>
                  <td>{product.count}</td>
                  <td className="table-btns">
                    <button
                      className="product-table-btn"
                      onClick={() => {
                        setIsShowDetailsModal(true);
                        setMainproductInfos(product);
                      }}
                    >
                      جزئیات
                    </button>
                    <button
                      className="product-table-btn"
                      onClick={() => {
                        setIsShowDeleteModal(true);
                        setProductID(product.id);
                      }}
                    >
                      حذف
                    </button>
                    <button
                      className="product-table-btn"
                      onClick={() => {
                        setIsShowEditModal(true);
                        setProductNewTitle(product.title)
                        setProductNewPrice(product.price)
                        setProductNewCount(product.count)
                        setProductNewImg(product.img)
                        setProductNewPopularity(product.popularity)
                        setProductNewSale(product.sale)
                        setProductNewColors(product.colors)
                      }}
                    >
                      ویرایش
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Delete Modal */}
        {isShowDeleteModal && (
          <DeleteModal
            submit={deleteModalSubmitAction}
            cancel={deleteModalCancelAction}
          />
        )}
        {/* Details Modal */}

        {isShowDetailsModal && (
          <DetailsModal hideModal={closeDetailsModal}>
            <table className="cms-table">
              <thead>
                <tr>
                  <th>اسم محصول</th>
                  <th>قیمت محصول</th>
                  <th>محبوبیت محصول</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td> {mainproductInfos.title}</td>
                  <td> {mainproductInfos.price} تومان</td>
                  <td>{mainproductInfos.popularity}</td>
                </tr>
              </tbody>
            </table>
          </DetailsModal>
        )}

        {/* Edit Modal */}

        {isShowEditModal && (
          <EditModal
            onClose={() => setIsShowEditModal(false)}
            onSubmit={updateProductInfos}
          >
            <div className="edit-proructs-form-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                value={productNewTitle}
                placeholder="عنوان جدید را وارد کنید"
                className="edit-product-input"
              />
            </div>
            <div className="edit-proructs-form-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                value={productNewPrice}
                placeholder="مبلغ جدید را وارد کنید"
                className="edit-product-input"
              />
            </div>
            <div className="edit-proructs-form-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                value={productNewCount}
                placeholder="موجودی جدید را وارد کنید"
                className="edit-product-input"
              />
            </div>
            <div className="edit-proructs-form-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                value={productNewImg}
                placeholder="آدرس کاور جدید را وارد کنید"
                className="edit-product-input"
              />
            </div>
            <div className="edit-proructs-form-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                value={productNewPopularity}
                placeholder="میزان محبوبیت جدید را وارد کنید"
                className="edit-product-input"
              />
            </div>
            <div className="edit-proructs-form-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                value={productNewSale}
                placeholder="میزان فروش جدید را وارد کنید"
                className="edit-product-input"
              />
            </div>
            <div className="edit-proructs-form-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                value={productNewColors}
                placeholder="تعداد رنگ بندی  جدید را وارد کنید"
                className="edit-product-input"
              />
            </div>
          </EditModal>
        )}
      </div>
    </>
  );
}

export default ProductsTable;
