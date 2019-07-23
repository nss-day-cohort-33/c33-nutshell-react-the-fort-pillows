import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import API from '../module/API'
import Tasks from "./tasks/Tasks";
import RegistrationForm from "./Login/Registration";
import Events from "./events/Events";

export default class ApplicationViews extends Component {

  state = {
    events: [],
}

  componentDidMount() {
    const newState = {}

    API.getAll("events")
        .then(events => newState.events = events)
        .then(() => this.setState(newState))
}

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/login"
          render={props => {
            return null;
            }}/>
        <Route
          exact
          path="/register"
          render={props => {
            return null
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
            return <Events events={this.state.events} />;
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
      </React.Fragment>
    );
  }
}
