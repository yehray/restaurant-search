import React from "react";
import {Navbar, Nav, NavItem, MenuItem, NavDropDown} from 'react-bootstrap';
class NavBar extends React.Component{
  render() {
    return ( 
      <div>
      <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Restaurant Searcher</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavItem eventKey={3} href="#">Search</NavItem>
      </Nav>
    </Navbar>
    </div>
 

  )
  }
}
export default NavBar;
