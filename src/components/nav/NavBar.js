import React, { Component } from "react";
import { Button, Dropdown, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import './NavBar.css'

export default class NavBar extends Component {
  state = { activeItem: "" };
  //--Above not in use yet--//

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    //TODO: for currently selected item --//


    return (
      <Menu borderless size="huge">
        <Menu.Item header as="h2">
          Nutshell
        </Menu.Item>
        <Dropdown item icon="sidebar">
          <Dropdown.Menu inverted>
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
            <Button primary>Logout</Button>
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

