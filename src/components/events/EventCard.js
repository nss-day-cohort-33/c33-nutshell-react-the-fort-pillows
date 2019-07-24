import React, { Component } from "react";
import { Card, Icon, Confirm, Button } from "semantic-ui-react";
import EventEditForm from "./EventEditForm"

const cardSize = {
  width: "25em"
};
export default class EventCard extends Component {
  //--For Confirmation Box--//
  state = { open: false };

  //--For Confirmation Box--//
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    return (
      <div key={this.props.event.id}>
        <Card raised className="large-text card-margin" style={cardSize}>
          <Card.Content className="card-margin">
            <Card.Header>{this.props.event.name}</Card.Header>
            <Card.Meta>{this.props.event.date}</Card.Meta>
            <br />
            <Card.Description>{this.props.event.description}</Card.Description>
            <br />
            <Card.Content extra>
              <Icon name="map marker alternate" />
              {this.props.event.location}
            </Card.Content>
            <br />
            <Card.Content>
              <div>
                <Button icon="pencil" on cli/>
                {/* For Confirmation Box */}
                <Button icon="trash alternate" onClick={this.open} />
                <Confirm
                  open={this.state.open}
                  onCancel={this.close}
                  onConfirm={() =>
                    this.props.deleteEvent("events", this.props.event.id)
                  }
                />
              </div>
            </Card.Content>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

// onClick={() => this.props.deleteEvent("events", this.props.event.id)}
