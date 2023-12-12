import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AppsIcon from "@material-ui/icons/Apps";
import "./SideMenu.css";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

const SideMenu = (props) => {
  return (
    <div className="sideMenu">
      <div className="avatarWrap">
        <Avatar className="bgAvatar" src={props.avatar} />
        <div className="userInfo">
          <div className="userName">{props.name}</div>
        </div>
      </div>

      <div className="menuItems">
        <Link to="/posts" className="menuItem">
          <ListItem button key="cards">
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="Հրապարակումներ" />
          </ListItem>
        </Link>

        <Link to="/" className="menuItem">
          <ListItem button key="signOut">
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText
              primary="Դուրս գալ"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            />
          </ListItem>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
