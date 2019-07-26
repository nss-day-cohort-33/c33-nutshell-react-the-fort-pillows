import React, { Component } from "react";
import { Button, Form, Modal} from "semantic-ui-react";
import API from '../../module/API'

const buttonMargin = {
  margin: "2em"
};



export default class EventEditForm extends Component {
  state = {
    userId: "",
    name: "",
    date: "",
    description: "",
    location: "",
    open: false
    //-- This is et to false to keep the modal closed when the user visits the page --//
  };

  componentDidMount() {
    API.get("events", this.props.eventId)
    .then(event => {
      this.setState({
        name: event.name,
        date: event.date,
        description: event.description,
        location: event.location
      });
    });
  }




  toggle = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    console.log("whats this?", stateToChange[evt.target.id])
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingEvent = evt => {
    evt.preventDefault();
    const editedEvent = {
      userId: this.props.currentUser,
      id: this.props.eventId,
      name: this.state.name,
      date: this.state.date,
      description: this.state.description,
      location: this.state.location
    };
    this.props.updateEvent("events", editedEvent);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Modal
          trigger={
            //-- Put toggle in trigger to make Modal appear on click --//
            <Button
              icon="pencil"
              onClick={this.toggle}
             />
          }
          //-sets state of Modal to current state--//
          open={this.state.modalOpen}
        >
          <div className="closeButton">
            <Modal.Header>
              <Button icon="window close" onClick={this.toggle} />
            </Modal.Header>
          </div>
          <Modal.Header>Edit Your Event</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field required>
                <label htmlFor="name">Event Name</label>
                <input
                  id="name"
                  placeholder="Name of Event"
                  onChange={this.handleFieldChange}
                  // -- Add value for Edit Form --//
                  value={this.state.name}
                />
              </Form.Field>
              <Form.Field required>
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  placeholder="Date"
                  onChange={this.handleFieldChange}
                  // -- Add value for Edit Form --//
                  value={this.state.date}
                  required
                />
              </Form.Field>
              <Form.TextArea
                id="description"
                label="Event Description"
                placeholder="Describe the Event"
                onChange={this.handleFieldChange}
                // -- Add value for Edit Form --//
                value={this.state.description}
                required
              />
              <Form.Field required>
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  placeholder="Location"
                  onChange={this.handleFieldChange}
                  // -- Add value for Edit Form --//
                  value={this.state.location}
                  required
                />
              </Form.Field>
              <Button type="submit" onClick={this.updateExistingEvent}>
                Submit
              </Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
