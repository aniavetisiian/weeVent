import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AppsIcon from "@material-ui/icons/Apps";
import "./SideMenu.css";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

const SideMenu = (props) => {

  console.log(props,"props-----")
 
  return (
    <div className="sideMenu">
      <div className="AvatarWrap">
        <Avatar className="bgAvatar" src={props.avatar} />
      </div>

      <div style={{ marginLeft: 55, fontSize: 40, color: "white" }}>
        <b>{props.name}</b>
      </div>

      <div className="SignOut">
        <Link to="/posts">
          <ListItem button key="cards">
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="Posts" style={{ color: "white" }} />
          </ListItem>
        </Link>

        <Link to="/">
          <ListItem button key="Sign Out">
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText
              primary="Sign Out"
              style={{ color: "white" }}
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
