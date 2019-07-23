import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import API from '../module/API'
import Tasks from "./tasks/Tasks";
import RegistrationForm from "./Login/Registration";
import Events from "./events/Events";

export default class ApplicationViews extends Component {

  state = {
    events: [],
    tasks: []
}

  componentDidMount() {
    const newState = {}

    API.getAll("events")
        .then(events => newState.events = events)
        .then(() => API.getAll("tasks"))
        .then( tasks => newState.tasks = tasks)
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
//TODO:  Delete this later--FROM Here 2--Joy is using this to test the Tasks component
          render={props => {
            return (
              <Tasks tasks={this.state.tasks}/>
          );
//TODO:  Delete this later--FROM Here 2--Joy is using this to test the Tasks component
          // return null;
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
