import React from "react";
import './Header.css'

const Header = () => {
	return (
		<div className="maincontainer">
			<div className="mainHeader">
				<div className="mainLogo">
					<a href="#">Impact</a>
				</div>
				<div className="nav">
					<ul className="navLinks">
						<a href="#" className="navItems">Home</a>
						<a href="#" className="navItems active">Dropdown
							<div className="dropdownContent">
								<ul>
									<li><a href="#">Menu One</a></li>
									<li><a href="#">Menu Two</a></li>
									<li><a href="#">Menu Three</a></li>


								</ul>
								
								
							</div>
						</a>
						
						<a href="#" className="navItems">Services</a>
						<a href="#" className="navItems">Blog</a>
						<a href="#" className="navItems">About</a>
						<a href="#" className="navItems">Contact Us</a>
						
						
					</ul>
				</div>
			</div>
		</div>
    );
}

export default Header;