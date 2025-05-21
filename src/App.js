import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import Mealservice from "./Mealservice";
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
import Whatsapp from "./Whatsapp";
import Cafewhatsapp from "./Cafewhatsapp";

const App = () => {
  const location = useLocation();

  return (
    <>
      <ScrollTop />
      <Whatsapp />
      {["/facilities/cafe", "/facilities/gaming", "/facilities/mealservice"].includes(location.pathname) && <Cafewhatsapp />}
      
      <Navbar />
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whychooselebestow" element={<Whychooselebestow />} />
          <Route path="/ourservices" element={<Ourservices />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/teamsection" element={<Teamsection />} />
          <Route path="/facilities/cafe" element={<Cafe />} />
          <Route path="/facilities/gaming" element={<Gaming />} />
          <Route path="/facilities/co-living" element={<Coliving />} />
          <Route path="/facilities/mealservice" element={<Mealservice />} />
          <Route path="/facilities/cafe/menu" element={<Menu />} />
          <Route path="/facilities/mealservice/Cafecontactus" element={<Cafecontactus />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cancellation" element={<Cancellationpolicy />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/explore/aira" element={<Aira />} />
          <Route path="/explore/bhuvan" element={<Bhuvan />} />
          <Route path="/explore/casa" element={<Casa />} />
          <Route path="/explore/d" element={<D />} />
          <Route path="/facilities/gaming/bookyourgame" element={<Bookyourgame />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};


const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;

