import React, { Component } from "react";
import { Button, Dropdown, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="large">
        <Menu.Item header as='h2'>
          Nutshell
        </Menu.Item>
        <Dropdown item icon="sidebar" size=''>
          <Dropdown.Menu>
            <Link to="/">
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Link>
            <Link to="/news">
            <Dropdown.Item>News</Dropdown.Item>
            </Link>
            <Link to="/events">
            <Dropdown.Item>Events</Dropdown.Item>
            </Link>
            <Link to="/tasks">
            <Dropdown.Item>Tasks</Dropdown.Item>
            </Link>
            <Link to="/friends">
            <Dropdown.Item>Friends</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position="right">
          <Menu.Item>
          <Menu.Item header as='h3'>
          <Icon name='user' />
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
