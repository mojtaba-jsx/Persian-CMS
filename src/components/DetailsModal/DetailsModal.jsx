import React, { useEffect } from "react";
import "./DetailsModal.css";
function DetailsModal({ hideModal, children }) {
  useEffect(() => {
    const checkKey = (event) => {
      console.log(event);
      if (event.keyCode === 27) {
        hideModal();
      }
    };
    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener("keydown", checkKey);
  });

  return (
    <div className="modal-parent modal-active">
      <div className="details-modal ">{children}</div>
    </div>
  );
}

export default DetailsModal;
