import { useParams } from 'react-router-dom';
import './Instructor.css';
import React, { useState } from 'react';

const instructorData = {
  "mr.saral-kumar": {
    name: "Mr.Saral Kumar",
    image: "/pic13.png", // Make sure this path is correct
    bio: `An experienced full-stack developer with expertise in Python, Django. 
          Over the years, Mr. Kumar has worked on several industry-level applications, 
          focusing on creating scalable web solutions and robust backend systems. 
          He is passionate about teaching and believes in hands-on learning, integrating real-world projects 
          into the curriculum. With years of experience in both front-end and back-end development, 
          Mr. Kumar strives to ensure that his students are well-equipped to tackle the challenges of modern web development.
          He holds a degree in Computer Science and is constantly upgrading his skills to stay ahead in the ever-evolving tech landscape.
          His teaching methodology is focused on problem-solving, real-time project building, and industry-specific best practices. 
          Apart from coding, he enjoys mentoring young tech enthusiasts and organizing community coding workshops.`,
    rating: 4.5,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID", // Replace with actual video URL
      Class1: "https://www.youtube.com/embed/yourVideoID", // Replace with actual video URL
      Class2: "https://www.youtube.com/embed/yourVideoID", // Replace with actual video URL
      Class3: "https://www.youtube.com/embed/yourVideoID", // Replace with actual video URL
    }
  },
  "ms.mohana-priya": {
    name: "Ms. Mohana Priya",
    image: "/pic1.png", // Ensure correct image path
    bio: `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process.`,
    rating: 4.7,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID",
      Class1: "https://www.youtube.com/embed/yourVideoID",
      Class2: "https://www.youtube.com/embed/yourVideoID",
      Class3: "https://www.youtube.com/embed/yourVideoID",
    }
  },
