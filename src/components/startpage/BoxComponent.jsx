import React from "react";
import Link from "next/link";

const BoxComponent = ({ btn, header, icon, area, text, goto }) => {
  return (
    <>
      <div className="container">
        <div className="headerContainer">
          <div>{icon}</div>
          <h2 className="header">{header}</h2>
        </div>
        <div className="textContainer">
          <p className="text">{text}</p>
        </div>
        <Link href={`${goto}`}>
          <button className="btn">{btn}</button>
        </Link>
      </div>
      <style jsx>{`
        .container {
          grid-area: ${area};
        }
        .header {
          color: #eeeeee;
          margin-left: 2rem;
          font-weight: 600;
          font-size: 2rem;
        }
        .headerContainer {
          display: flex;
          height: 5rem;
          align-items: center;
        }
        .text {
          color: #eeeeee;
          min-height: 5rem;
        }
        .textContainer {
          height: 8rem;
        }
        @media (max-width: 2100px) {
          .container {
            margin-top: -2rem;
          }
          .textContainer {
            height: 8rem;
          }
        }
        @media (max-width: 1400px) {
          .textContainer {
            height: 12rem;
          }
        }
        @media (max-width: 1220px) {
          .textContainer {
            height: 14rem;
          }
        }
        @media (max-width: 1100px) {
          .textContainer {
            height: auto;
          }
        }
        @media (max-width: 850px) {
          .container {
          }
          .headerContainer {
            height: 3rem;
          }

          .text {
            min-height: 3rem;
          }
        }
      `}</style>
    </>
  );
};

export default BoxComponent;
