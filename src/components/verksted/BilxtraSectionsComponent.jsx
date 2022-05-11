import React from "react";
import Image from "next/image";

const BilxtraSectionsComponent = ({ header, text, atag, link, image }) => {
  return (
    <>
      <div className="container">
        <div className="text-box">
          <h1>{header}</h1>
          <p className="text">{text}</p>
          <a className="text" href={link}>
            {atag}
          </a>
        </div>
        <div className="img-box">
          <Image src={image} />
        </div>
      </div>
      <style jsx>{`
        .container {
          grid-column-gap: 8rem;
          margin-top: 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: "text img";
        }
        .img-box {
          grid-area: img;
        }
        .text-box {
          grid-area: text;
        }
        @media screen and (max-width: 1200px) {
          .container {
            grid-column-gap: 0;
            grid-template-areas:
              "text text"
              "img img";
          }
          .img-box {
            margin-top: 0rem;
            margin-bottom: -6rem;
          }
        }
      `}</style>
    </>
  );
};

export default BilxtraSectionsComponent;
