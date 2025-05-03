import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Aboutus from "./Aboutus";
import ScrollTop from "./ScrollTop";
import Whychooselebestow from "./Whychooselebestow";
import Ourservices from "./Ourservices";
import Contactus from "./Contactus";
import Testimonials from "./Testimonials";
import Teamsection from "./Teamsection";
import Cafe from "./Cafe";
import Gaming from "./Gaming";
import Coliving from "./Coliving";
import Menu from "./Menu";
import Cafecontactus from "./Cafecontactus";
import Privacypolicy from "./Privacypolicy";
import Terms from "./Terms";
import Cancellationpolicy from "./Cancellationpolicy";
import Aira from "./Aira";
import Bhuvan from "./Bhuvan";
import Casa from "./Casa";
import D from "./D";
import Bookyourgame from "./Bookyourgame";

const App = () => {
  return (
    <Router>
       <ScrollTop />
      <div>
        <Navbar />
        <Container className="my-4">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whychooselebestow" element={<Whychooselebestow />} />
          <Route path="/ourservices" element={<Ourservices />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/teamsection" element={<Teamsection />} />
          <Route path="/zones/cafe" element={<Cafe />} />
          <Route path="/zones/gaming" element={<Gaming />} />
          <Route path="/zones/co-living" element={<Coliving />} />
          <Route path="/zones/cafe/menu" element={<Menu />} />
          <Route path="/zones/cafe/Cafecontactus" element={<Cafecontactus />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cancellation" element={<Cancellationpolicy />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/explore/aira" element={<Aira />} />
          <Route path="/explore/bhuvan" element={<Bhuvan />} />
          <Route path="/explore/casa" element={<Casa />} />
          <Route path="/explore/d" element={<D/>} />
          <Route path="/zones/gaming/bookyourgame" element={<Bookyourgame />} />
          </Routes>
        </Container>
        <Footer />
        
      </div>
    </Router>
  );
};

export default App;
