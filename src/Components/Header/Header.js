import React from "react";
import './Header.css'

const Header = () => {
	return (
		<div className="mainHeader">
			<div className="mainLogo">
				<a href="#">Impact</a>
			</div>
			<div className="nav">
				<ul className="navLinks">
					<a href="#" className="navItems">Home</a>
					<a href="#" className="navItems">Dropdown
						<div className="dropdownContent">
							<a href="#">Menu 1</a>
							<a href="#">Menu 2</a>
							<a href="#">Menu 3</a>
							
						</div>
					</a>
					
					<a href="#" className="navItems">Services</a>
					<a href="#" className="navItems">Blog</a>
					<a href="#" className="navItems">About</a>
					<a href="#" className="navItems">Contact Us</a>
					
					
				</ul>
			</div>
		</div>
    );
}

export default Header;