import React from "react";
import "./ProductsTable.css";
function ProductsTable() {
  return (
    <div>
      <table className="product-table">
        <tr className="product-table__heading-tr">
          <th className="product-table__heading-th">عکس</th>
          <th className="product-table__heading-th">اسم</th>
          <th className="product-table__heading-th">قیمت</th>
          <th className="product-table__heading-th">موجودی</th>
        </tr>

        <tr>
            <td>
                <img src="./images/admin.png" alt="product" className="product-table-img" />
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
            <td>
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
