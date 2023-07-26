import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">K E V I N D I E S E N B E R G</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#resume">Resume</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
