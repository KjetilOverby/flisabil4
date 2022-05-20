import React from "react";
import Image from "next/image";
import engine from "../../../assets/parts.jpg";
import Column2Layout from "../common/Column2Layout";
import carparts from "../../../assets/carparts.jpg";

const Bildeler = () => {
  return (
    <>
      <h1 className="global-header header">Bildeler</h1>
      <Column2Layout>
        <div>
          <div className="textContainer">
            <ul>
              <li>
                Vi lagerfører Bremseklosser, filtre, reimer, termostater,
                vannpumper, forstillingsdeler, hjullager, drivledd, eksos,
                plugger, drivstoffslanger og batterier
              </li>
              <li>
                I tillegg kan i levere alt av originaldeler, Amerikanske
                bildeler, og andre slitedeler fra 1-4 virkedager.
              </li>
              <li>Vi har samme pris i butikk som på nett</li>
            </ul>
            <p className="text">
              Du kan også bruke Klikk og Hent på Bilxtra.no, les mer om det{" "}
              <a href="https://bilxtra.no/kundesenter/klikk-og-hent/">her</a>
            </p>
          </div>
          <div className="nettbutikkButtonContainer">
            <a href="https://bilxtra.no/bildelernav">
              <button className="btn2">Bilxtra nettbutikk</button>
            </a>
          </div>
        </div>
        <div className="imgContainer">
          <Image src={carparts} />
        </div>
      </Column2Layout>
      <style jsx>{`
        .header {
          margin: 8rem 0 3rem 0;
        }
        .textContainer {
          margin-bottom: 2rem;
        }

        li {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        @media screen and (max-width: 756px) {
          .textContainer {
            margin-top: -rem;
          }
        }
      `}</style>
    </>
  );
};

export default Bildeler;
