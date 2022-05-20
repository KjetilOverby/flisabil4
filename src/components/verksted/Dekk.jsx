import React from "react";
import Image from "next/image";
import dekk from "../../../assets/dekk.jpg";
import superdaekLogo from "../../../assets/superdaek_logo.jpg";

const Dekk = () => {
  return (
    <>
      <div className="container">
        <div className="textContainer">
          <h1 className="global-header header">Dekk og felg</h1>

          <p className="text">
            Vi forhandler dekk og felger fra Superdaek. Og kan tilby dekkhotell
            for våre kunder.
            {/* <a href="https://bilxtra.no/kundesenter/klikk-og-hent/">her</a> */}
          </p>
          <Image src={superdaekLogo} />
        </div>
        <div className="imgContainer">
          <Image src={dekk} />
        </div>
        <div className="nettbutikkButtonContainer">
          <a href="https://www.superdekk.no/">
            <button className="btn2">Til Superdaek</button>
          </a>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin-top: 5rem;
          display: grid;
          grid-column-gap: 8rem;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 26rem 1fr;
          grid-template-areas:
            "text img"
            "btn btn";
        }
        .nettbutikkButtonContainer {
          grid-area: btn;
        }
        li {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
        .textContainer {
          grid-area: text;
        }
        .imgContainer {
          grid-area: img;
          margin-top: 2rem;
        }
        @media screen and (max-width: 1200px) {
          .container {
            grid-column-gap: 0;
            grid-template-areas:
              "text text"
              "img img"
              "btn btn";
          }
          .imgContainer {
            margin-bottom: 2rem;
            margin-top: -8rem;
          }
          @media screen and (max-width: 756px) {
            .header {
              margin-bottom: 1rem;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Dekk;
