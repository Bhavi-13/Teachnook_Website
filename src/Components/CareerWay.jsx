import '../Style/CareerWay.css'
import aboutImage from '../assets/ABOUT.jpg'

function CareerWay() {
  return (
    <div className='career'>
        <div className="wayImage">
            <img src={aboutImage} alt="no image" />
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
