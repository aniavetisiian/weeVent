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
    console.log(fetchedData);
  };

  fetchUserProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      const userData = await fetch(
        //`http://localhost:3000/posts/${this.state._id}`,
        //`http://localhost:3000/user/${this.state._id}`,
        //"http://localhost:3000/posts/user/auth/profile",
        "http://localhost:3000/posts/user/655ca780904d398f3d34324d", //id get
        // "https://francophone-eh-53274.herokuapp.com/user/auth/profile",
        {
          method: "GET",
          headers: {
            "auth-token": token,
          },
        }
      );
      const fetchedData = await userData.json();
      console.log(fetchedData);

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
      const userData = await fetch(
        //`http://localhost:3000/user/${this.state._id}`, // get user Id and change with :userId
        "http://localhost:3000/posts/user/:userId", //id get
        // "https://francophone-eh-53274.herokuapp.com/user/auth/profile",
        {
          method: "GET",
          headers: {
            "auth-token": token,
          },
        }
      );
      const fetchedUserData = await userData.json();
      console.log(fetchedUserData);

      if (fetchedUserData.message) {
        console.log(fetchedUserData.message);
      } else {
        this.setState({
          _id: fetchedUserData._id,
          avatar: fetchedUserData.avatar,
          name: fetchedUserData.username,
          email: fetchedUserData.email,
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
