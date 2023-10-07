import '../Style/Footer.css'
import logo from '../assets/logoSkill.jpg'

function Footer() {
  return (
    <div className='footer'>
      <div className="columns">
      
        <div className="logoInfo">
          <div className="footerInfo">
                  <img src={logo} alt="" />
                  <p>Stay connected with us! Follow and subscribe to our social media platforms for regular updates on learning new skills. Happy Learning!</p>
                  <div className="social">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-whatsapp"></i>
                  </div>
          </div>
        </div>
        <div className="links">
          <div className="footerCol">
            <span>Quick Links</span>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="footerCol">
            <span>Community</span>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Career</a>
          </div>

          <div className="footerCol">
            <span>More</span>
            <a href="#">FAQ</a>
            <a href="#">Campus Ambassador</a>
            <a href="#">Growth Community</a>
          </div>

          <div className="footerCol">
            <span>Contacts</span>
            <p><i className="bi bi-telephone-fill"></i> +91-08069277254</p>
            <p><i className="bi bi-envelope-fill"></i> support@skillcortex.com</p>
            <div class="input-container">
              <input type="email" placeholder="Enter Mail" />
              <i class="bi bi-send-fill"></i>
            </div>      
          </div>
        </div>
      </div>
      <div className="footerEnd">
        <p>COPYRIGHT©SKILLCORTEX EDTECH. All rights reserved</p>
       

      </div>
</div>
    
    
 

  )
}

export default Footer
