import React, { Component } from "react";
import { Button, Form, Modal, Icon } from "semantic-ui-react";

const currentUser = parseInt(sessionStorage.getItem("id"));

const buttonMargin = {
  margin: "2em"
};

export default class NewsForm extends Component {
  state = {
    userId: "",
    url: "",
    title: "",
    synopsis: "",
    time: "",
    open: false
    //-- This is et to false to keep the modal closed when the user visits the page --//
  };

  currentUser = parseInt(sessionStorage.getItem("id"));

  toggle = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewNews = evt => {
    evt.preventDefault();
    const news = {
      userId: currentUser,
      url: this.state.url,
      title: this.state.title,
      synopsis: this.state.synopsis,
      time: this.state.time
    };
    this.props.addNews(news);
    this.toggle();
    //--This toggle will close the Modal upon click --//
  };

  render() {
    return (
      <div>
        <Modal
          trigger={
            //-- Put toggle in trigger to make Modal appear on click --//
            <Button
              primary
              icon
              labelPosition="left"
              style={buttonMargin}
              onClick={this.toggle}
            >
              <Icon name="add" />
              Add News Article
            </Button>
          }
          //-sets state of Modal to current state--//
          open={this.state.modalOpen}
        >
          <div className="closeButton">
            <Modal.Header>
              <Button icon="window close" onClick={this.toggle} />
            </Modal.Header>
          </div>
          <Modal.Header>Add Your Article</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field required>
                <label htmlFor="title">Article Title</label>
                <input
                  id="title"
                  placeholder="Title"
                  onChange={this.handleFieldChange}
                  autoFocus
                  required
                />
              </Form.Field>
              <Form.Field required>
                <label htmlFor="time">Date</label>
                <input
                  type="text"
                  id="time"
                  placeholder="time"
                  onChange={this.handleFieldChange}
                  required
                />
              </Form.Field>
              <Form.TextArea
                id="synopsis"
                label="Article Synopsis"
                placeholder="Summary of Article"
                onChange={this.handleFieldChange}
                required
              />
              <Form.Field required>
                <label htmlFor="url">URL</label>
                <input
                  id="url"
                  placeholder="URL"
                  onChange={this.handleFieldChange}
                  required
                />
              </Form.Field>
              <Button type="submit" onClick={this.constructNewNews}>
                Submit
              </Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
