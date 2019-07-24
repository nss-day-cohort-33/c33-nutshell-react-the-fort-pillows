import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";

const cardSize = {
  width: "25em",
}
export default class EventCard extends Component {
  render() {
    return (
      <div>
        <Card raised className="large-text card-margin" style={cardSize}>
          <Card.Content className="card-margin">
            <Card.Header>{this.props.event.name}</Card.Header>
            <Card.Meta>{this.props.event.date}</Card.Meta>
            <br />
            <Card.Description>{this.props.event.description}</Card.Description>
            <br />
            <Card.Content extra><Icon name="map marker alternate" />{this.props.event.location}</Card.Content>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
