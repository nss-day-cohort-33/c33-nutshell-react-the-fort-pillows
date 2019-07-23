import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import API from '../module/API'
import Tasks from "./tasks/Tasks";
import Register from "./Login/Registration";
import Login from "./Login/Login"
import Messages from "./messages/Messages"

export default class ApplicationViews extends Component {

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()) {
              return <Messages />
            } else {
              return <Redirect to="/login" />
            };
            //This will be Dashboard
          }}
        />
        <Route
          path="/news"
          render={props => {
            return null;
            // Remove null and return the component which will show the messages
          }}
        />
        <Route
          path="/events"
          render={props => {
            return null;
            // Remove null and return the component which will show the messages
          }}
        />
        <Route
          path="/tasks"
          render={props => {
            //FIXME: Copied from Kennel...need more functionality than a delete
            // return <Tasks editTask={this.editTask}
            //               tasks={this.state.tasks} />
            return null;
          }}
        />

        <Route
          path="/friends"
          render={props => {
            return null;
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </React.Fragment>
    );
  }
}
