import React, { Component } from "react";
import { Button, Dropdown, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

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
              <Dropdown.Item><Link to="/tasks">Tasks</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/friends">Friends</Link></Dropdown.Item>
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

{
  /* <Menu.Item
  name='messages'
  active={activeItem === 'messages'}
  onClick={this.handleItemClick}
/> */
}

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
//         <ul className="nav nav-pills nav-fill">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">
//               Dashboard
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/news">
//               News
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/events">
//               Events
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/tasks">
//               Tasks
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/friends">
//               Friends
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default NavBar;
