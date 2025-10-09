import React from "react";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import OurDetails from "./components/OurDetails";

import "./App.css";
import { LanguageProvider } from "./components/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <div>
        {/* <Navbar/> */}
        <Hero />
        <Cards />
        <OurDetails />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
