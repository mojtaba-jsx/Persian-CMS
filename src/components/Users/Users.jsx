import React, { useEffect, useState } from "react";
import "./Users.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";

function Users() {
  const [users, setUsers] = useState([]);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [userdID, setUserID] = useState(false);

  const getAllUsers = () => {
    useEffect(() => {
      fetch("http://localhost:8000/api/users")
        .then((res) => res.json())
        .then((users) => {
          console.log(users);
          setUsers(users);
        });
    }, []);
  };
  getAllUsers();
  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };

  const removeUser = () => {
    fetch(`http://localhost:8000/api/users/${userdID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log("user removed");
    setIsShowDeleteModal(false);
    getAllUsers();
  };

  const closeEditModal = ()=>{
    setIsShowEditModal(false)
  }

  const updateUser = (event)=>{
    event.preventDefault()
    console.log('user updated');
    setIsShowEditModal(false)

    
  }
  return (
    <>
      {users.length ? (
        <div className="cms-main">
          <h1 className="cms-title">لیست کاربران</h1>
          <table className="cms-table">
            <thead>
              <tr>
                <th>نام و نام خانوادگی</th>
                <th>یوزرنیم</th>
                <th>رمز عبور</th>
                <th>شماره تماس </th>
                <th> ایمیل </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    {user.firsname} {user.lastname}
                  </td>
                  <td> {user.username}</td>
                  <td> {user.password}</td>
                  <td> {user.phone}</td>
                  <td> {user.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        setIsShowDeleteModal(true);
                        setUserID(user.id);
                      }}
                    >
                      حذف
                    </button>
                    <button>جزئیات</button>
                    <button
                      onClick={() => {
                        setIsShowEditModal(true);
                        setUserID(user.id)
                      }}
                    >
                      ویرایش
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <ErrorBox message={"  کاربری یافت نشد "} />
      )}

      {isShowDeleteModal && (
        <DeleteModal
          cancel={closeDeleteModal}
          submit={removeUser}
          title={"آیا از حذف اطمینان دارید ؟"}
        />
      )}

      {isShowEditModal && (
        <EditModal onClose={closeEditModal} onSubmit={updateUser}>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>
          
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>
        </EditModal>
      )}
    </>
  );
}

export default Users;
