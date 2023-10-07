import React, {useState} from 'react'
import '../Style/Testimonials.css'

const testimonialsData = [
    {
      id: 1,
      name: 'John Doe',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      feedback: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce vel purus bibendum, egestas arcu at, tincidunt arcu.',
    },
    {
      id: 4,
      name: 'Bob Brown',
      feedback: 'Sed in justo euismod, fringilla ipsum id, fermentum felis.',
    },
    {
      id: 5,
      name: 'Eve Wilson',
      feedback: 'Proin convallis, nisi et congue tempor, felis urna convallis est, vel congue erat lectus vel risus.',
    },
  ];
   
function Testimonials() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const showNextTestimonial = () => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const showPreviousTestimonial = () => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
      );
    };
  return (
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <div className="testimonial">
              <p className="feedback">{testimonialsData[currentTestimonialIndex].feedback}</p>
              <p className="name">{testimonialsData[currentTestimonialIndex].name}</p>
            </div>
          </div>
          <div className="slider-controls">
            <button onClick={showPreviousTestimonial} className="slider-arrow left">
              &lt;
            </button>
            <button onClick={showNextTestimonial} className="slider-arrow right">
              &gt;
            </button>
          </div>
        </div>
  )
}

export default Testimonials
