import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";

export default class EventCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Content>
            <Card.Header>{this.props.event.name}</Card.Header>
            <Card.Meta>{this.props.event.date}</Card.Meta>
            <Card.Description>{this.props.event.description}</Card.Description>
            <Card.Content extra><Icon name="map marker alternate" />{this.props.event.location}</Card.Content>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
