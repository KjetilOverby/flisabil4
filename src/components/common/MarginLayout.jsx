import React from "react";
const MarginLayout = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>{" "}
      <style jsx>{`
        .container {
          margin: 0rem 35rem;
        }
        @media screen and (max-width: 2100px) {
          .container {
            margin: 0rem 25rem;
          }
          @media screen and (max-width: 1775px) {
            .container {
              margin: 0rem 15rem;
            }
          }
          @media screen and (max-width: 1550px) {
            .container {
              margin: 0rem 10rem;
            }
          }
          @media screen and (max-width: 1265px) {
            .container {
              margin: 0rem 3rem;
            }
          }
          @media screen and (max-width: 800px) {
            .container {
              margin: 0rem 0.5rem;
            }
          }
        }
      `}</style>
    </>
  );
};
export default MarginLayout;
