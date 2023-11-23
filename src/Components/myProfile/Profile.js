import React from "react";
import "./Profile.css";
import SideMenu from "./sideMenu/SideMenu";
import MainContent from "./mainContent/MainContent";

class Profile extends React.Component {
  state = {
    token: null,
    _id: "",
    avatar: "",
    name: "",
    email: "",
    data: {},
  };

  //addPost
  submit = async (value) => {
    const token = localStorage.getItem("token");
    const data = await fetch("http://localhost:3000/posts/add", {
      method: "POST",
      headers: {
        "auth-token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const fetchedData = await data.json();
    //console.log(fetchedData)
  };

  fetchUserProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      console.log(userId,'userId')
      const userData = await fetch(
        `http://localhost:3000/posts/user/${userId}`, 
        {
          method: "GET",
          headers: {
            "auth-token": token,
          },  
        }
      );
      const fetchedData = await userData.json();
      console.log(fetchedData,'fetchdata22222');

      if (fetchedData.message) {
        console.log(fetchedData.message);
      } else {
        this.setState({
          data: fetchedData,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");



      const userData = await fetch(
        `http://localhost:3000/posts/user/${userId}`,
        {
          method: "GET",
          headers: {
            "auth-token": token,
          },
        }
      );
      const fetchedUserData = await userData.json();
      console.log(fetchedUserData,'data');

      if (fetchedUserData.message) {
        console.log(fetchedUserData.message, "fetchedUserData msg");
      } else {
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("userId");

      const userData = await fetch(
        `http://localhost:3000/posts/user-info/${id}`,
        {
          method: "GET",
          headers: {
            "auth-token": token,
          },
        }
      );
      const fetchUserInfo = await userData.json();
      console.log(fetchUserInfo,'fetchUserInfo');

      if (fetchUserInfo.message) {
        console.log(fetchUserInfo.message, "User not found");
      } else {
        this.setState({
          _id: fetchUserInfo._id,
          avatar: fetchUserInfo.avatar,
          name: fetchUserInfo.username,
          email: fetchUserInfo.email,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    this.setState({ token: token });
    this.fetchUserData();
    this.fetchUserProducts();
    this.fetchUserInfo();
  }

  render() {
    return (
      <div className="Profile">
        <SideMenu name={this.state.name} avatar={this.state.avatar} />
        <MainContent
          data={this.state.data}
          toggle={this.state.open}
          open={this.handleOpen}
          close={this.handleClose}
          submit={this.submit}
        />
      </div>
    );
  }
}

export default Profile;
