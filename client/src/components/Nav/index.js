import React from "react";
import "./style.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

function Navigate() {
    return (
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Bookworm</NavbarBrand>
        <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/saved">Wishlist</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
    );
  }

export default Navigate;
