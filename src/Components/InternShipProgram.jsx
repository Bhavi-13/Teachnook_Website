import React from 'react'
import "../Style/internshipProgram.css"
import internship from '../assets/internship-explore.webp'

const InternShipProgram = () => {
  return (
    <div id='mainInternshipBlock'>
      <div className="subInternship">
        <section className='skills'>
          <h1>Explore<span>.</span> Upskill <span>.</span> Build</h1>
        </section>
        <section className='skills_sub1'>
          <div className="skills_sub1_main">
            <div className="skills_sub1_main_child">
              <h1>Skill Courses</h1>
            </div>             
          </div>
          <div className="skills_sub1_main">
            <div className="skills_sub1_main_child">
              <h1>Internship Programs</h1>
            </div>             
          </div>
          <div className="skills_sub1_main">
            <div className="skills_sub1_main_child">
            <h1>Job Programs</h1>
            </div>             
          </div>

        </section>
        <section className='mainInternshipBlock sub1'>
          <div className="textData">
            <h1>Learn Your Way To Success With <br />
                <span>150+</span>  Skill Courses</h1>
                <div className='textData subText'>
                  <h1><span><img src="src/image/right.svg" alt="" /></span> New Courses Every</h1>
                  <h1><span><img src="src/image/right.svg" alt="" /></span> Month On-Demand Industry Skills</h1>
                  <h1><span><img src="src/image/right.svg" alt="" /></span> Completion Certificate</h1>     
                  <button>Explore Courses</button>             
                </div>
          </div>
          
          <div className="textData"></div>
          <div className="textData"></div>

        </section>  
        <section className='mainInternshipBlock sub2'>
          <img src={internship} alt="" />
        </section>  
      </div>
      


    </div>
  )
}

export default InternShipProgram