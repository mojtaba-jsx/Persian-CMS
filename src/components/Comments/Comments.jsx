import React from "react";
import "./Comments.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
function Comments() {
  return (
    <>
    <ErrorBox message={"  کامنتی یافت نشد "} />
    {/* <DeleteModal/> */}
    </>
  );
}

export default Comments;
