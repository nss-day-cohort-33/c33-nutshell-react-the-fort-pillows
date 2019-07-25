import React, { Component } from 'react'
import { Button, Form, Modal, Icon } from "semantic-ui-react"

const buttonMargin = {
  margin: "2em"
};

export default class TaskForm extends Component {
  state = {
    userId: "",
    task: "",
    date: "",
    complete: false,
    open: false
    //-- Open is intialized to false to keep the modal closed when the user visits the page --//
  }

  toggle = () => { //When this function is called, it sets the value of modalOpen to the opposite value.
    this.setState({modalOpen: !this.state.modalOpen})
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value; //This is populating the state object above--id = key description
    this.setState(stateToChange);
  }

  constructNewTask = tsk => {
    tsk.preventDefault();
    const task = {
      userId: 1,
      task: this.state.task,
      date: this.state.date,
      complete: this.state.complete
    }
    this.props.addTask(task)
    this.toggle()
    //--This toggle will close the Modal upon click --//
  }
  render() {
    return (
      <div>
        <Modal

          trigger={
            //-- Put toggle in trigger to make Modal appear on click --//
            <Button primary icon labelPosition="left" style={buttonMargin} onClick={this.toggle}>
              <Icon name="add" />
              Add Task
            </Button>
          }
          //-sets state of Modal to current state--//
          open={this.state.modalOpen}
        >
          <div className="closeButton"><Modal.Header><Button icon="window close" onClick={this.toggle} /></Modal.Header></div>
          <Modal.Header>Add Your Task</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field required>
                <label htmlFor="task">Task Name</label>
                <input
                  id="task"
                  placeholder="Name of Task"
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
              <Button type="submit" onClick={this.constructNewTask}>
                Submit
              </Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}