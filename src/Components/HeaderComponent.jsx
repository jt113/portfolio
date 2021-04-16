import React from 'react';
import Portrait from '../portrait-oval.png';
function HeaderComponent() {
    return (
        <div className='App-header'>
            <div className="container mt-2 p-4">
            <div className="row">
                <div className="col-md-2">
                    <img src={Portrait} alt="portrait" width="150" height="150"></img>
                    
                </div>
                <div className="col-md-8">
                    <h2 className="mt-4">Juan Trejo</h2>
                    <h4 style={{color: "#FCB712"}}>Java Full Stack Developer</h4>
                    </div>
            </div>
            </div>
        </div>);
}
export default HeaderComponent;