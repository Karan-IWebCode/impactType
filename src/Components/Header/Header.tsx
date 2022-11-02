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
						<a href="#" className="navItems">Dropdown
							<div className="dropdownContent">
								<button >Menu 1</button>
								<button >Menu 2</button>
								<button >Menu 3</button>
								
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