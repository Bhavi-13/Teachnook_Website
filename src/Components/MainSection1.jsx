import React from 'react'
import "../Style/mainSection.css"
const MainSection1 = () => {
    
  return (
   
    <div id='mainSection1'>
        <section id='mainSection_sub1'>
            <h1 className='Teachnook_quote forDesktop'>
                <span>Educate.</span><br />
                <span>Inspire.</span><br />
                <span>Succeed!</span><br />
            </h1>
            <h1 className='Teachnook_quote forMobile'>
                <span>Educate.</span><br />
                <span>Inspire.</span><br />
                <span>Succeed!</span><br />
            </h1>
            <button><a href="#">Explore Our Courses</a></button>
        </section>
        {/* <section id="mainSection_sub2">
            <div className="AllPersons">
                <div className="parrentEffect">
                    <div className='eachPerson'>
                        <a href="#"><img src="src/image/person1.png" alt="person1" /></a>
                        <h4><a href="#">Mentorship Program</a></h4>
                    </div>
                </div>
                <div className="parrentEffect">
                    <div className='eachPerson'>
                        <a href="#"><img src="src/image/person2.png" alt="person1" /></a>
                        <h4><a href="#">Hybrid Program</a></h4>

                    </div>
                </div>
                <div className="parrentEffect">
                    <div className='eachPerson'>
                        <a href="#"><img src="src/image/person3.png" alt="person1" /></a>
                        <h4><a href="#">Pro Program</a></h4>
                    </div>

                </div>

            </div>
        </section> */}
    </div>
  )
}

export default MainSection1