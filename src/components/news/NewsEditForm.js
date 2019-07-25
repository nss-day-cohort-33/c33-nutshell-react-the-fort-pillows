import React, { Component } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import API from "../../module/API";

const buttonMargin = {
  margin: "2em"
};

export default class NewsEditForm extends Component {
  state = {
    url: "",
    title: "",
    synopsis: "",
    time: "",
    open: false
    //-- This is et to false to keep the modal closed when the user visits the page --//
  };

  componentDidMount() {
    API.get("news", this.props.newsId)
    .then(news => {
      this.setState({
        url: news.url,
        title: news.title,
        synopsis: news.synopsis,
        time: news.time,
      });
    });
  }

  toggle = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    console.log("whats this?", stateToChange[evt.target.id]);
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingNews = evt => {
    evt.preventDefault();
    const editedNews = {
      id: this.props.newsId,
      url: this.state.url,
      title: this.state.title,
      synopsis: this.state.synopsis,
      time: this.state.time
    };
    this.props.updateNews("News", editedNews);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Modal
          trigger={
            //-- Put toggle in trigger to make Modal appear on click --//
            <Button icon="pencil" onClick={this.toggle} />
          }
          //-sets state of Modal to current state--//
          open={this.state.modalOpen}
        >
          <div className="closeButton">
            <Modal.Header>
              <Button icon="window close" onClick={this.toggle} />
            </Modal.Header>
          </div>
          <Modal.Header>Edit Your Article Archive</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field required>
                <label htmlFor="title">Event Name</label>
                <input
                  id="title"
                  placeholder="Title of Article"
                  onChange={this.handleFieldChange}
                  // -- Add value for Edit Form --//
                  value={this.state.title}
                />
              </Form.Field>
              <Form.Field required>
                <label htmlFor="time">Date</label>
                <input
                  type="text"
                  id="time"
                  placeholder="time"
                  onChange={this.handleFieldChange}
                  // -- Add value for Edit Form --//
                  value={this.state.time}
                  required
                />
              </Form.Field>
              <Form.TextArea
                id="synopsis"
                label="Article Synopsis"
                placeholder="Summary of Article"
                onChange={this.handleFieldChange}
                // -- Add value for Edit Form --//
                value={this.state.synopsis}
                required
              />
              <Form.Field required>
                <label htmlFor="url">URL</label>
                <input
                  id="url"
                  placeholder="URL"
                  onChange={this.handleFieldChange}
                  // -- Add value for Edit Form --//
                  value={this.state.url}
                  required
                />
              </Form.Field>
              <Button type="submit" onClick={this.updateExistingNews}>
                Submit
              </Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
