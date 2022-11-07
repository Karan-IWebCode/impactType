import './Growing.css'
import grows from '../../Assets/Growing/grow.jpg'
import Button from '../CommonButton/Button';

import arr1 from './utlity'

const Growing = ({ }) => {
  return(
    <div className="sectionGrow"  >
      <div className="containerGrow">

        <div className="growingContent">
          <div className="growingContentCol1">
            <h2 className="colWhyHeading">Why Growing Your Business is Important</h2>
            <p>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae vitae nam facere hic quis voluptate cum quae. Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel rem eveniet facere et velit sunt aspernatur eaque quis, dolorem magnam quisquam? Facere?</p>
            <Button />
          </div>
          <div className="growingContentCol2">
            <img src={grows} alt="noimg" className='grows'/>
          </div>
        </div>
          
      </div>
      <div className="containerGrow">
        <div className="growingContent2">
        {
          arr1.map((iter)=>{
            return(
              <div className="grow2col2">
            <div className="growPackage">
              <div className="growIcon">
                <img src={iter.iconName} alt="no" className='growthIcon'/>
              </div>
              <div>
                <h3>{iter.title}</h3>
                <p>{iter.descripition}</p>
              </div>
            </div>
          </div>
            )
          })

        }

        </div>
      </div>
        
    </div>
  );
}

export default Growing;