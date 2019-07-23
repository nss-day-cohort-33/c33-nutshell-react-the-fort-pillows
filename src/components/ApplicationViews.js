import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import API from '../module/API'
import Tasks from "./tasks/Tasks";
import RegistrationForm from "./Login/Registration";

export default class ApplicationViews extends Component {

//TODO:  Delete this later--FROM Here 1--Joy is using this to test the Tasks component
  state = {
    tasks: []
  }
      componentDidMount() {
        const newState = {} //An empty object to hold the data for each array in the state object
        API.getAll("tasks")
            .then( tasks => newState.tasks = tasks)
            .then(() => this.setState(newState))  //After the Task resource is brought back this sets the state and causes the re-rendering!
    }
//TODO:  Delete this later--TO Here 1--Joy is using this to test the Tasks component










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
            return null;
            // Remove null and return the component which will show the messages
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
