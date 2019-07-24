import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import API from '../module/API'
import Tasks from "./tasks/Tasks";
import Register from "./Login/Registration";
import Login from "./Login/Login"
import Messages from "./messages/Messages"
import RegistrationForm from "./Login/Registration";
import Events from "./events/Events";

export default class ApplicationViews extends Component {
  state = {
    messages: [],
    tasks: [],
    events: [],
  }

  componentDidMount() {
    const newState = {} //An empty object to hold the data for each array in the state object
    API.getAll("events")
      .then(events => newState.events = events)
      .then(() => API.getAll("tasks"))
      .then(tasks => newState.tasks = tasks)
      .then(() => API.getAll("messages"))
      .then(messages => newState.messages = messages)
      .then(() => this.setState(newState))
  }

  addMessage = (data) => {
    API.post("messages", data)
      .then(() => API.getAll("messages", "_expand=user"))
      .then(messages =>
        this.setState({
          messages: messages
        })
      )
  }
  addEvent = (data) => {
    API.post("events", data)
    .then(() => API.getAll("events"))
    .then(events => this.setState({
      events: events
    }))
  }

  deleteEvent = (database, id) => {
    API.delete(database, id)
    .then(events =>
      this.setState({
        events:events
      }))
  }

  isAuthenticated = () => sessionStorage.getItem("id") !== null

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <Messages messages={this.state.messages} addMessage={this.addMessage} />
            } else {
              return <Redirect to="/login" />
            };
            //This will be Dashboard
          }} />
        <Route
          exact
          path="/login"
          render={props => {
            return null;
          }} />
        <Route
          exact
          path="/register"
          render={props => {
            return null
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
            return <Events {...props} events={this.state.events} deleteEvent={this.deleteEvent} addEvent={this.addEvent} />;
          }}
        />
        <Route
          path="/tasks"
          //TODO:  Delete this later--FROM Here 2--Joy is using this to test the Tasks component
          render={props => {
            return (
              <Tasks tasks={this.state.tasks} />
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

          <Route path="/login"
          render={props => {
            return (
              <Login {...props} />
            );
          }}
        />

        <Route path="/register" component={Register} />
      </React.Fragment>
    );
  }
}

