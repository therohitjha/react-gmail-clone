import React from "react";
import "./Header.css";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import { Avatar, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signOut = () => {
    auth.signOut().then(() => dispatch(logout()));
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuRoundedIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchRoundedIcon />
        <input type="text" placeholder="Search E-mail" />
        <ArrowDropDownRoundedIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsRoundedIcon />
        </IconButton>
        <IconButton>
          <NotificationsRoundedIcon />
        </IconButton>
        <Avatar
          src={user?.photoURL}
          onClick={signOut}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Header;
