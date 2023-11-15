import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Input from "../../Generics/Input";
import { Avatar, Bell, Container, Logo, Nav, Search } from "./style";

const Navbar = () => {
  return (
    <>
    <Container>
      <Nav>
        <Nav.Column>
          <Logo />
          <h3>
            <span>ECO</span> MONITORING
          </h3>
          <Search />
          <Input
            typing={"main"}
            width={"264"}
            ml={"-40"}
            mt={"0"}
            placeholder={"Search for any training you want "}
          />
        </Nav.Column>

        <Nav.Column>
          
          <Bell />
          <Avatar>MN</Avatar>
        </Nav.Column>
      </Nav>
    </Container>
    <Outlet/>
    </>
  );
};

export default Navbar;
