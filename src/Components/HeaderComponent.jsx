import React from 'react';
import Portrait from '../portrait-oval.png';
function HeaderComponent() {
    return (
        <div className='App-header'>
            <div className="container mt-2 p-4">
                <div className="row">
                    <div className="col-sm-2" >
                        <img src={Portrait} alt="portrait" style={{maxHeight: "140px"}} ></img>
                    </div>
                    <div className="col-sm-8">
                        <h2 className="mt-4" style={{ fontFamily:"'Anton', sans-serif" }}>Juan Trejo</h2>
                        <h4 style={{ color: "darkorange" }}>Java Full Stack Developer</h4>
                    </div>
                    <div className="col-sm-2">
                        <img src="./academy_logo_crest.png" alt="pyramid academy" width="150px" height="150px"></img>
                    </div>
                </div>
            </div>
        </div>);
}
export default HeaderComponent;