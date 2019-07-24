import React, { Component } from "react";
import { Button, Form, Modal, Icon } from "semantic-ui-react";

const buttonMargin = {
  margin: "2em"
};

export default class EventForm extends Component {
  state = {
    eventName: "",
    date: "",
    description: "",
    location: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewEvent = evt => {
    evt.preventDefault();
    const event = {
      name: this.state.eventName,
      date: this.state.date,
      description: this.state.description,
      location: this.state.location
    };
    this.props.addEvent(event).then(() => this.props.history.push("/events"));
  };

  render() {
    return (
      <div>
        <Modal
          trigger={
            <Button primary icon labelPosition="left" style={buttonMargin}>
              <Icon name="add" />
              Add Event
            </Button>
          }
        >
          <Modal.Header>Add Your Event</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field required>
                <label htmlFor="eventName">Event Name</label>
                <input
                  id="eventName"
                  placeholder="Name of Event"
                  onChange={this.handleFieldChange}
                  autoFocus
                  required
                />
              </Form.Field>
              <Form.Field required>
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  placeholder="Date"
                  onChange={this.handleFieldChange}
                  required
                />
              </Form.Field>
              <Form.TextArea
                id="description"
                label="Event Description"
                placeholder="Describe the Event"
                onChange={this.handleFieldChange}
                required
              />
              <Form.Field required>
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  placeholder="Location"
                  onChange={this.handleFieldChange}
                  required
                />
              </Form.Field>
              <Button type="submit" onClick={this.constructNewEvent}>
                Submit
              </Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
