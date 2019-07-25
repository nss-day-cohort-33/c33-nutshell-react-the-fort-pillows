import React, { Component } from "react";
import { Button, Dropdown, Menu, Icon } from "semantic-ui-react";
import { Link, withRouter} from "react-router-dom";
import './NavBar.css'


class NavBar extends Component {
  state = { activeItem: "",
            redirect: false};
  //--Above not in use yet--//
 // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

 handleLogOut = () => {
   sessionStorage.clear()
   this.props.history.push("/")
   window.location.reload();
 }

render() {
    return (
      <Menu borderless size="huge">
        <Menu.Item header as="h2">
          Nutshell
        </Menu.Item>
        <Dropdown item icon="sidebar">
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/">Dashboard</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/news">News</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/events">Events</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/tasks">Tasks</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to="/friends">Friends</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position="right">
          <Menu.Item>
            <Menu.Item header as="h3">
              <Icon name="user" />
              Username
            </Menu.Item>
            <Button primary onClick={this.handleLogOut}>Logout</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}



//--Please Leave for now--//
{
  /* <Menu.Item
  name='messages'
  active={activeItem === 'messages'}
  onClick={this.handleItemClick}
/> */
}

export default withRouter(NavBar)