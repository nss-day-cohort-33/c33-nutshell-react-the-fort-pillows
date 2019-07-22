import React, { Component } from "react";
import LoginForm from "./Login/Login"
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";
import 'semantic-ui-css/semantic.min.css'

class Nutshell extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default Nutshell;
