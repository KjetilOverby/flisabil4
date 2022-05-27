import React from "react";
import Image from "next/image";
import vegvesenLogo from "../../../assets/vegvesen.png";
import bilbransjeLogo from "../../../assets/social.png";
import bilxtraLogo from "../../../assets/Bilxtra_logo.png";
import godkjentStatens from "../../../assets/godkjent-statens.jpg";

const LogoSection = () => {
  return (
    <>
      <div className="container">
        <div className="bilxtraContainer">
          <Image src={bilxtraLogo} />
        </div>
        <div className="statensContainer">
          <Image src={godkjentStatens} />
        </div>
        <div className="bilbransjeContainer">
          <Image src={bilbransjeLogo} />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-around;
          margin: 5rem 25rem;
        }
        .statensContainer {
          width: 6rem;
        }
        .bilbransjeContainer {
          width: 12rem;
        }
        .bilxtraContainer {
          width: 10rem;
        }
        @media screen and (max-width: 1500px) {
          .container {
            margin: 2rem 5rem;
          }
        }
        @media screen and (max-width: 1000px) {
          .container {
            margin: 0 0;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 25rem;
            margin: 2rem 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default LogoSection;
