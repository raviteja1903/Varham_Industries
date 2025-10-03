import React from "react";
import Hero from "./components/Hero";
import "./App.css";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import OurDetails from "./components/OurDetails";

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />
      <Cards />
      <OurDetails />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
