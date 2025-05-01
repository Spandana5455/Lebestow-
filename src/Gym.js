import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gym.css';
import gymimage from './images/gymimage.png';
import gymicon1 from './images/gymicon1.gif';
import gymicon2 from './images/gymicon2.gif';
import gymicon3 from './images/gymicon3.gif';
import gymicon4 from './images/gymicon4.gif';

const Gym = () => {
    return (
        <>
        <div className="gym-wrapper">
            <div className="gym-section">
                <div className="gym-content container">
                    <h2 className="gymsection-item">Fuel Your Fitness. <br/>Right Where You Live.</h2>
                    <p className="gymsection-text">Exclusively for Le Bestow residents - our in-house fitness center brings wellness just a few steps away from your room.</p>
                </div>
            </div>
        </div>
        
        <h2 className="why-work-out-section-heading text-center">Why Work Out at Le Bestow Gym</h2>

        <div className="why-work-out-section">
            <div className="container pt-4">
                <div className="row g-4 p-4">
                    <div className="col card1">
                    <img src={gymicon1} className='gymicon' alt='gymicon1'/>
                    <h5 className="why-work-out-head">Advanced Fitness Equipment</h5>
                    <p className="why-work-out-body">Focus on independence: “Train with premium machines-no waiting, no limits. Everything you need, when you need it.”</p>
                    </div>
                    <div className="col card1">
                    <img src={gymicon2} className='gymicon' alt='gymicon2'/>
                    <h5 className="why-work-out-head">Smart Workout Zones</h5>
                    <p className="why-work-out-body">Highlight efficiency: “Targeted zones for specific workouts-from HIIT to stretch, so you can flow through your routine with purpose.”</p>
                    </div>
                    <div class="w-100"></div>
                    <div className="col card1">
                    <img src={gymicon3} className='gymicon' alt='gymicon3'/>
                    <h5 className="why-work-out-head">Popular Among Fitness Enthusiasts</h5>
                    <p className="why-work-out-body">Social proof angle: “Join hundreds who chose freedom over follow-the-leader fitness. Built for real people, real goals.”</p>
                    </div>
                    <div className="col card1">
                    <img src={gymicon4} className='gymicon' alt='gymicon4'/>
                    <h5 className="why-work-out-head">Positive Workout Vibes</h5>
                    <p className="why-work-out-body">Emotional connection: “Designed to lift your mood and drive consistency. Feel the energy every time you step in.”</p>
                    </div>
                </div>
            </div>

            <img src={gymimage} className='gymimage' alt='gymimage'/>
            <div className='gym-contact-us'>
                <Link to="/contact"><button className='gymcontactus'>Contact Us</button></Link>
            </div>
        </div>
        </>
    )
}

export default Gym;