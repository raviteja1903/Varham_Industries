import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const LanguageSwitcher = () => {
  const { setLanguage } = useContext(LanguageContext);

  return (
    <div style={{ margin: "20px" }}>
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("te")}>Telugu</button>
      <button onClick={() => setLanguage("hi")}>Hindi</button>
      <button onClick={() => setLanguage("ta")}>Tamil</button>
    </div>
  );
};
