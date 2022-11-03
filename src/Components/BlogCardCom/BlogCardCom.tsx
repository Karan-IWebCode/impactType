import React from 'react';
import './BlogCardCom.css'
import arr1 from './Utility'

const BlogCardCom = () => {
	return(
		<>
			<div className="BlogCard">
				<div className="col">
				{
					arr1.map((iter)=>{
						return(
							<>
							<div className="cardRow">
							<div className="cardHead">
								<a href="single.html">
									<img src={iter.iconName} className="imgSet" />
									</a>
							</div><div className="cardBody">
									<div className=''>
										<span>May 27, 2021</span>
										<span>•</span>
										<span>12 Comments</span>
									</div>
									<h2>
										<a href="single.html">
											{iter.title}
										</a>
									</h2>
									<p>{iter.descripition}</p>
									<p>
										<a href="#" className='readMore'>
											<span>Read more</span>
											<span className=''></span>
											{/* Left for icon */}
										</a>
									</p>
								</div>
							</div>	
							</>
						)
					})

				}

				</div>
      </div>
		</>
	);
}
export default BlogCardCom;