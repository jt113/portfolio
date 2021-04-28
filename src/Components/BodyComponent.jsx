import React from 'react';
import UTD from '../utd-logo.png';

function BodyComponent() {
    return (
        <div className="">
            <div className="container p-4">
                <div className="row">
                    <h2>About Me</h2>
                </div>
                <hr />
                <div className="row">
                    <p>I originate from the state of Texas.
                    I graduated with a degree in computer science from The University of Texas at Dallas.
                    Since I graduated I joined pyramid academy because I saw that they were offering training in java full stack development which I think is a good skill to have and it’s actually in demand by the industry. 
                    Most of my experience has been through school such as assignments and school projects.
                    One project that I did during school was a web development project where we created a website to meet the needs of our school’s advising office. They needed a way to handle a queue of students as they arrived for appointments, check them in when they are ready and create reports for administrators. This project introduced me to full stack development and got me interested in web development as a whole.
</p>
                </div>
            </div>
            <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <div className="card w3-card-2">
                            <div className="card-header bg-orange">
                                <h3>Education</h3>
                            </div>
                            <div className="card-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src={UTD} alt="utd-logo" width="144" height="101"></img>
                                        </div>
                                        <div className="col-md">
                                            <h4 className="card-title">B.S. Computer Science</h4>
                                            <p className="card-text">The Unviersity of Texas at Dallas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <div className="card w3-card-2">
                            <div className="card-header bg-green">
                                <h3>Projects</h3>
                            </div>
                            <div className="card-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md">
                                            <h4 className="mb-3">UTD Advising Office Student Queue System</h4>
                                            <p>- Led development of the frontend to meet the specifications for the project.</p>
                                            <p>- Desiged a wireframe for the main pages.</p>
                                            <p>- Used ReactJS to build the UI components.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BodyComponent;