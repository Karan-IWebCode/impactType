import './VideoScreen.css'
import img from'../../Assets/VideoScreen/hero-min.jpg'
import Button from '../HeaderContainer/Button'

const VideoScreen = () => {
	return(
		<div className='sectionVideo'>
			<div className="containerVideo">
				<div className="screenRow">
					<div className="screenVideo">
					<a href="https://www.youtube.com/watch?v=KI2lsdXJQ40" target={"_parent"}>
	
						<img src={img} className="videoImg"/>
					</a>
					</div>
					<div className="screenContent">
						<h2>Get Started with Impact</h2>
						<p>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae.</p>
						<ul>
							<li><span>Deserunt harum incidunt</span></li>
              <li><span>Ex nesciunt est temporibus ipsum</span></li>
              <li><span>Vel rem eveniet facere et velit sunt</span></li>
              <li><span>Aspernatur eaque quis</span></li>
              <li><span>Dolorem magnam quisquam? Facere</span></li>
						</ul>
						<Button />
					</div>
				</div>
			</div>
		</div>
	);
}

export default VideoScreen;