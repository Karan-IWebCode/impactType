import React from "react";
import personGroup1  from '../../Assets/personGroup1.png'
import personGroup2 from '../../Assets/personGroup2.png'
import './HeaderContainer.css'

const HeaderContainer = () => {
	return(
		<div className="sectionTop">
			<div className="container">
			
				<div className="row">
				<img src={personGroup1} className='img-fluid'/>
						<div className="contentContainer">
							<h1>Let's growth your business with us</h1>
							<div className="contentPara">	
								<p>    
									Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.
								</p>
							</div>
							<p>
								<a href="contactpage" className="contactPageBtn">Get In Touch</a>    
							</p>
						</div>
				<img src={personGroup2} className='img-fluid'/>

				</div>

				</div>

			</div>
	
    );
}

export default HeaderContainer;
