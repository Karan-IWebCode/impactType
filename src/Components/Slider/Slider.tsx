import React , {useState, useEffect} from 'react'
import { transform } from 'typescript';
import './Slider.css'
import people from './Utlity';
import data from './Utlity'

const Slider = () => {
	const [people] = useState(data);
	const [index, setIndex] = useState(0);
	const [next, setNext] = useState("")

	useEffect(()=>{
		const lastIndex = people.length - 1;
		if(index < 0){
			setIndex(lastIndex);
		}
		if(index > 0){
			setIndex(0);
		}
	},[index, people]);
	return (
		<>
			<div className="section">
				<div className="sectionSlider">
					<div className="sectionWrap">
						{people.map((item,indexPeople) => {
							const {id, iconName, name, profile, description} = item;
							let position = "nextSlide";
							if(indexPeople === index){
								position = "activeSlide"
							}
							if(indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1))
								position = "lastSlide"
							return (
								<div className='carousel-item'>
									<article className={position} key={id}>
										<img className="sliderImage" src={iconName} />
										<h3 className="">{name}</h3>
										<span className="">{profile}</span>

										<blockquote>	
											<p>{description}</p>
										</blockquote>
									</article>
								</div>
							);
						})}

					</div>
					<button className='prev' onClick={() => setIndex(index - 1)}>
							left
						</button>
						<button className='next' onClick={() => {setNext(next)
						
						}}>
							right
						</button>
				</div>
			</div>
		</>
	);
}
export default Slider;