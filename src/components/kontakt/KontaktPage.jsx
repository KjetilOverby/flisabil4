import React from "react";
import MapSection from "./MapSection";
import ImageHeader from "../common/ImageHeader";
import KontaktTextComponent from "./KontaktTextComponent";

const KontaktPage = () => {
  return (
    <>
      <div className="container">
        <ImageHeader
          header="KONTAKT OSS"
          image="https://images.unsplash.com/photo-1583594668973-84c8cfc9d721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80"
        />
        <KontaktTextComponent />
        <MapSection />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
};

export default KontaktPage;
