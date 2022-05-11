import React from "react";
import ImageSection from "./ImageSection";
import LogoSection from "./LogoSection";
import TextSection from "./TextSection";
import TextSection1 from "./TextSection1";

const StartPage = () => {
  return (
    <>
      <div className="container">
        <ImageSection />

        <TextSection1 />
        <TextSection />
        <LogoSection />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
        }
      `}</style>
    </>
  );
};

export default StartPage;
