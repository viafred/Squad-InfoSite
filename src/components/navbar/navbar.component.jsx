import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

import './navbar.styles.scss'

const NavbarComponent = ()  => {


	return (
		<Navbar expand='lg' className="navbar-dark">
			<div className="img-container">
				<img className="navbar-logo" src={logo} alt='squad logo'/>
			</div>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto" pullright="true">
						<a href="#what"><span>What is squad?</span></a>
						<a href="#unique"><span>Members</span></a>
						<a href="#subscriber"><span>Feedback</span></a>
						<a href="#team"><span>Team</span></a>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
	)
};


// connect will actually passed through the root reducer
// Connect is called High Order Functions, that suits up components
//In this case, Header will have variables in their function component LIKE {currentUser}
export default NavbarComponent;