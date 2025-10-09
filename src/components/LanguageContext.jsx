import React, { createContext, useState } from "react";

// Create context
export const LanguageContext = createContext();

// Create provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // default English

  // All content for different languages
  const content = {
    en: {
      heroTitle: "Welcome to Our Website",
      heroSubtitle: "We provide the best services",
      contactText: "Contact Us",
      footerText: "All rights reserved © 2025",
    },
    te: {
      heroTitle: "మా వెబ్‌సైట్‌కు స్వాగతం",
      heroSubtitle: "మేము అత్యుత్తమ సేవలను అందిస్తున్నాము",
      contactText: "మమ్మల్ని సంప్రదించండి",
      footerText: "అన్ని హక్కులు రిజర్వ్ © 2025",
    },
    hi: {
      heroTitle: "हमारी वेबसाइट में आपका स्वागत है",
      heroSubtitle: "हम सर्वोत्तम सेवाएँ प्रदान करते हैं",
      contactText: "संपर्क करें",
      footerText: "सभी अधिकार सुरक्षित © 2025",
    },
    ta: {
      heroTitle: "எங்கள் வலைத்தளத்திற்கு வரவேற்கிறோம்",
      heroSubtitle: "நாம் சிறந்த சேவைகளை வழங்குகிறோம்",
      contactText: "தொடர்பு கொள்ளவும்",
      footerText: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை © 2025",
    },
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};
