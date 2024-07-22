import React from "react";
import "../Header/Header.css";
// ! Icons
import { CiBellOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
function Header() {
  return (
    <div className="header">
        <div className="admin-profile__right">
          <img
            src="./images/admin.png"
            alt="admin"
            className="admin-profile__right-image"
          />
          <div className="admin-profile__right__infos">
            <span className="admin-profile__right__infos-name">مجتبی نیری</span>

            <span className="admin-profile__right__infos-role">
              برنامه نویس فرانت اند
            </span>
          </div>
        </div>

        <div className="admin-profile__left">
          <div className="admin-profile__left__search">
            <input placeholder="جست و جو کنید" type="text" className="admin-profile__left__search-input" />
            <button className="admin-profile__left__search-btn">
              جست و جو
              <CiSearch className="admin-profile__left__search-btn-icon" />
            </button>
          </div>

          <span className="admin-profile__left-notification">
            <CiBellOn className="admin-profile__left-notification-icon" />
          </span>
        </div>

    </div>
  );
}

export default Header;
