import React, { useContext } from 'react';
import { NavbarContext, DataContext } from '../App';
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom';

function Header() {
    const dataContext = useContext(DataContext);
    const navbarContext = useContext(NavbarContext);

    return (
        <div className="dashboard-header">
            <div className="header-left">
                <button
                    className="btn btn-link rounded-circle"
                    onClick={navbarContext.toggleNavbar}>
                        <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className="header-right">
                <Dropdown>
                    <Dropdown.Toggle>
                        <i className="fas fa-user-md"></i> User
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Calendar</Dropdown.Item>
                        <Dropdown.Item>Profile</Dropdown.Item>
                        <NavLink className="dropdown-item" to ="/settings">Settings</NavLink>
                        <Form.Check
                            type="switch"
                            id="shift-switch"
                            label="Night"
                            checked={!dataContext.dayShift}
                            onChange={dataContext.toggleShift}
                        />
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default Header;
