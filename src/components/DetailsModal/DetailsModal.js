import React from "react";
import "./DetailsModal.css";
function DetailsModal() {
  return (
    <div className="modal-parent modal-active">
      <div className="details-modal ">
        <table className="cms-table">
          <tr>
            <th>اسم محصول</th>
            <th>قیمت محصول</th>
            <th>محبوبیت محصول</th>
          </tr>

          <tr>
            <td>لپ تاپ</td>
            <td> 1200000 تومان</td>
            <td>91</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DetailsModal;
