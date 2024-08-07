import React, { useState, useEffect } from "react";
import "./Comments.css";

import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
  const [isShowRejectModal, setIsShowRejectModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [mainCommentBody, setMainCommentBody] = useState("");
  const [commentID, setCommentID] = useState(null);
  

  useEffect(() => {
    getAllComments();
  }, []);

  function getAllComments() {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  }

  const closeDetailsModal = () => setIsShowDetailsModal(false);
  const closeDeleteModal = () => setIsShowDeleteModal(false);
  const closeEditModal = () => setIsShowEditModal(false);

  const deleteComment = () => {
    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    setIsShowDeleteModal(false);
    getAllComments();
  };

  const updateComment = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: mainCommentBody,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowEditModal(false);
        getAllComments();
      });
  };

  const closAcceptmodal = () => {
    console.log("close accept modal comment");
    setIsShowAcceptModal(false);
  };

  const acceptComment = () => {
    fetch(`http://localhost:8000/api/comments/accept/${commentID}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowAcceptModal(false);
        getAllComments();
      });
    console.log("accept comment ");
  };

  const closRejectmodal = () => {
    setIsShowRejectModal(false);
    console.log("reject modal closed");
  };
  const rejectComment = () => {
    fetch(`http://localhost:8000/api/comments/reject/${commentID}`,{
      method:'POST'
    })
    .then(result =>{
      console.log(result);
      setIsShowRejectModal(false);
      getAllComments()
    })
    console.log("coment rejected");
  };

  return (
    <div className="cms-main">
      {allComments.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
            </tr>
          </thead>

          <tbody>
            {allComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.userID}</td>
                <td>{comment.productID}</td>
                <td>
                  <button
                    onClick={() => {
                      setMainCommentBody(comment.body);
                      setIsShowDetailsModal(true);
                    }}
                  >
                    دیدن متن
                  </button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>
                  <button
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setCommentID(comment.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    onClick={() => {
                      setIsShowEditModal(true);
                      setMainCommentBody(comment.body);
                      setCommentID(comment.id);
                    }}
                  >
                    ویرایش
                  </button>
                  <button>پاسخ</button>

                  {comment.isAccept === 0 ? (
                    <button
                      onClick={() => {
                        setIsShowAcceptModal(true);
                        setCommentID(comment.id);
                      }}
                    >
                      تایید
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setIsShowRejectModal(true);
                        setCommentID(comment.id);
                      }}
                    >
                      رد
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ کامنتی یافت نشد" />
      )}

      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <p className="text-modal">{mainCommentBody}</p>
          <button className="text-modal-close-btn" onClick={closeDetailsModal}>
            بستن
          </button>
        </DetailsModal>
      )}

      {isShowDeleteModal && (
        <DeleteModal
          title={"آیا با حذف کامنت موافق هستید ؟ "}
          cancel={closeDeleteModal}
          submit={deleteComment}
        />
      )}

      {isShowEditModal && (
        <EditModal cancel={closeEditModal} submit={updateComment}>
          <textarea
            onChange={(event) => setMainCommentBody(event.target.value)}
            className="edit-comment-text"
            value={mainCommentBody}
          ></textarea>
        </EditModal>
      )}

      {isShowAcceptModal && (
        <DeleteModal
          title={"آبا تایید کامنت موافق هستید ؟"}
          cancel={closAcceptmodal}
          submit={acceptComment}
        />
      )}
      {isShowRejectModal && (
        <DeleteModal
          title={"آبا رد کامنت موافق هستید ؟"}
          cancel={closRejectmodal}
          submit={rejectComment}
        />
      )}
    </div>
  );
}
