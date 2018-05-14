import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";

/**
 * Pages
 */
import Home from "./pages/Home";
import Post from "./pages/Post";
import Admin from "./pages/Admin";

import "./styles.css";
import "./layout.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className=" bg-blue p-3 mb-8 text-white ">
          <nav className="container mx-auto flex items-center justify-between">
            <NavLink className={"mx-3  no-underline"} to={"/"}>
              <h1 className="App-title text-white font-sans">Micro</h1>
            </NavLink>

            <div className={"text-white no-underline "}>
              <NavLink className={"mx-3 no-underline text-white"} to={"/"}>
                Home
              </NavLink>
              <NavLink className={"mx-3 no-underline text-white"} to={"/admin"}>
                Admin
              </NavLink>
            </div>
          </nav>
        </header>
        <div className="container mx-auto flex items-center">
          <Route exact path="/" component={Home} />
          <Route path="/post/:id" component={Post} />
          <Route path="/admin" component={Admin} />
        </div>
      </div>
    );
  }
}

export default App;
