import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import Login from "./Login/Login"
import ApplicationViews from "./ApplicationViews";
import Register from "./Login/Registration"
import "./Nutshell.css";
import 'semantic-ui-css/semantic.min.css'
// isAuthenticated = () => sessionStorage.getItem("credentials") !== null
class Nutshell extends Component {

    state = {
      authenticated: sessionStorage.getItem("id")
    }
    
    setAuthState = () => {
      if( sessionStorage.getItem("id")) {
        this.setState({authenticated: true})
      } else {
        this.setState({authenticated: false})
      }
    }

  render() {
    if(this.state.authenticated) {
      return(
      <React.Fragment>
        <NavBar />
        <ApplicationViews isAuthenticated={this.state.authenticated} />
      </React.Fragment>
      )
    } else {
    return (
      <React.Fragment>
      <Login setAuthState={this.setAuthState} />
      </React.Fragment>
    
    );
    }
  }
}

export default Nutshell;
