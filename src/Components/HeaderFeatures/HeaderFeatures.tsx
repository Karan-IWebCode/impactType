import React from "react";

import './HeaderFeatures.css'
import arr1 from './utlitity'

const HeaderFeatures = () => {

	return(
		<div className="mainContainer">
			<div className="containerFeatures">
				<div className="boxFeatures">
					<div className="rowFeatures">
						{
							arr1.map((item)=>{
								return(
									<div className="colFeatures">
										<div className="colPack">
											<div className="iconFeatures">icon</div>
											<div className="colFeaturesHead">
												<h3 >{item.title}</h3>
												<p>{item.descripition}</p>
											</div>
										</div>
									</div>
								)
							})
						}
						{/* <div className="colFeatures">
							<div className="colPack">
								<div className="iconFeatures">icon</div>
								<div className="colFeaturesHead">
									<h3 >Design</h3>
									<p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
								</div>
							</div>
						</div>

						<div className="colFeatures">
							<div className="colPack">
								<div className="iconFeatures">icon</div>
								<div className="colFeaturesHead">
									<h3 >Applications</h3>
									<p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
								</div>
							</div>
						</div>

						<div className="colFeatures">
							<div className="colPack">
								<div className="iconFeatures">icon</div>
								<div className="colFeaturesHead">
									<h3 >eCommerence</h3>
									<p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
								</div>
							</div>
						</div> */}

					</div>
				</div>

			</div>
		</div>
	
    );
}

export default HeaderFeatures;
