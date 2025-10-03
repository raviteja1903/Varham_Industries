import React from "react";
import Hero from "./components/Hero";
import "./App.css";
import Cards from "./components/Cards";
import OurCapabilities from "./components/ourcapabilities";
import Career from "./components/career";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />
      <Cards />
      <OurCapabilities />
      <Career/>
      <Footer/>
    </div>
  );
};

export default App;
