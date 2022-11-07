
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
						<li>
							<a href="#" className="navItems">Home</a>
						</li>
						<li>
							<a href="#" className="navItems active">Dropdown</a>
						</li>
						
							<div className="dropdownContent">
								<ul>
									<li><a href="#">Menu One</a></li>
									<li><a href="#">Menu Two</a></li>
									<li><a href="#">Menu Three</a></li>


								</ul>
								
								
							</div>
						
						
						<li>
							<a href="#" className="navItems">Services</a>
						</li>
						<li>
							<a href="#" className="navItems">Blog</a>
						</li>
						<li>
							<a href="#" className="navItems">About</a>
						</li>
						<li>
							<a href="#" className="navItems">Contact Us</a>
						</li>
						
						
					</ul>
				</div>
			</div>
		</div>
    );
}

export default Header;