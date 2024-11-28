import React from 'react';
import { Carousel } from 'react-bootstrap'; // Ensure you have this import
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="container mt-4">
            <h3 className="pd-1 mb-3">Latest Courses
            <Link to="/latestcourses" className='btn btn-link float-end'>See All</Link>
            </h3>
            <div className="row mb-4">
                {/* First Card */}
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/course/data-science"><img src="data-science-course.jpg" className="card-img-top" alt="data science" /></Link>
                        <div className="card-body">
                          <h6 className="card-title"><Link to= "/course/data-science">DATA SCIENCE</Link></h6>
                        </div>
                </div>
                </div>

                {/* Second Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/python"><img src="py2.png" className="card-img-top" alt="python" /></Link>
                        <div className="card-body">
                    <h6 className="card-title"><Link to="/course/python">PYTHON</Link></h6>
                        </div>
                    </div>
                </div>
                {/* third card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/devops"><img src='den.png' className="card-img-top" alt="devops" /></Link>
                        <div className="card-body">
                        <h6 className="card-title"><Link to="/course/python">DEVOPS</Link></h6>

                        </div>
                    </div>
                </div>
                
               {/* fourth card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/java"><img src="java.png" className="card-img-top" alt="java" /></Link>
                        <div className="card-body">
                           <h6 className="card-title"><Link to="/course/java">JAVA</Link></h6>
                        </div>
                        </div>
                        </div>
                        </div>
                                   
                        { /*popular courses*/}
               <div className="container mt-4">
            <h3 className="pd-1 mb-3">Popular Courses
            <Link to="/Popularcourses" className='btn btn-link float-end'>See All</Link>
            </h3>
            <div className="row mb-4">
                {/* First Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/artificial-intelligence"> <img src="ai.png" className="card-img-top" alt="artificial intelligence" /></Link>
                        <div className="card-body">
                           <h6 className="card-title" ><Link to="/course/artificial-intelligence">ARTIFICIAL INTELLIGENCE</Link></h6>
                        </div>
                    </div>
                </div>
                {/* Second Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/cyber-security"><img src="cy.png" className="card-img-top" alt="cyber security" /></Link>
                        <div className="card-body">
                          <h6 className="card-title"><Link to="/course/cyber-security">CYBER SECURITY</Link></h6>
                        </div>
                    </div>
                </div>
                {/* third card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/digital-marketing"><img src="digi.png" className="card-img-top" alt="Digital Marketing" /></Link>
                        <div className="card-body">
                          <h6 className="card-title"><Link to="/course/digital-marketing">DIGITAL MARKETING</Link></h6>
                        </div>
                    </div>
                </div>
                {/* fourth card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/testing"><img src="test.png" className="card-img-top" alt="Testing" /></Link>
                        <div className="card-body">
                            <h6 className="card-title"><Link to="/course/testing">TESTING</Link></h6>
                        </div>
                    </div>
                </div>
                </div>  
            </div>
    
          {/* featured teachers*/}

           <div className="container mt-4">
            <h3 className="pd-1 mb-3">Featured Teachers
                <Link to="/Featuredteachers" className='btn btn-link float-end'>See All</Link>
            </h3>
            <div className="row mb-4">
                {/* First Card */}
                <div className="col-md-3">
                <Link to="instructor/Mohana-Priya">   
                    <div className="card">
                    <img src="mam.png" className="card-img-top" alt="Mohana Priya" />
                        <div className="card-body">
                       <h6 className="card-title"><Link to="instructor/mohana">MOHANA PRIYA</Link></h6>                 
                        </div>
                    </div>
                    </Link>
                </div>
                {/* Second Card */}
                <div className="col-md-3">
                <Link to="instructor/Saral-Kumar"> 
                    <div className="card">
                        <img src="sir.png" className="card-img-top" alt="saral kumar" />
                        <div className="card-body">
                            <h6 className="card-title"><Link to="instructor/Saral Kumar">SARAL KUMAR</Link></h6>
                        </div>
                    </div>
                    </Link>
                </div>
                {/* third card */}
                <div className="col-md-3">
                <Link to="instructor/Vikranth">
                    <div className="card">
                        <img src="sir1.png" className="card-img-top" alt="VIKRANTH" />
                        <div className="card-body">
                            <h6 className="card-title"><Link to="instructor/Vikranth">VIKRANTH</Link></h6>
                        </div>
                    </div>
                    </Link>
                </div>
                {/* fourth card */}
                <div className="col-md-3">
                <Link to="instructor/madhusmitha">
                    <div className="card">
                        <img src="mam1.png" className="card-img-top" alt="madusmitha" />
                        <div className="card-body">
                            <h6 className="card-title"><Link to="instructor/madhusmitha">MADHUSMITHA</Link></h6>
                        </div>
                    </div>
                    </Link>
                </div>
                </div>
             </div>
            
        
          
    {/* Testimonial*/}
       
      
          
                  
          
       


  
    <div>
    <h3 className="pd-1 mb-3">Students Love</h3>
      <Carousel data-bs-theme="white">
        <Carousel.Item >
        <img
            className="d-block w-100 "
            src="SL1.png "
            alt="First slide" 
            style={{
                height: '200px' }}// Set the desired height
                 // Ensure the image covers the area without distortion  
          />
          <Carousel.Caption>
            <h5>MEGHANA</h5>
            <p>"I'm thrilled to be a part of Kapil IT Skills Hub, 
                    where I'm enrolled in the Python Full Stack course. 
                    The institute has instilled tremendous confidence in me to secure a job.
                     Grateful to Kapil IT Skills Hub."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="SL1.png"
            alt="Second slide"
            style={{
                height: '200px' }}
          />
          <Carousel.Caption>
            <h5>TEJASWI</h5>
            <p>"I'm thrilled to be a part of Kapil IT Skills Hub, 
                    where I'm enrolled in the Python Full Stack course. 
                    The institute has instilled tremendous confidence in me to secure a job.
                     Grateful to Kapil IT Skills Hub."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="SL1.png"
            alt="Third slide"
            style={{
                height: '200px' }}
          />
          <Carousel.Caption>
            <h5>RUHINAAZ</h5>
            <p>
            "I'm thrilled to be a part of Kapil IT Skills Hub, 
                    where I'm enrolled in the Python Full Stack course. 
                    The institute has instilled tremendous confidence in me to secure a job.
                     Grateful to Kapil IT Skills Hub."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
            
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="sl1.png"
          alt="Fourth slide"
          style={{
            height: '200px' }}
        />
        <Carousel.Caption>
          <h5>POOJITHA</h5>
          <p>
          "I'm thrilled to be a part of Kapil IT Skills Hub, 
                    where I'm enrolled in the Python Full Stack course. 
                    The institute has instilled tremendous confidence in me to secure a job.
                     Grateful to Kapil IT Skills Hub."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
   </div>
       
     
   );
    }
export default Home;

    