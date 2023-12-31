import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from "../static/logo.png"
import "../App.css";

import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarSubMenu,
  CDBSidebarFooter,
} from 'cdbreact';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/" className="app-logo">
            <img
              alt=""
              src={logo}
              width="40"
              height="50"
              className="d-inline-block align-center"
            />{' '}
            Student Management Portal
          </Navbar.Brand>
        </Navbar>
            <div className='sidebar'>
            <CDBSidebar textColor="black" backgroundColor="#f0f0f0">
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Navigation</CDBSidebarHeader>
            <CDBSidebarContent>
            <CDBSidebarMenu>
                <NavLink exact to="/" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/students" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="list">Student List</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/manage" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user" iconType="solid">Manage Student</CDBSidebarMenuItem>
                </NavLink>
            </CDBSidebarMenu>
            </CDBSidebarContent>
            </CDBSidebar>
            </div>
        </div>
    );
}

export default Navigation;