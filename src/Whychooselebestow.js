import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Whychooselebestow.css';
import whylebestow from './images/whylebestow.png';
import whyicon from './images/whyicon.png';

const Whychooselebestow = () => {
    return (
        <>
        <div className="why-choose-lebestow-section">
            <div className="container">
                <h2 className="why-choose-lebestow-heading">Why <span className="why-choose-lebestow-heading-two">Choose Le Bestow</span></h2>
                <div className="row">
                    <div className="col-md-6 pt-4">
                    <div className="why-choose-lebestow-item d-flex align-items-start mb-4 pt-4">
                        <img src={whyicon} alt="Community Beyond Walls" style={{ width: "70px", height: "70px", marginRight: "15px" }} />
                    <div>
                        <h5 className="why-choose-lebestow-head mb-1">Community Beyond Walls</h5>
                        <p className="why-choose-lebestow-body">Forge Real Friendships, Not Just Roommate <br />Arrangements - In A Vibrant, Welcoming Community.</p>
                    </div>
                    </div>
                    <div className="why-choose-lebestow-item d-flex align-items-start mb-4">
                        <img src={whyicon} alt="Community Beyond Walls" style={{ width: "70px", height: "70px", marginRight: "15px" }} />
                    <div>
                        <h5 className="why-choose-lebestow-head mb-1">Live, Laugh, Connect</h5>
                        <p className="why-choose-lebestow-body">From Spontaneous Hangouts To Shared Passions - <br/>Experience Connection Beyond Schedules.</p>
                    </div>
                    </div>
                    <div className="why-choose-lebestow-item d-flex align-items-start mb-4">
                        <img src={whyicon} alt="Community Beyond Walls" style={{ width: "70px", height: "70px", marginRight: "15px" }} />
                    <div>
                        <h5 className="why-choose-lebestow-head mb-1">Inclusive & Empowering</h5>
                        <p className="why-choose-lebestow-body">Stay Your Way - Whether You're Solo, With Friends, Or <br/>Part Of A Mixed Group. Safe, Respectful, And Inclusive.</p>
                    </div>
                    </div>
                    <div className="why-choose-lebestow-item d-flex align-items-start mb-4">
                        <img src={whyicon} alt="Community Beyond Walls" style={{ width: "70px", height: "70px", marginRight: "15px" }} />
                    <div>
                        <h5 className="why-choose-lebestow-head mb-1">Move-In Ready, Stress-Free</h5>
                        <p className="why-choose-lebestow-body">No Long-Term Lock-Ins. No Hidden Costs. Just Easy <br/>Living On Your Terms.</p>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-6">
                        <img src={whylebestow} className="whylebestowimage" alt="whylebestowimage" />
                        <p className="whylebestowimage-body">“Feel at home
                            <br/>— whether you're here for a month or a year.”
                        </p>
                    </div>
                </div>
            </div>
            <br/>
        </div>
        </>
    )
}

export default Whychooselebestow;