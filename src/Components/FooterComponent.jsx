import React from 'react';

function FooterComponent() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <div className="ml-auto mr-auto">
                            <p>Links</p>
                            <ul>
                                <li><a href="https://github.com/jt113" style={{ color: "default" }}>GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default FooterComponent;