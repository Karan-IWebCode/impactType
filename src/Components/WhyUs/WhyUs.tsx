import './WhyUs.css'
import aboutus from '../../Assets/WhyUs/about-us-min.png'
import icon1 from '../../Assets/WhyUs/24-hours-support.svg'
import icon2 from '../../Assets/WhyUs/good-review.svg'


const WhyUS = () => {
  return (
    <div className="containerWhy">
      <div className="sectionWhy">
        <div className="rowWhy">
          <div className="colWhy1">
            <h2 className="colWhyHeading">Why You Should Choose Us</h2>
            <div className="featureWhy">

              <div className='featureBind'>
                <div className="featureIcon">
                  <img src={icon1} className="hourWhy"/>
                </div>
                <div className="featureData">
                  <h3>Professional</h3>
                  <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                </div>
              </div>

              <div className='featureGap'> </div>

              <div className='featureBind'>
                <div className="featureIcon">
                  <img src={icon2} className="hourWhy"/>
                </div>
                <div className="featureData">
                  <h3>Good Review</h3>
                  <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                </div>
              </div>
                
                
              

            </div>
          </div>

          <div className="colWhy2">
            <img src={aboutus} className="aboutusWhy" />
          </div>
        </div>


      </div>
    </div>
  );
}

export default WhyUS;