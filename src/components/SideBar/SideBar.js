import React from "react";
import "./SideBar.css";
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
        <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
        <ul className="sidebar__menu">
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              صفحه اصلی
              <IoHomeOutline />
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              محصولات
              <IoShirtOutline />
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              کامنت ها
              <FaComments />
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              کاربران
              <HiOutlineUsers />
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              سفارشات
              <MdOutlineRestore />
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              تخفیف ها
              <MdOutlineDiscount />
            </a>
          </li>
        </ul>
      </div>
      {/* Dark / Light Buttons */}
      <div className="sidebar__btns">
        <button className="sidebar__btns-light">
          روشن
          <CiLight />
        </button>
        <button className="sidebar__btns-dark">
          تاریک
          <CiDark />
        </button>
      </div>
    </div>
  );
}

export default SideBar;
