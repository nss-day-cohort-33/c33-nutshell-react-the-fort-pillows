import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Modal,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import API from "../../module/API";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    modalOpen: false
  };

  toggle = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  //this handles the inputs field changes and pushes into the state
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
    console.log("changes", stateToChange);
  };
  //this will need to be moved to applicationviews and passed down as a child
  addUser = user => API.post("users", user);

  //this generates the new user and pushes to the database
  //FIXME: NEED TO ADD CODE FOR VERIFICATION
  constructNewUser = evt => {
    evt.preventDefault();
    if (
      this.state.username === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      window.alert("Please fill out missing section");
    } else {
      const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      };

      this.addUser(user)
        .then(() =>
          sessionStorage.setItem(
            "credentials",
            JSON.stringify({
              username: this.state.username,
              email: this.state.email,
              password: this.state.password
            })
          )
        )
        .then(() => window.location.reload());
    }
  };

  render() {
    return (
      <Modal
        trigger={
          //-- Put toggle in trigger to make Modal appear on click --//
          <Button primary onClick={this.toggle}>
            Register
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
        <Grid
          textAlign="center"
          style={{ height: "50vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="black" textAlign="center">
              Register for an account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  id="username"
                  onChange={this.handleFieldChange}
                />
                <Form.Input
                  fluid
                  icon="envelope"
                  iconPosition="left"
                  placeholder="E-mail address"
                  id="email"
                  onChange={this.handleFieldChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  id="password"
                  onChange={this.handleFieldChange}
                />

                <Button
                  primary
                  fluid
                  size="large"
                  type="submit"
                  onClick={this.constructNewUser}
                >
                  Register
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Modal>
    );
  }
}

export default Register;
