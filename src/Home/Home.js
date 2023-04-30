import React from "react";
import About from "./About";
import Expert from "./Expert";
import Footer from "./Footer";
import Main from "./Main";
import "./navbar.css";
import Arrowimg from "./Arrowimg";

import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="homepage">
      <Main />
      <Arrowimg />
      <About />
      <Expert />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
