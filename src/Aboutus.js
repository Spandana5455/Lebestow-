import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Teamsection from './Teamsection';
import './Aboutus.css';
import aboutusimg from './images/aboutusimg.png';
import founder from './images/founder.png';
import cofounder from './images/cofounder.png';
import visionimg from './images/visionimg.png';
import missionimg from './images/missinimg.png';

const Aboutus = () => {
  return (
    <>
    <div className="aboutus-wrapper">
    <div className="aboutus-section">
        <div className="container">
            <h2 className="aboutus-heading">Where Every Space<br/><span className="aboutus-sub-heading">Inspires Connection</span>
            </h2>

            <div className="row">
                <div className="col-md-8">
                    <img src={aboutusimg} className="aboutusimg" alt="aboutusimg"/>
                    <p className="aboutusbody">At <span className="aboutus-body">Le Bestow</span>, we're not just redefining co-living; we're reimagining the art of modern living. Our spaces are crafted to foster connection, creativity, and a sense of belonging, providing more than just a place to stay. They are hubs of inspiration, designed for those who seek a lifestyle that is as dynamic and flexible as they are.
                    Located in the heart of vibrant cities like Hyderabad, Le Bestow is home to working professionals, students, and digital nomads alike. We create environments that inspire growth, encourage collaboration, and celebrate the joy of shared experiences. Each of our curated spaces is thoughtfully designed to blend comfort with functionality, ensuring that every moment spent with us enhances your living experience.</p>
                </div>

                <div className="col-md-4 aboutus-details">
                    <div className="md-4">
                        <h5 className="about-first-title">250+</h5>
                        <p className="about-text">Room reserved</p>
                    </div>
                    <br/>
                    <div className="md-4">
                        <h5 className="about-title">98%</h5>
                        <p className="about-text">Satisfaction rate</p>
                    </div>
                    <br/>
                    <div className="md-4">
                        <h5 className="about-title">03</h5>
                        <p className="about-text">Locations</p>
                    </div>
                    <br/>
                    <div className="md-4">
                        <h5 className="about-title">24/7</h5>
                        <p className="about-text">Support</p>
                    </div>
                </div>
            </div>
        </div>
        <br/>
    </div>
    </div>

        <div className="container">
            <div className="row p-4">
                <div className="col-md-6">
                    <img src={founder} className="founder-image" alt="founder-image"/>
                </div>
                <div className="col-md-6">
                    <h3 className="founder-title">Founder</h3>
                    <h3 className="founder-name">Lakshmi Kanth  Reddy</h3>
                    <div className="founder-details">
                        <h5 className="founder-head">Building Homes, Not Just Houses</h5>
                        <p className="founder-text">Driven by a passion for community and connection, our founder envisioned a co-living platform where every space feels personal, welcoming, and full of life. With deep roots in hospitality and a belief in human-centered living, Lakshmi Kanth  Reddy created a new way of living for a new generation.</p>
                    </div>
                </div>

                <div className="col-md-6 pt-4">
                    <h3 className="cofounder-title">Co-Founder</h3>
                    <h3 className="cofounder-name">Bharath</h3>
                    <div className="cofounder-details">
                        <h5 className="cofounder-head">Creating Spaces for Every Story</h5>
                        <p className="cofounder-text">With a heart for design and a mind for people, our co-founder shaped Le Bestow into more than just rooms - into places where friendships bloom and memories are made. Their vision blends comfort, creativity, and community into everyday living.</p>
                    </div>
                </div>
                <div className="col-md-6 pt-4">
                    <img src={cofounder} className="cofounder-image" alt="cofounder-image"/>
                </div>
            </div>
        </div>

        <Teamsection />
        <br/>
        <div className="vision-section">
        <div className="container">
            <h2 className="vision-heading">Our Vision</h2>
            <div className="row">
                <div className="col-md-6">
                    <img src={visionimg} className="visionimg p-4" alt="visionimg"/>
                </div>
                <div className="col-md-6">
                    <p className="vision-body">We believe that true living is about more than a comfortable space - it's about belonging to something bigger. At Le Bestow, our vision is to redefine urban lifestyles by creating vibrant ecosystems where every individual feels inspired, empowered, and truly at home. We aspire to set a new standard for co-living - one where innovation meets warmth, where every connection is meaningful, and where every day brings new opportunities for personal and collective growth.</p>
                </div>
            </div>
        </div>
        </div>
        <br/>
        <div className="mission-section">
        <div className="container">
            <h2 className="mission-heading">Our Mission</h2>
            <div className="row">
                <div className="col-md-6">
                    <p className="mission-body">Our mission is to design and deliver spaces where life flows effortlessly. We're committed to building premium, flexible environments that support both solitude and social connection - recognizing that true wellbeing comes from balance. Through thoughtful design, exceptional service, and a passion for creating community - driven experiences, we empower our residents to live more fully, create more freely, and connect more meaningfully in every moment they spend at Le Bestow.</p>
                </div>
                <div className="col-md-6">
                    <img src={missionimg} className="missionimg p-4" alt="missionimg"/>
                </div>
            </div>
        </div>
        </div>
    </>
  );
};

export default Aboutus;
