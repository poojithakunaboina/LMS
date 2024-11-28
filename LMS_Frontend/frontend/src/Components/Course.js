import React , {useState} from 'react';
import { useParams } from 'react-router-dom';
import './Course.css'; // Import CSS for styling
import { Link } from 'react-router-dom';


// Mock Course Data
const courseData = {
  "data-science": {
    title: "DATA SCIENCE",
    image: "/data-science-course.jpg",
    description:
      "A Python full-stack developer is skilled in both front-end and back-end development using Python. They build responsive and functional front ends and robust, scalable back-end systems using Python frameworks.",
    instructors: "Mr.Saral Kumar, Ms.Mohana Priya",
    duration: "4 months",
    studentsEnrolled: 120,
    videos:{
        Introduction:"",
        Class1:"",
        Class2:"",
        Class3:"",
    },
  },

  "python": {
    title: "PYTHON",
    image: "/py2.png",
    description:
      "This course covers AI algorithms, neural networks, and machine learning. You'll learn to design intelligent systems using modern AI techniques.",
    instructors: "Ms.Maneesha, Mr.vikranth",
    duration: "6 months",
    studentsEnrolled: 200,
    videos:{
        Introduction:"",
        Class1:"",
        Class2:"",
        Class3:"",
    },
  },
  "devops": {
    title: "DEVOPS",
    image: "/den.png",
    description:
      "Master data analysis, visualization, and machine learning techniques with Python and R to extract insights from data and solve real-world problems.",
    instructors: "Ms.Saraswati, Ms.Madhusmitha",
    duration: "5 months",
    studentsEnrolled: 150,
    videos:{
        Introduction:"",
        Class1:"",
        Class2:"",
        Class3:"",
    },
  },
  "java": {
    title: "JAVA",
    image: "/java.png",
    description:
      "Learn how to protect systems, networks, and data from cyber threats. This course covers both offensive and defensive security techniques.",
    instructors: "Ms.Pallavi Iyer, Mr. Vedhanshi Varma",
    duration: "3 months",
    studentsEnrolled: 180,
    videos:{
        Introduction:"",
        Class1:"",
        Class2:"",
        Class3:"",
    },
  },
  "artificial-intelligence":{
    title:"ARTIFICIAL-INTELLIGENCE",
    image:"/ai.png",
    description:
    "Cloud computing is the on-demand delivery of computing services such as servers, storage, databases, networking, software, and analytics. Cloud-based storage makes it possible to save files to a remote source. Cloud data storage platforms include Google Drive, Dropbox, OneDrive, and Box.",
    instructors:"Mr. Dhaskshitha, Ms. Vrindha",
    duration:"4 months",
    studentsEnrolled:170,
    videos:{
      Introduction:"",
      Class1:"",
      Class2:"",
      Class3:"",
    },
  },
  "cyber-security":{
    title:"CYBER-SECURITY",
    image:"/cy.png",
    description:"What is business intelligence? Business intelligence combines business analytics, data mining, data visualization, data tools and infrastructure, and best practices to help organizations make more data-driven decisions.",
    instructors: "Dr. Srinivas Shetty",
    duration: "4 months",
    studentsEnrolled: 140,
    videos:{
        Introduction:"",
        Class1:"",
        Class2:"",
        Class3:"",
      },
  },
  "digital-marketing": {
    title: "DIGITAL-MARKETING",
    image: "/digi.png",
    description:
      "DevOps is a methodology in the software development and IT industry. Used as a set of practices and tools, DevOps integrates and automates the work of software development and IT operations as a means for improving and shortening the systems development life cycle.",
    instructors: "Mr. Matta Vamshi Apuroop",
    duration: "3 months",
    studentsEnrolled: 130,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "testing": {
    title: "TESTING",
    image: "/test.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Ms. Dhamini Bhatia",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "web-design": {
    title: "WEB DESIGN",
    image: "/web.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: "Ms. Vittal Dev ",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "ethical-hacking": {
    title: "ETHICAL HACKING",
    image: "/ethical.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Ms. Maneesha",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "animation": {
    title: "ANIMATION",
    image: "/anime.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Mr. Vikranth",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "cloud-computing": {
    title: "CLOUD COMPUTING",
    image: "/cloud.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Ms. Saraswathi",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "ms-office": {
    title: "MS OFFICE",
    image: "/ms.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Ms. Madhusmitha",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "aws": {
    title: "AWS",
    image: "/aws.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Ms. Pallavi Iyer",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "ui-ux": {
    title: "UI/UX",
    image: "/uix.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Ms. Vedhanshi Varma",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
     "database-administrator": {
    title: "DATABASE ADMINISTRATOR",
    image: "/dba.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: "Ms. Dhakshitha",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "sqt": {
    title: "SOFTWARE QUALITY TESTING",
    image: "/sqt.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Ms. Vrindha",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "analytics": {
    title: "AUGMENTED ANALYTICS",
    image: "/aa.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Dr. Srinivas Shetty",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "block-chain": {
    title: "BLOCK CHAIN",
    image: "/bc.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Mr. Matta Vamshi Apuroop",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "project-management": {
    title: "PROJECT MANAGEMENT",
    image: "/pm.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Ms. Mohana Priya",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "business-intelligence": {
    title: "BUSINESS INTELLIGENCE",
    image: "/bi.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Mr. Saral Kumar",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "data-analytics": {
    title: "DATA ANALYTICS",
    image: "/analytic.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Mr. Sudheer",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "mad": {
    title: "MOBILE APP DEVELOPMENT",
    image: "/mad.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Ms. Dhamini Bhatia",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "itil": {
    title: "ITIL",
    image: "/itil.png",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: " Ms. Madhusmitha",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  

};

function CourseDetails() {
  const { courseId } = useParams();
  
  // Get course data based on courseId
  const course = courseData[courseId];

  const [playingVideo, setPlayingVideo] = useState(null); // This manages which video is playing

  // If course doesn't exist, display a "Course Not Found" message
  if (!course) {
    return <h2 className="mt-4 text-center">Course not found!</h2>;
  }

  

  const handlePlay = (videoName) => { // Define the handlePlay function
    setPlayingVideo(videoName);
  };

  return (
    <div className="container mt-4">
      <h2>Course Details for {course.title}</h2>
      
      <div className="d-flex align-items-start">
        <img src={course.image} alt={course.title} className="course-image" />
        <ul className="list-group ms-4">
          <li className="list-group-item">
            <h2>Title - {course.title}</h2>
          </li>
          <li className="list-group-item">
            <p>{course.description}</p>
          </li>
          <li className="list-group-item">
            <h3>Course by:</h3>
            <p>
              {course.instructors.split(', ').map((instructor) => {
                const instructorId = instructor.trim().replace(/\s+/g, '-').toLowerCase();
                console.log("Instructor Link ID:", instructorId); // Debug line
                return (
                  <Link key={instructor} to={`/instructor/${instructorId}`}>
                    {instructor}
                  </Link>
                );
              }).reduce((prev, curr) => [prev, ', ', curr])}
            </p>

            
          </li>
          <li className="list-group-item">
            <h3>Duration:</h3>
            <p>{course.duration}</p>
          </li>
          <li className="list-group-item">
            <h3>Enrolled Students: {course.studentsEnrolled}</h3>
          </li>
        </ul>
      </div>

        {/* new list group for introduction video*/}
        <div className="mt-4">
                <ul className="list-group">
                    <li className='list-group-item'>
                        <h2>Course Videos</h2>
                    </li>
                    <li className="list-group-item">
                        <h3>Introduction Video:</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            {playingVideo ==='Introduction' ? (
                                <iframe
                                    className="embed-responsive-item"
                                    src={course.videos.Introduction}
                                    title={course.title + " Introduction Video"}
                                    allowFullScreen
                                    width="100%"
                                    height="315"
                                ></iframe>
                            ) : (
                                <div className='button-container'>
                                <p>No video available for this course.</p>
                                <button className="btn btn-primary " onClick={() => handlePlay('Introduction')}>
                                <i className="fas fa-play"></i>
                                </button>
                                </div>
                            )}
                        </div>
                    </li>
                        
                    {/* Class 1 Video */}
                    <li className="list-group-item">
                        <h3>Class 1:</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            {course.videos.class1 ? (
                                <iframe
                                    className="embed-responsive-item"
                                    src={course.videos.class1}
                                    title={course.title + " Class 1 Video"}
                                    allowFullScreen
                                    width="100%"
                                    height="315"
                                ></iframe>
                            ) : (
                                <div className='button-container'>
                                <p>No Class 1 video available for this course.</p>
                                <button className="btn btn-primary " onClick={() => handlePlay('class1')}>
                                <i className="fas fa-play"></i> {/* Font Awesome Play Icon */}
                                </button>
                                </div>
                            )}
                        </div>
                    </li>

                    {/* Class 2 Video */}
                    <li className="list-group-item">
                        <h3>Class 2:</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            {course.videos.class2 ? (
                                <iframe
                                    className="embed-responsive-item"
                                    src={course.videos.class2}
                                    title={course.title + " Class 2 Video"}
                                    allowFullScreen
                                    width="100%"
                                    height="315"
                                ></iframe>
                            ) : (
                                <div className='button-container'>
                                <p>No Class 2 video available for this course.</p>
                                <button className="btn btn-primary " onClick={() => handlePlay('class2')}>
                                <i className="fas fa-play"></i>
                                </button>
                                </div>
                            )}
                        </div>
                    </li>

                    {/* Class 3 Video */}
                    <li className="list-group-item">
                        <h3>Class 3:</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            {course.videos.class3 ? (
                                <iframe
                                    className="embed-responsive-item"
                                    src={course.videos.class3}
                                    title={course.title + " Class 3 Video"}
                                    allowFullScreen
                                    width="100%"
                                    height="315"
                                ></iframe>
                            ) : (
                                <div className='button-container'>
                                <p>No Class 3 video available for this course.</p>
                                <button className="btn btn-primary " onClick={() => handlePlay('class3')}>
                                <i className="fas fa-play"></i>
                                </button>
                                </div>
                            )}
                        </div>
                    </li>

                </ul>
            </div>

    </div>
  );
}

export default CourseDetails;