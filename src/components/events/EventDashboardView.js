import React, { Component } from "react";
import { List, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const eventContainer = {
    borderRadius: "1em",
    border: "2px solid WhiteSmoke",
    background: "WhiteSmoke",
    width: "25%",
    height: "100%",
    padding: "1.5em"
}
export default class EventDashboardView extends Component {
  render() {
    return (
      <div style={eventContainer}>
        <Link to="/events"><h1>Events</h1></Link>
        <div>
          <List celled>
            {this.props.events.map(event => (
              <List.Item>
                <Icon name="calendar" />
                <List.Content>
                  <List.Header>{event.name}</List.Header>
                  {event.description}
                </List.Content>
              </List.Item>
            ))}
          </List>
        </div>
      </div>
    );
  }
}
