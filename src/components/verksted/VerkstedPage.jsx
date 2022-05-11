import React from "react";
import ImageHeader from "../common/ImageHeader";
import VerkstedSection from "../verksted/VerkstedSection";
import verksted from "../../../assets/verksted/verksted.jpg";

const VerkstedPage = () => {
  return (
    <>
      <div className="container">
        <ImageHeader header="VERKSTED" image={verksted} />
        <VerkstedSection />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
        }
      `}</style>
    </>
  );
};

export default VerkstedPage;
