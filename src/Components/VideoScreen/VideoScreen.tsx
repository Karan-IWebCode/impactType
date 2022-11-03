import './VideoScreen.css'
import img from'../../Assets/VideoScreen/hero-min.jpg'

const VideoScreen = () => {
	return(
		<>
			<div className="container">
				<div className="screenRow">
					<div className="screenVideo">
					<a href="https://www.youtube.com/watch?v=KI2lsdXJQ40" >
	
						<img src={img} className="videoImg"/>
					</a>
					</div>
					<div className="screenContent">
						<h2>Get Started with Impact</h2>
						<p>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae.</p>
						<ul>
							<li>Deserunt harum incidunt </li>
							<li>Ex nesciunt est temporibus ipsum</li>
							<li>Vel rem eveniet facere et velit sunt</li>
							<li>Aspernatur eaque quis</li>
							<li>Dolorem magnam quisquam? Facere</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default VideoScreen;