import React from "react"
import { Navbar, Nav, Dropdown, NavDropdown } from "react-bootstrap"
import navLogo from "../../assests/logo/strivevideo.png"
import lens from "../../assests/logo/lens.svg"
import avatar from "../../assests/logo/adult-1.png"
import "./Header.css"

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" className="navigation">
      <Navbar.Brand href="#home">
        <img src={navLogo} alt="amazon prime logo on the nav bar" width={120} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <img src={lens} alt="search icon " width={22} className="mr-3" />
        <Dropdown>
          <Dropdown.Toggle variant="success" className="text-white " id="dropdown-basic">
            <img src={avatar} width={32} className="mr-2" alt="avatar for profile" />
            <div className=" d-inline-block align-middle">
              <p className="truncate mb-0">Yonatan Deribe</p>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
