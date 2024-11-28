import React from 'react'
import { Link } from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';
 const baseUrl='http://127.0.0.1:8000/api';

function Featuredteachers() {
    const [teachers,setTeacher]=useState(null);
    useEffect(()=>{
      axios.get(baseUrl+'/teachers/').then((response)=>{
       // console.log(response.data);
       setTeacher(response.data);
      });
      
    },[]);
    console.log(teachers);  
  return (
    <div className="container mt-4">
    <h3>Featured Teachers</h3>
    <div className="row mb-4">
        {/* First Card */}
        <div className="col-md-3">
            <div className="card">
                <Link to="/course/maneesha"><img  src="pic1.png " className="card-img-top" alt="maneesha" /></Link>
                <div className="card-body">
                  <h6 className="card-title"><Link to= "/course/">MANEESHA</Link></h6>
                </div>
        </div>
        </div>

        {/* Second Card */}
        <div className="col-md-3">
            <div className="card">
            <Link to="/course/saraswathi"><img src="pic2.png" className="card-img-top" alt="saraswathi" /></Link>
                <div className="card-body">
            <h6 className="card-title"><Link to="/course/python">SARASWTHI</Link></h6>
                </div>
            </div>
        </div>
        {/* third card */}
        <div className="col-md-3">
            <div className="card">
            <Link to="/course/pallavi"><img src='pic3.png' className="card-img-top" alt="pallavi iyer" /></Link>
                <div className="card-body">
                <h6 className="card-title"><Link to="/course/pallavi-iyer">PALLAVI IYER</Link></h6>

                </div>
            </div>
        </div>
       {/* fourth card */}
        <div className="col-md-3">
            <div className="card">
            <Link to="/course/vedhanshi"><img src="pic4.png" className="card-img-top" alt="vedhashi" /></Link>
                <div className="card-body">
                   <h6 className="card-title"><Link to="/course/vedhashi">VEDHANSHI VERMA</Link></h6>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/course/dhakshitha"><img src="pic5.png" className="card-img-top" alt="dhakshitha" /></Link>
                        <div className="card-body">
                        <h6 className="card-title"><Link to="/course/dhakshitha">DHAKSHITHA</Link></h6>
                        </div>
                </div>
                </div>
                
                {/* Second Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/vrindha"><img src="pic6.png" className="card-img-top" alt="vrindha" /></Link>
                        <div className="card-body">
                    <h6 className="card-title"><Link to="/course/vrindha">VRINDHA</Link></h6>
                        </div>
                    </div>
                </div>
                {/* third card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/srinivas"><img src='pic10.png' className="card-img-top" alt="srinivas shetty" /></Link>
                        <div className="card-body">
                        <h6 className="card-title"><Link to="/course/srinivas">SRINIVAS SHETTY</Link></h6>

                        </div>
                    </div>
                </div>
               {/* fourth card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/dhamini"><img src="pic7.png" className="card-img-top" alt="dhamini" /></Link>
                        <div className="card-body">
                           <h6 className="card-title"><Link to="/course/dhamini">DHAMINI</Link></h6>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    
  );
}

export default Featuredteachers;