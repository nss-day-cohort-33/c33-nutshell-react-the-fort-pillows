import React, { Component } from "react";
import EventCard from "./EventCard";
import "./events.css";
import { Button, Icon, Grid, GridColumn } from "semantic-ui-react";
import EventForm from "./EventForm";

export default class Events extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="events-header">
          <h1>Events Calendar</h1>
          <EventForm addEvent={this.props.addEvent} {...this.props} />
        </div>
        <div className="card-container">
            {this.props.events.map(event => (
              <EventCard key={event.id} event={event} deleteEvent={this.props.deleteEvent} {...this.props} />
            ))}
        </div>
      </React.Fragment>
    );
  }
}
