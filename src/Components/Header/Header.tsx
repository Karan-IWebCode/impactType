

import {useState} from 'react'
import './Header.css'

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown(current => !current)
  }
  const [isShown2, setIsShown2] = useState(false);
  const handleClick2 = () => {
    setIsShown2(current => !current)
  }
	return (
		<div className="maincontainer">
			<div className="mainHeader">
				<div className="mainLogo">
					<a href="#">Impact</a>
				</div>
        <button className="dis">
					<a href="#">dis</a>
          <div className="divDisplay">
        <ul>  
          <li>
							<a href="#" >Services</a>
						</li>
            <li style={{display:"flex",justifyContent:"space-Between"}}>
							<a href="#" >Dropdown</a>
              <button onClick={handleClick}>D</button>n
              
						</li>
            {isShown && (
                <>
                <li>
                <a href="#" >dropdown 1 </a>
              </li>
              <li >
                <a href="#" >dropdown 2</a>
                <button style={{float:"right"}}onClick={handleClick2}></button>
                <i className="fa-regular fa-arrow-down"></i>
                {isShown2 && (
                <>
                <li>
                <a href="#" >sub dropdown 1 </a>
              </li>
              <li>
                <a href="#" >sub dropdown 2</a>
              </li>
              <li>
                <a href="#" >sub dropdown 3</a>
              </li>
              
              </>
              )}
              </li>
              <li>
                <a href="#" >dropdown 3</a>
              </li>
              
              </>
              )}
						<li>
							<a href="#" >Blog</a>
						</li>
						<li>
							<a href="#" >About</a>
						</li>
						<li>
							<a href="#" >Contact Us</a>
						</li>
          </ul>  
        </div>
				
        </button>
        
				<div className="nav">
					<ul className="navLinks">
						<li>
							<a href="#" className="navItems">Home</a>
						</li>
						<li className='dropDown'>
							<a href="#" className="navItems activate">Dropdown</a>
						
						
							<div className="dropdownContent ">
								<ul>
									<li><a href="#">Menu One</a></li>
									<li className='dropDown2'><a href="#">Menu Two</a>
										<div className="dropdownContent2">
											<ul>
												<li><a href="#">Sub Menu One</a></li>
												<li><a href="#">Sub Menu Two</a></li>
												<li><a href="#">Sub Menu Three</a></li>
											</ul>
										</div>
                    </li>
									<li><a href="#">Menu Three</a></li>
								</ul>
							</div>
            </li>
						
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