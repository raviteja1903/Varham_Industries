import React from "react";
import Hero from "./components/Hero";
import "./App.css";
import Cards from "./components/Cards";

import Footer from "./components/Footer";
import OurCapabilities from "./components/ourcapabilities";
import Career from "./components/career";
 

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />
      <Cards />
      <OurCapabilities/>
      <Career />
      <Footer />
    </div>
  );
};

export default App;
