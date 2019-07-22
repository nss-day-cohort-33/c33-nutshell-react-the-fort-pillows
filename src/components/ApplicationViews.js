import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";

export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/login"
          render={props => {
            return null;
            //This will be Dashboard
          }}
        />
        <Route
          exact
          path="/"
          render={props => {
            return null;
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
      </React.Fragment>
    );
  }
}
