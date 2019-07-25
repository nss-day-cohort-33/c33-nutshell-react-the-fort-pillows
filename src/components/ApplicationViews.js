import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import API from '../module/API'
import Tasks from "./tasks/Tasks";
import Register from "./Login/Registration";
import Login from "./Login/Login"
import Messages from "./messages/Messages"
import Events from "./events/Events";
import EventDashboardView from "./events/EventDashboardView"
import News from "./news/News";


export default class ApplicationViews extends Component {
  state = {
    messages: [],
    tasks: [],
    events: [],
    users: [],
    news: [],
    currentUser: parseInt(sessionStorage.getItem("id"))
  }

  componentDidMount() {
    const newState = {} //An empty object to hold the data for each array in the state object
    API.getAll("events")
      .then(events => newState.events = events)
      .then(() => API.getAll("tasks"))
      .then(tasks => newState.tasks = tasks)
      .then(() => API.getAll("users"))
      .then(users => newState.users = users)
      .then(() => API.getAll("messages", "_expand=user"))
      .then(messages => newState.messages = messages)
      .then(() => API.getAll("news"))
      .then(news => newState.news = news)
      .then(() => this.setState(newState))
  }

  addMessage = (data) => {
    API.post("messages", data)
      .then(() => API.getAll("messages", "_expand=user"))
      .then(messages =>
        this.setState({
          messages: messages
        }))
  }
  addEvent = (data) => {
    API.post("events", data)
    .then(() => API.getAll("events"))
    .then(events => this.setState({
      events: events
    }))
  }
//delete functions
  deleteMessage = (database, id) => {
    API.delete(database, id)
    .then(messages =>
      this.setState({
        messages:messages
      }))
  }
//update functions
    updateMessage = (editMessage) => {
      return API.put("messages", editMessage)
      .then (() => API.getAll("messages", "_expand=user"))
      .then( messages => {
        this.setState({
          messages: messages
        })
      })
    }
//this confirm authentication
  // isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  addNews = (data) => {
    API.post("news", data)
    .then(() => API.getAll("news"))
    .then(news => this.setState({
      news: news
    }))
  }

  deleteEvent = (database, id) => {
    API.delete(database, id)
    .then(events =>
      this.setState({
        events:events
      }))
  }

  addTask = (data) => {
    API.post("tasks", data)
    .then(() => API.getAll("tasks"))
    .then(tasks => this.setState({
      tasks: tasks
    }))
  }
  deleteNews = (database, id) => {
    API.delete(database, id)
    .then(news =>
      this.setState({
        news:news
      }))
  }

  updateEvent = (database, id) => {
    API.put(database, id)
    .then(() => API.getAll("events"))
    .then(events => this.setState({events:events}))
  }

  updateNews = (database, id) => {
    API.put(database, id)
    .then(() => API.getAll("news"))
    .then(news => this.setState({news:news}))
  }

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={(props) => {
              return <Messages messages={this.state.messages}
              addMessage={this.addMessage}
              deleteMessage={this.deleteMessage}
              users={this.state.users}
              updateMessage={this.updateMessage}/>
      
            //This will be Dashboard
          }} />
        <Route
          exact path="/news"
          render={props => {
            return <News {...props} currentUser={this.state.currentUser} news={this.state.news} deleteNews={this.deleteNews} addNews={this.addNews} updateNews={this.updateNews} />;
          }}
        />
        <Route
          path="/events"
          render={props => {
            return <Events {...props} currentUser={this.state.currentUser} events={this.state.events} deleteEvent={this.deleteEvent} addEvent={this.addEvent} updateEvent={this.updateEvent} />;
          }}
        />
        <Route
          exact path="/"
          render={props => {
            return <EventDashboardView events={this.state.events} />;
          }}
        />
        <Route
          path="/tasks"
          //TODO:  Delete this later--FROM Here 2--Joy is using this to test the Tasks component
          render={props => {
            return (
              <Tasks    addTask={this.addTask}
                        tasks={this.state.tasks} />
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

