import './Footer.css'

const Footer = () => {
  return(
    <>
      <div className="sectionFooter">
        <div className="containerFooter">
          <div className="row">
            <div className="col1 cols" >
            <div className="widget">
						  <h3>About Impact<span style={{color: "#f85a40"}}>.</span> </h3>
						  <p>Far far away,
               behind the word mountains,
                far from the countries Vokalia
                 and Consonantia, there live
                  the blind texts.</p>

					  </div>
            </div>
            <div className="col20 cols">
            <h3>Links</h3>
            <ul className="linkList">
							<li><a href="#">About us</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">News</a></li>
							<li><a href="#">Careers</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
            
            </div>
            <div className="col21 cols">
            <h3>Company</h3>
            <ul className="linkList">
							<li><a href="#">About us</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">News</a></li>
							<li><a href="#">Careers</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
            </div>

            <div className="col3 cols ">
            <h3>Contact</h3>
            <ul className="linkList">
							<li><a href="#">43 Raymouth Rd. Baltemoer, London 3910</a></li>
							<li><a href="#">+1(123)-456-7890</a></li>
							<li><a href="#">+1(123)-456-7890</a></li>
							<li><a href="#">info@mydomain.com</a></li>
						</ul>
            </div>
          </div>


          <div className="footerEn">
				    <div className="footerD">
					    <p>Copyright ©2022. All Rights Reserved. — Designed with love by 
                <a href="https://untree.co"> Untree.co</a>
					    </p>
				</div>
			</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
