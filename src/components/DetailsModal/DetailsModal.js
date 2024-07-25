import React, { useEffect } from "react";
import "./DetailsModal.css";
function DetailsModal({ hideModal }) {
  useEffect(() => {
    const checkKey = (event) => {
      console.log(event);
      if (event.keyCode === 27) {
        hideModal();
      }
    };
    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener('keydown',checkKey)
  });

  return (
    <div className="modal-parent modal-active">
      <div className="details-modal ">
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
              <td>لپ تاپ</td>
              <td> 1200000 تومان</td>
              <td>91</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailsModal;
