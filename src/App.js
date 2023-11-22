import React from "react";
import Home from "./Components/Home/Home";
import Posts from "./Components/Posts/Posts";
import Profile from "./Components/myProfile/Profile";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  state = {
    postsData: [
      // {
      //   id: "1",
      //   img:
      //     "https://images.pexels.com/photos/459791/pexels-photo-459791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      //   title: "Book's name",
      //   desc: "About book...",
      //   userName: "username",
      //   date: "xx.xx.2020",
      //   userId: {
      //     avatar:
      //       "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      //     userName: "username",
      //     _id: "aaa",
      //   },
      // },
      // {
      //   id: "2",
      //   img:
      //     "https://images.pexels.com/photos/459791/pexels-photo-459791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      //   title: "Book's name",
      //   desc: "About book...",
      //   userName: "username",
      //   date: "xx.xx.2020",
      //   userId: {
      //     avatar:
      //       "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      //     userName: "username",
      //     _id: "bbb",
      //   },
      // },
      // {
      //   id: "3",
      //   img:
      //     "https://images.pexels.com/photos/459791/pexels-photo-459791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      //   title: "Book's name",
      //   desc: "About book...",
      //   userName: "username",
      //   date: "xx.xx.2020",
      //   userId: {
      //     avatar:
      //       "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      //     userName: "username",
      //     _id: "ccc",
      //   },
      // },
      // {
      //   id: "4",
      //   img:
      //     "https://images.pexels.com/photos/415078/pexels-photo-415078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      //   title: "Book's name",
      //   desc: "About book...",
      //   date: "xx.xx.2020",
      //   userId: {
      //     avatar:
      //       "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      //     userName: "username",
      //     _id: "ddd",
      //   },
      // },
      // {
      //   id: "5",
      //   img:
      //     "https://images.pexels.com/photos/459791/pexels-photo-459791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      //   title: "Book's name",
      //   desc: "About book...",
      //   userName: "username",
      //   date: "xx.xx.2020",
      //   userId: {
      //     avatar:
      //       "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      //     userName: "username",
      //     _id: "eee",
      //   },
      // },
      // {
      //   id: "6",
      //   img:
      //     "https://images.pexels.com/photos/176103/pexels-photo-176103.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      //   title: "Book's name",
      //   desc: "About book...",
      //   userName: "username",
      //   date: "xx.xx.2020",
      //   userId: {
      //     avatar:
      //       "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      //     userName: "username",
      //     _id: "fff",
      //   },
      // },
    ],
  };
  fetchData = async () => {
    try {
      const data = await fetch(
        //"https://francophone-eh-53274.herokuapp.com/posts"
      );
      const fetchedData = await data.json();
      console.log(fetchedData);

      this.setState({ postsData: fetchedData });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route
            path="/posts"
            render={() => <Posts postsData={this.state.postsData} />}
          />
          <Route path="/myProfile" exact component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
