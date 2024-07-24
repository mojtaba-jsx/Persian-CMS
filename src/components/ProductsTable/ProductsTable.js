import React from "react";
import "./ProductsTable.css";
function ProductsTable() {
  return (
    <div className="product-table-box">
      <table className="product-table">
        <tr className="product-table__heading-tr">
          <th className="product-table__heading-th">عکس</th>
          <th className="product-table__heading-th">اسم</th>
          <th className="product-table__heading-th">قیمت</th>
          <th className="product-table__heading-th">موجودی</th>
          <th className="product-table__heading-th"></th>
        </tr>

        <tr className="products-table-tr">
            <td>
                <img src="./images/iphone15.jpg" alt="product" className="product-table-img" />
            </td>
            <td>
                محصول
            </td>
            <td>
                92000 تومان
            </td>
            <td>
                82
            </td>
            <td className="table-btns">
                <button className="product-table-btn">جزئیات</button>
                <button className="product-table-btn">حذف</button>
                <button className="product-table-btn">ویرایش</button>
            </td>
        </tr>
        
        <tr className="products-table-tr">
            <td>
                <img src="./images/iphone15.jpg" alt="product" className="product-table-img" />
            </td>
            <td>
                محصول
            </td>
            <td>
                92000 تومان
            </td>
            <td>
                82
            </td>
            <td className="table-btns">
                <button className="product-table-btn">جزئیات</button>
                <button className="product-table-btn">حذف</button>
                <button className="product-table-btn">ویرایش</button>
            </td>
        </tr>
      </table>
    </div>
  );
}

export default ProductsTable;
