import React from "react";
import Image from "next/image";
import engine from "../../../assets/parts.jpg";

const Bildeler = () => {
  return (
    <>
      <div className="container">
        <div className="textContainer">
          <h1>Bildeler</h1>
          <ul>
            <li>
              Vi lagerfører Bremseklosser, filtre, reimer, termostater,
              vannpumper, forstillingsdeler, hjullager, drivledd, eksos,
              plugger, drivstoffslanger og batterier
            </li>
            <li>
              I tillegg kan i levere alt av originaldeler, Amerikanske bildeler,
              og andre slitedeler fra 1-4 virkedager.
            </li>
            <li>Vi har samme pris i butikk som på nett</li>
          </ul>
          <p className="text">
            Du kan også bruke Klikk og Hent på Bilxtra.no, les mer om det{" "}
            <a href="https://bilxtra.no/kundesenter/klikk-og-hent/">her</a>
          </p>
        </div>
        <div className="imgContainer">
          <Image src={engine} />
        </div>
        <div className="nettbutikkButtonContainer">
          <a href="https://bilxtra.no/bildelernav">
            <button className="btn2">Bilxtra nettbutikk</button>
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
        }
      `}</style>
    </>
  );
};

export default Bildeler;
