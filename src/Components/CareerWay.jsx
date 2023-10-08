import '../Style/CareerWay.css'
import aboutImage from '../assets/Image1.jpg'
import logo from '../assets/logoSkill.jpg'

function CareerWay() {
  return (
    <div className='career'>
        <div className="wayImage">  
            <div className="addressContent">
                
                <div className="leftSide">
                    <h2>Get In Touch</h2>  
                    <div className="contact">
                        <span><i className="bi bi-envelope-fill" style={{color: "brown"}}></i> skillcortexai@gmail.com</span>
                        <span><i className="bi bi-telephone-fill" style={{color: "orange"}}></i> 9502597560</span>
                        <span><i className="bi bi-geo-alt-fill" style={{color: "skyblue"}}></i> Sree Nagar Colony, Madanapalle</span>
                    </div>
                    <div className="registerNow">
                        <p><i>REGISTER NOW</i></p>
                        <h1>Get Discount Up To 50% off</h1>
                    </div>
                    <div className="registerImage">
                        <img src={aboutImage} alt="" />
                        
                    </div>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                </div> 
                <div className="rightSide">
                    <div className="bigImage">
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReM-WOjoXKTvrX-XA5bgt9VrqjfKe3jBIDKma3bDjwkHd7FPQ6" alt="" />  
                        
                    </div>    
                    <div className="admissions">
                        <h2>ADMISSIONS OPEN NOW</h2>
                        <p>Contact Us For Slot Booking</p>
                        <span><i className="bi bi-telephone-fill" style={{color: "brown"}}></i> 9502597560</span>
                    </div>
                </div>   
                <div className="smallLogo">
                    <img src={logo} alt="" />
                </div>
            </div>            
        </div>
        <div className="wayContent">
            <h2>Get started on your career, the Skill CorteX way!</h2>
            <div className="content">
                <div className="headContent">
                    <img src="https://teachnook.com/assets/MainPage/HomePage/timer.png" alt="no image" />
                    <h5>01.</h5>
                    <p>Regular Evaluation</p>
                </div>
                <div className="infoContent">
                    <p>We make sure to regularly evaluate and track your progress so that you can thoroughly understand the concepts that have been taught.</p>
                </div>
            </div>
            <div className="content">
                <div className="headContent">
                    <img src="https://teachnook.com/assets/MainPage/HomePage/rocket.png" alt="no image" />
                    <h5>02.</h5>
                    <p>Live Classes</p>
                </div>
                <div className="infoContent">
                    <p>Here you will get live classes where you can have one on one interaction with your mentor and can directly ask questions and clear your doubts. Thus giving you an easy access to learn from any corner of the world.</p>
                </div>
            </div>
            <div className="content">
                <div className="headContent">
                    <img src="https://teachnook.com/assets/MainPage/HomePage/stock.png" alt="no image" />
                    <h5>03.</h5>
                    <p>Completion Certificates</p>
                </div>
                <div className="infoContent">
                    <p>You will get the course completion certificate and also an internship completion certificate in certain courses.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CareerWay
