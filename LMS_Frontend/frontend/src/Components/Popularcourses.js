import React from 'react'
import { Link } from 'react-router-dom'
function Popularcourses() {
  return (

        <div className="container mt-4">
            <h3>Popular Courses </h3>
            <div className="row mb-4">
                {/* First Card */}
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/course/database-administrator"><img  src="dba.png " className="card-img-top" alt="database-administrator" /></Link>
                        <div className="card-body">
                          <h6 className="card-title"><Link to= "/course/database-administrator">DATABASE ADMINISTRATOR</Link></h6>
                        </div>
                </div>
                </div>

                {/* Second Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/sqt"><img src="sqt.png" className="card-img-top" alt="sqt" /></Link>
                        <div className="card-body">
                    <h6 className="card-title"><Link to="/course/sqt">SOFTWARE QUALITY TESTING</Link></h6>
                        </div>
                    </div>
                </div>
                {/* third card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/analytics"><img src='aa.png' className="card-img-top" alt="analytics" /></Link>
                        <div className="card-body">
                        <h6 className="card-title"><Link to="/course/analytics">AUGMENTED ANALYTICS</Link></h6>

                        </div>
                    </div>
                </div>
                
               {/* fourth card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/block-chain"><img src="bc.png" className="card-img-top" alt="block-chain" /></Link>
                        <div className="card-body">
                           <h6 className="card-title"><Link to="/course/block-chain">BLOCK CHAIN</Link></h6>
                        </div>
                        </div>
                        </div>
                        </div>
            <div className="row mb-4">
                {/* First Card */}
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/course/project-management"><img src="pm.png" className="card-img-top" alt="project-management" /></Link>
                        <div className="card-body">
                        <h6 className="card-title"><Link to="/course/project management">PROJECT MANAGEMENT</Link></h6>
                        </div>
                </div>
                </div>

                {/* Second Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/business-intelligence"><img src="bi.png" className="card-img-top" alt="business-intelligence" /></Link>
                        <div className="card-body">
                    <h6 className="card-title"><Link to="/course/business intelligence">BUSINESS INTELLIGENCE"</Link></h6>
                        </div>
                    </div>
                </div>
                {/* third card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/mad"><img src='mad.png' className="card-img-top" alt="mad" /></Link>
                        <div className="card-body">
                        <h6 className="card-title"><Link to="/course/mad">MOBILE APP DEVELOPMENT</Link></h6>

                        </div>
                    </div>
                </div>
                
               {/* fourth card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/itil"><img src="itil.png" className="card-img-top" alt="itil" /></Link>
                        <div className="card-body">
                           <h6 className="card-title"><Link to="/course/itil">ITIL</Link></h6>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    
  );
}

export default Popularcourses;