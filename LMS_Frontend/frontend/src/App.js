import React,{useState} from 'react';
import { BrowserRouter as Router,Route,Routes, } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Tlogin from './Components/Tlogin';
import Tlogout from './Components/Tlogout';
import Login from './Components/Login';
import About from './Components/About';
import Course from './Components/Course';
import TRegister from './Components/TRegister';
import SRegister from './Components/SRegister';
import Dashboard from './Components/Dashboard';
import Mycourses from './Components/Mycourses';
import Favouritecourses from './Components/Favouritecourses';
import Recommendedcourses from './Components/Recommendedcourses';
import ProfileSettings from './Components/Profilesettings';
import Changepassword from './Components/Changepassword';
import TDB from './Components/TDB';
import MC from './Components/MC';
import AC from './Components/AC';
import PS from './Components/PS';
import CP from './Components/CP';
import Myuser from './Components/Myuser';
import Instructordetails from './Components/Instructordetails';
import Latestcourses from './Components/Latestcourses';
import Popularcourses from './Components/Popularcourses';
import Featuredteachers from './Components/Featuredteachers';
function App(){
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return(
    
    <Router>
    <Header onLoginClick={handleShow} />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Tlogin" element={<Tlogin />} />
      <Route path="/Tlogout" element={<Tlogout />} />
      <Route path="/login" element={<Login show={showModal} onClose={handleClose} />} />
      <Route path="/about" element={<About/>} />
      <Route path="/course" element={<Course/>} />
      <Route path='/course/:courseId' Component={Course} />
      <Route path="/TRegister" element={<TRegister />} />
      <Route path="/SRegister" element={<SRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/mycourses" element={<Mycourses/>} />
      <Route path="/dashboard/favouritecourses" element={<Favouritecourses/>} />
      <Route path="/dashboard/recommendedcourses" element={<Recommendedcourses/>} />
      <Route path="/dashboard/profilesettings" element={<ProfileSettings/>} />     
      <Route path="/dashboard/changepassword" element={<Changepassword/>} />                     
      <Route path="/TDB" element={<TDB/>} />
      <Route path="/TDB/MC" element={<MC/>} />
      <Route path="/TDB/AC" element={<AC/>} />
      <Route path="/TDB/PS" element={<PS/>} />
      <Route path="/TDB/CP" element={<CP/>} />
      <Route path="/TDB/myuser" element={<Myuser/>} />
      <Route path="/instructor/:instructorId" element={<Instructordetails />} />
      <Route path="/latestcourses" element={<Latestcourses/>} />
      <Route path="/popularcourses" element={<Popularcourses/>} />
      <Route path="/featuredteachers" element={<Featuredteachers/>} />
    </Routes>
    <Footer/>
  </Router> 

  )
}
export default App;

