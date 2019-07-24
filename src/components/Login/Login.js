
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from './logo.png'
import { Link, Redirect } from "react-router-dom"
import API from "../../module/API"

class Login extends Component {

  state = {
    username: "",
    password: "",
  }

  //this handles the inputs field changes and pushes into the state
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }
  //this will need to be moved to applicationviews and passed down as a child
  getUser = () =>
    API.getAll("users", `q=${this.state.username}`)


  //this generates the new user and pushes to the database
  //FIXME: NEED TO ADD CODE FOR VERIFICATION
  findCurrentUser = evt => {
    evt.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
      window.alert("Please fill out missing section");
    } else {
      const user = {
        username: this.state.username,
        password: this.state.password
      }
      //this sets a callback function
      this.setState(user, () => {
        this.getUser()
          .then((data => {
            console.log("data", data[0])
            console.log("this.state", this.state)
              if (this.state.username === data[0].username && this.state.password === data[0].password){
                console.log("yup")
                sessionStorage.setItem("id", data[0].id)
                this.props.history.push("/")
              } else{
                window.alert("Please use a valid login or register")
              }
          }))
      })
      }
    };



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