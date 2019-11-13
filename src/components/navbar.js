import React from 'react';
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav"

function Navbar() {
    return (
        <div className="dashboard-navbar">
            <h1 className="display-4 title-navbar">eHospital</h1>
            <Nav defaultActiveKey="/" className="flex-column navbar-list">
                <NavLink exact to="/" activeClassName="active">
                    <i className="fas fa-home"></i> Home
                </NavLink>
                <NavLink to="/resources" activeClassName="active">
                    <i className="fas fa-toolbox"></i> Resources
                </NavLink>
                <NavLink to="/settings" activeClassName="active">
                    <i className="fas fa-cog"></i> Settings
                </NavLink>
            </Nav>
        </div>
    );
}

export default Navbar;
