import React from 'react';

import './About.css';



function About() {
  return (
    
    <div className="container mt-4">
         <h2 style={{textAlign:'center', fontFamily:'initial', }}>About Us</h2>
      <img src='bg.png' alt='bg-img' style={{width:'100%',height:'200px',objectFit:'cover'}}></img>
        
     
      <p>
        Welcome to our online learning platform! We are dedicated to providing high-quality courses in various fields to help you enhance your skills and advance your career.
      </p>
      <h4>Our Mission</h4>
      <p>
        Our mission is to empower learners through accessible education and training, enabling them to achieve their goals and succeed in their professional journeys.
      </p>
      <h4>Our Values& Principles</h4>
      <ul>
        <li>Excellence: We strive for the highest standards in our courses.</li>
        <li>Innovation: We continuously update our offerings to keep pace with industry trends.</li>
        <li>Community: We believe in fostering a supportive learning environment.</li>
      </ul>
      <h4>Contact Us</h4>
      <p>
        If you have any questions or suggestions, feel free to reach out to us at contact@onlinelearning.com.
      </p>
      <div>
      <div className="about-container d-flex align-items-center">
            <img style={{height:'180px',width:'250px'}}
                src="side1.png" 
                alt="sideimg"
                className="about-image"
            />
            <div className="about-content">
                <h2>Achievements&Awards</h2>
                <p>
                    We are dedicated to providing quality online learning experiences. 
                    Our platform offers a variety of courses to help you achieve your educational goals.
                    Join us on this journey of knowledge and growth!
                    Experience excellence with industry-leading training and support.
                    Our expert instructors, tailored curriculum, and hand-on approach ensure you gain the skills you need for success in the ever-evolving tech landscape.
                    Join a community dedicated to your growth and success!
                </p>
            </div>
        </div>
        {/* Second Image on Right, Content on Left */}
      <div className="about-container d-flex align-items-center mb-4">
        <div className="about-content">
          <h2>Our Approach</h2>
          <p>
            Our approach to learning is centered on interactive and practical training that empowers you to apply what you learn.
            We believe that education should be engaging and directly applicable to real-world scenarios.We’re passionate about delivering quality training that opens new career opportunities. With
practical courses across diverse fields, our goal is to equip every learner with skills that matter
in today’s job market. Through hands-on projects and expert guidance, we strive to help you
reach your potential.
          </p>
        </div>
        <img style={{height:'250px',width:'600px'}}
          src="side2.png" 
          alt="rimg"
          className="about-image" 
        />
      </div>
      </div>
    </div>
  );
}

export default About;