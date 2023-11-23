import React from "react";
import Home from "./Components/Home/Home";
import Posts from "./Components/Posts/Posts";
import Profile from "./Components/myProfile/Profile";
import { Route, Switch } from "react-router-dom";
import "./App.css";


class App extends React.Component {

  fetchData = async () => {
    try {
      const data = await fetch(
        "http://localhost:3000/posts"
      );
      const fetchedData = await data.json();
      console.log(fetchedData,'xxasas');

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