"ms.maneesha": {
    name: "Ms. Maneesha",
    image: "/pic2.png", // Ensure correct image path
    bio: `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process.`,
    rating: 4.7,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID",
      Class1: "https://www.youtube.com/embed/yourVideoID",
      Class2: "https://www.youtube.com/embed/yourVideoID",
      Class3: "https://www.youtube.com/embed/yourVideoID",
    }
  },
  "mr.vikranth": {
    name: "Mr. Vikranth",
    image: "/pic12.pngg", // Ensure correct image path
    bio: `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process.`,
    rating: 4.7,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID",
      Class1: "https://www.youtube.com/embed/yourVideoID",
      Class2: "https://www.youtube.com/embed/yourVideoID",
      Class3: "https://www.youtube.com/embed/yourVideoID",
    }
  },
  "ms.saraswati": {
    name: "Ms. Sraswathi",
    image: "/pic3.png", // Ensure correct image path
    bio: `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process.`,
    rating: 4.7,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID",
      Class1: "https://www.youtube.com/embed/yourVideoID",
      Class2: "https://www.youtube.com/embed/yourVideoID",
      Class3: "https://www.youtube.com/embed/yourVideoID",
    }
  },
  "ms.madhusmitha": {
    name: "Ms. Madhusmitha",
    image: "/pic4.png", // Ensure correct image path
    bio: `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process.`,
    rating: 4.7,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID",
      Class1: "https://www.youtube.com/embed/yourVideoID",
      Class2: "https://www.youtube.com/embed/yourVideoID",
      Class3: "https://www.youtube.com/embed/yourVideoID",
    }
  },
  "ms.pallavi-iyer": {
    name: "Ms. Pallavi Iyer",
    image: "/pic5.png", // Ensure correct image path
    bio: `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process.`,
    rating: 4.7,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID",
      Class1: "https://www.youtube.com/embed/yourVideoID",
      Class2: "https://www.youtube.com/embed/yourVideoID",
      Class3: "https://www.youtube.com/embed/yourVideoID",
    }
  },
  "mr.-vedhashi-varma": {
    name: "Ms. Veshanshi Varma",
    image: "/pic6.png", // Ensure correct image path
    bio: `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process.`,
    rating: 4.7,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID",
      Class1: "https://www.youtube.com/embed/yourVideoID",
      Class2: "https://www.youtube.com/embed/yourVideoID",
      Class3: "https://www.youtube.com/embed/yourVideoID",
    }
  },
  "ms.-dhakshitha": {
    name: "Ms. Dhakshitha",
    image: "/pic7.png", // Ensure correct image path
    bio: `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process.`,
    rating: 4.7,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID",
      Class1: "https://www.youtube.com/embed/yourVideoID",
      Class2: "https://www.youtube.com/embed/yourVideoID",
      Class3: "https://www.youtube.com/embed/yourVideoID",
    }
  },
  
  "ms.-vrindha": {
    name: "Ms. Vrindha",
    image: "/pic8.pngg", // Ensure correct image path
    bio: `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process.`,
    rating: 4.7,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID",
      Class1: "https://www.youtube.com/embed/yourVideoID",
      Class2: "https://www.youtube.com/embed/yourVideoID",
      Class3: "https://www.youtube.com/embed/yourVideoID",
    }
  },
  
  "dr.-srinivas-shetty": {
    name: "Dr. Sriniva Shetty ",
    image: "/pic11.png", // Ensure correct image path
    bio: `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process.`,
    rating: 4.7,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID",
      Class1: "https://www.youtube.com/embed/yourVideoID",
      Class2: "https://www.youtube.com/embed/yourVideoID",
      Class3: "https://www.youtube.com/embed/yourVideoID",
    }
  },
  
  "mr.-matta-vamshi-apuroop": {
    name: "Ms.Matta Vamshi Apuroop ",
    image: "/pic10.png", // Ensure correct image path
    bio: `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process.`,
    rating: 4.7,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID",
      Class1: "https://www.youtube.com/embed/yourVideoID",
      Class2: "https://www.youtube.com/embed/yourVideoID",
      Class3: "https://www.youtube.com/embed/yourVideoID",
    }
  },
  
  "ms.-dhamini-bhatia": {
    name: "Ms. Dhamini Bhatia",
    image: "/pic9.png", // Ensure correct image path
    bio: `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process.`,
    rating: 4.7,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID",
      Class1: "https://www.youtube.com/embed/yourVideoID",
      Class2: "https://www.youtube.com/embed/yourVideoID",
      Class3: "https://www.youtube.com/embed/yourVideoID",
    }
  },
  "mr.-vedhashi-varma": {
    name: "Ms. Veshanshi Varma",
    image: "/pic10.png", // Ensure correct image path
    bio: `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process.`,
    rating: 4.7,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID",
      Class1: "https://www.youtube.com/embed/yourVideoID",
      Class2: "https://www.youtube.com/embed/yourVideoID",
      Class3: "https://www.youtube.com/embed/yourVideoID",
    }
  },
  "mr.-vedhashi-varma": {
    name: "Ms. Veshanshi Varma",
    image: "/MM.jpg", // Ensure correct image path
    bio: `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process.`,
    rating: 4.7,
    videos: {
      Introduction: "https://www.youtube.com/embed/yourVideoID",
      Class1: "https://www.youtube.com/embed/yourVideoID",
      Class2: "https://www.youtube.com/embed/yourVideoID",
      Class3: "https://www.youtube.com/embed/yourVideoID",
    }
  },
  

  // Include other instructors with similar updates as above
};

function InstructorDetails() {
  const { instructorId } = useParams();
  const instructor = instructorData[instructorId];
  const [playingVideo, setPlayingVideo] = useState(null);

  if (!instructor) {
    return <h2 className="mt-4 text-center">Instructor not found!</h2>;
  }

  const handlePlay = (videoKey) => {
    setPlayingVideo(videoKey);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-start">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="instructor-image me-4"
        />
        <ul className="list-group ms-4">
          <li className="list-group-item">
            <h2>{instructor.name}</h2>
          </li>
          <li className="list-group-item">
            <p>{instructor.bio}</p>
          </li>
          <li className="list-group-item">
            <h3>Rating:</h3>
            <p>{instructor.rating} / 5</p>
          </li>
        </ul>
      </div>

      {/* Video Section */}
      <div className="mt-4">
        <h2>Instructor Videos</h2>
        <ul className="list-group">
          {Object.keys(instructor.videos).map((videoKey) => (
            <li key={videoKey} className="list-group-item">
              <h3>{videoKey}:</h3>
              <div className="embed-responsive embed-responsive-16by9">
                {instructor.videos[videoKey] ? (
                  playingVideo === videoKey ? (
                    <iframe
                      className="embed-responsive-item"
                      src={instructor.videos[videoKey]}
                      title={`${instructor.name} ${videoKey} Video`}
                      allowFullScreen
                      width="100%"
                      height="315"
                    >  </iframe>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => handlePlay(videoKey)}
                    >
                      <i className="fas fa-play"></i> Play
                    </button>
                  )
                ) : (
                  <p>No video available for this lesson.</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InstructorDetails;
