import React, { useState } from 'react';
import '../Style/Programs.css'

const InternshipProjectComponent = () => {

  return (
    <div className='internship'>
      <h1>INTERNSHIPS & PROJECTS</h1>
      <div className="course">
            <div className="applyCards">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6Kq8NJToK5aQZDvrLMFViFup0kXwzQvmQQ&usqp=CAU" alt="" />
                <button>Apply For Courses</button>
            </div>
            <div className="applyCards">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxp0xPaaHmfZs406q0vOaaJiuJpF845ntr3w&usqp=CAU" alt="" />
                <button>Apply For Internships</button>
            </div>
            <div className="applyCards">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSl84VvmHNBPZOQM6IQyT1XB-yDXrQpDADdg&usqp=CAU" alt="" />
                <button>Apply For Projects</button>
            </div>
      </div>
      
        
    </div>
  );
};

export default InternshipProjectComponent;
