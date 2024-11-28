import React from 'react'
import { Link } from 'react-router-dom'
function Latestcourses() {
  return (

        <div className="container mt-4">
            <h3>Latest Courses </h3>
            <div className="row mb-4">
                {/* First Card */}
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/course/web-design"><img  src="web.png " className="card-img-top" alt="web-design" /></Link>
                        <div className="card-body">
                          <h6 className="card-title"><Link to= "/course/web-design">WEB DESIGN</Link></h6>
                        </div>
                </div>
                </div>

                {/* Second Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/ethical-hacking"><img src="ethical.png" className="card-img-top" alt="ethical-hacking" /></Link>
                        <div className="card-body">
                    <h6 className="card-title"><Link to="/course/python">ETHICAL HACKING</Link></h6>
                        </div>
                    </div>
                </div>
                {/* third card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/animation"><img src='anime.png' className="card-img-top" alt="animation" /></Link>
                        <div className="card-body">
                        <h6 className="card-title"><Link to="/course/python">ANIMATION</Link></h6>

                        </div>
                    </div>
                </div>
                
               {/* fourth card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/cloud-computing"><img src="cloud.png" className="card-img-top" alt="cloud-computing" /></Link>
                        <div className="card-body">
                           <h6 className="card-title"><Link to="/course/java">CLOUD COMPUTING</Link></h6>
                        </div>
                        </div>
                        </div>
                        </div>
            <div className="row mb-4">
                {/* First Card */}
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/course/ms-office"><img src="ms.png" className="card-img-top" alt="ms-office" /></Link>
                        <div className="card-body">
                        <h6 className="card-title"><Link to="/course/python">MS OFFICE</Link></h6>
                        </div>
                </div>
                </div>

                {/* Second Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/aws"><img src="aws.png" className="card-img-top" alt="aws" /></Link>
                        <div className="card-body">
                    <h6 className="card-title"><Link to="/course/python">AWS"</Link></h6>
                        </div>
                    </div>
                </div>
                {/* third card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/ui-ux"><img src='uix.png' className="card-img-top" alt="ui-ux" /></Link>
                        <div className="card-body">
                        <h6 className="card-title"><Link to="/course/ui-ux">UI/UX</Link></h6>

                        </div>
                    </div>
                </div>
                
               {/* fourth card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/data-analytics"><img src="analytic.png" className="card-img-top" alt="data-analytics" /></Link>
                        <div className="card-body">
                           <h6 className="card-title"><Link to="/course/java">DATA ANALYTICS</Link></h6>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    
  );
}

export default Latestcourses;