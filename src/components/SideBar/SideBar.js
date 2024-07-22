import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
// * React Icons
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoShirtOutline } from "react-icons/io5";
import { FaComments } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineRestore } from "react-icons/md";
import { MdOutlineDiscount } from "react-icons/md";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <h1 className="sidebar-title">
          <svg
            className="sidebar-logo"
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.242676"
              y="0.795898"
              width="36.4078"
              height="36.4078"
              rx="18.2039"
              fill="#8D75F5"
            />
            <path
              d="M27.3192 20.6295C27.3192 21.9176 27.0614 23.0259 26.5734 23.8351C25.947 24.8746 24.9733 25.4245 23.7579 25.4245C21.4381 25.4245 19.8785 22.5142 18.2279 19.4333C17.0286 17.1953 15.5402 14.4104 14.3164 14.4104C13.7267 14.4104 13.0039 15.1271 12.4302 16.2805C11.7741 17.6374 11.4257 19.1224 11.4099 20.6295C11.4099 21.5703 11.5812 22.3719 11.8918 22.8874C12.1801 23.3662 12.5756 23.5888 13.1354 23.5888C14.1871 23.5888 15.4782 21.3707 15.9027 20.6448C16.0254 20.4345 16.2265 20.2814 16.462 20.2194C16.6975 20.1574 16.9479 20.1914 17.1583 20.314C17.3686 20.4367 17.5217 20.6378 17.5837 20.8733C17.6457 21.1087 17.6117 21.3592 17.4891 21.5696C16.8076 22.7383 16.2248 23.5582 15.6534 24.1533C14.8327 25.0084 14.0105 25.4245 13.1354 25.4245C11.9201 25.4245 10.9464 24.8746 10.32 23.8351C9.83198 23.0259 9.57422 21.9176 9.57422 20.6295C9.57422 17.2664 11.3778 12.5747 14.3164 12.5747C16.6363 12.5747 18.1958 15.485 19.8464 18.5659C21.0473 20.8039 22.5365 23.5888 23.7579 23.5888C24.3178 23.5888 24.7133 23.3662 25.0016 22.8874C25.3122 22.3719 25.4835 21.5703 25.4835 20.6295C25.468 19.1225 25.1198 17.6374 24.4639 16.2805C23.8903 15.1271 23.1675 14.4104 22.577 14.4104C22.1395 14.4104 21.6125 14.7928 21.0098 15.5447C20.8576 15.7348 20.6362 15.8566 20.3942 15.8834C20.1522 15.9103 19.9095 15.8399 19.7194 15.6877C19.5294 15.5356 19.4075 15.3142 19.3807 15.0722C19.3539 14.8302 19.4243 14.5875 19.5764 14.3974C20.5593 13.1713 21.5406 12.5747 22.577 12.5747C23.927 12.5747 25.1775 13.6004 26.1069 15.4629C26.8864 17.0748 27.3004 18.8391 27.3192 20.6295Z"
              fill="white"
            />
          </svg>
          به داشبورد خود خوش آمدید
        </h1>
        <ul className="sidebar__menu">
          <li className="sidebar__item active">
            <Link to="/" className="sidebar__link">
              <IoHomeOutline className="sidebar-icon" />
              صفحه اصلی
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/products" className="sidebar__link">
              <IoShirtOutline className="sidebar-icon" />
              محصولات
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/comments" className="sidebar__link">
              <FaComments className="sidebar-icon" />
              کامنت ها
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/users" className="sidebar__link">
              <HiOutlineUsers className="sidebar-icon" />
              کاربران
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/orders" className="sidebar__link">
              <MdOutlineRestore className="sidebar-icon" />
              سفارشات
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/offs" className="sidebar__link">
              <MdOutlineDiscount className="sidebar-icon" />
              تخفیف ها
            </Link>
          </li>
        </ul>
      </div>
      {/* Dark / Light Buttons */}
      <div className="sidebar__btns">
        <button className="sidebar__btns-light">
          روشن
          <CiLight className="sidebar__btns-icon" />
        </button>
        <button className="sidebar__btns-dark btn--active">
          تاریک
          <CiDark className="sidebar__btns-icon" />
        </button>
      </div>
    </div>
  );
}

export default SideBar;
