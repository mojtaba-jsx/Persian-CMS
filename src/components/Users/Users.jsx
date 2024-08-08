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

  const [userNewFirsname, setNewUserFirsname] = useState("");
  const [userNewLastname, setNewUserLastname] = useState("");
  const [userNewUsername, setNewUserUsername] = useState("");
  const [userNewPassword, setNewUserPassword] = useState("");
  const [userNewPhone, setNewUserPhone] = useState("");
  const [userNewCity, setNewUserCity] = useState("");
  const [userNewEmail, setNewUserEmail] = useState("");
  const [userNewAddress, setNewUserAddress] = useState("");
  const [userNewScore, setNewUserScore] = useState("");
  const [userNewBuy, setNewUserBuy] = useState("");

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
        getAllUsers();
      });
    console.log("user removed");
    setIsShowDeleteModal(false);
  };

  const closeEditModal = () => {
    setIsShowEditModal(false);
  };

  const updateUser = (event) => {
    event.preventDefault();
    const userNewInfos = {
      firsname: userNewFirsname,
      lastname: userNewLastname,
      username: userNewUsername,
      password: userNewPassword,
      phone: userNewPhone,
      city: userNewCity,
      email: userNewEmail,
      address: userNewAddress,
      score: userNewScore,
      buy: userNewBuy,
    };
    fetch(`http://localhost:8000/api/users/${userdID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userNewInfos),
    })
      .then((res) => res.json)
      .then((result) => {
        console.log(result);
        getAllUsers();
      });
    setIsShowEditModal(false);
    console.log("user updated");
  };
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
                        setUserID(user.id);
                        setNewUserFirsname(user.firsname);
                        setNewUserLastname(user.lastname);
                        setNewUserUsername(user.username);
                        setNewUserPassword(user.password);
                        setNewUserPhone(user.phone);
                        setNewUserCity(user.city);
                        setNewUserEmail(user.email);
                        setNewUserAddress(user.address);
                        setNewUserScore(user.score);
                        setNewUserBuy(user.buy);
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
              onChange={(event) => setNewUserFirsname(event.target.value)}
              value={userNewFirsname}
              type="text"
              className="edit-user-info-input"
              placeholder="نام جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              onChange={(event) => setNewUserLastname(event.target.value)}
              value={userNewLastname}
              type="text"
              className="edit-user-info-input"
              placeholder="نام خانوادگی جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              onChange={(event) => setNewUserUsername(event.target.value)}
              value={userNewUsername}
              type="text"
              className="edit-user-info-input"
              placeholder="نام کاربری جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              onChange={(event) => setNewUserPassword(event.target.value)}
              value={userNewPassword}
              type="text"
              className="edit-user-info-input"
              placeholder="رمز عبور جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              onChange={(event) => setNewUserPhone(event.target.value)}
              value={userNewPhone}
              type="text"
              className="edit-user-info-input"
              placeholder="شماره تلفن جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              onChange={(event) => setNewUserCity(event.target.value)}
              value={userNewCity}
              type="text"
              className="edit-user-info-input"
              placeholder="شهر جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              onChange={(event) => setNewUserEmail(event.target.value)}
              value={userNewEmail}
              type="text"
              className="edit-user-info-input"
              placeholder="ایمیل جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <textarea
              onChange={(event) => setNewUserAddress(event.target.value)}
              value={userNewAddress}
              type="text"
              className="edit-user-info-input"
              placeholder="آدرس جدید را وارد نمایید"
            ></textarea>
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              onChange={(event) => setNewUserScore(event.target.value)}
              value={userNewScore}
              type="text"
              className="edit-user-info-input"
              placeholder="امتیاز جدید را وارد نمایید"
            />
          </div>

          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              onChange={(event) => setNewUserBuy(event.target.value)}
              value={userNewBuy}
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار خرید جدید را وارد نمایید"
            />
          </div>
        </EditModal>
      )}
    </>
  );
}

export default Users;
