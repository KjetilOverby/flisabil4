import React from "react";
import MarginLayout from "../common/MarginLayout";
import Image from "next/image";

import carsale from "../../../assets/carsale.jpg";
import shopcart from "../../../assets/shopcart.jpg";

const TextSection1 = ({
  text,
  image,
  header,
  header2,
  image2,
  text2,
  header3,
  image3,
  text3,
}) => {
  return (
    <>
      <MarginLayout>
        <div className="container">
          <div className="text-box">
            {image}
            <h1 className="header">{header}</h1>
            <p className="text">{text}</p>
          </div>
          <div className="text-box">
            {image2}
            <h1 className="header">{header2}</h1>
            <p className="text">{text2}</p>
          </div>
          <div className="text-box">
            {image3}
            <h1 className="header">{header3}</h1>
            <p className="text">{text3}</p>
          </div>
        </div>
      </MarginLayout>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 6rem;
          }
          .img {
            width: 100%;
          }
          .header {
            font-size: 2.5rem;
            font-weight: 100;
            margin: 0.5rem 0;
          }
          .main-header {
            text-align: center;
            margin: 8rem 0;
          }

          @media screen and (max-width: 950px) {
            .container {
              grid-template-columns: 1fr;
            }
          }
          @media screen and (max-width: 950px) {
            .main-header {
              font-size: 2rem;
              margin: 5rem 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default TextSection1;
