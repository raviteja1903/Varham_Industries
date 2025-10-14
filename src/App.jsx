import React from "react";
import Hero from "./components/Hero";
import "./App.css";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import OurDetails from "./components/OurDetails";
import CareerContact from "./components/CareerContact";
import ResearchDevelopment from "./components/ResearchDevelopment";

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />
      <Cards />
      <ResearchDevelopment />
      <OurDetails />
      <Contact />
      <CareerContact />
      <Footer />
    </div>
  );
};

export default App;
