
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from './logo.png'
import { Link } from "react-router-dom"
import API from "../../module/API"

class Login extends Component {

  state = {
    username: "",
    password: "",
    id: "",
  }

  //this handles the inputs field changes and pushes into the state
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
    console.log("changes", stateToChange)
  }
  //this will need to be moved to applicationviews and passed down as a child
  getUser = () =>
    API.getAll("users")

  //this generates the new user and pushes to the database
  //FIXME: NEED TO ADD CODE FOR VERIFICATION
  findCurrentUser = evt => {
    evt.preventDefault();
    if (this.state.username === "" ||  this.state.password === "") {
      window.alert("Please fill out missing section");
    } else {
      const user = {
        name: (this.state.username),
        password: (this.state.password)
      };
      console.log("user", user)

      // Create the animal and redirect user to animal list
      this.getUser(user)
        .then(() => sessionStorage.setItem(
          "credentials",
          JSON.stringify({
            password: this.state.password,
            id: this.state.id
          })
        ))
        .then(() => this.props.history.push("/"));
    };
  }


    render() {
      return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src={logo} /> Log-in to your account
      </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' id="username" onChange={this.handleFieldChange} />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  id="password"
                  onChange={this.handleFieldChange}
                />

                <Button color='teal' fluid size='large' onClick={this.findCurrentUser}>
                  Login
          </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to={"/register"}>Register</Link>
            </Message>
          </Grid.Column>
        </Grid>
      )
    }
  }

  export default Login