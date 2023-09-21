import React from "react";
import Image from "next/image";
import verkstedLogo from "../../../assets/bilxtra_verksted_logo.jpg";
import EuKontroll from "./EuKontroll";
import Bildeler from "./Bildeler";
import BilxtraSectionsComponent from "./BilxtraSectionsComponent";
import partsImage from "../../../assets/slitedeler.png";
import mobilitetsgarantiImg from "../../../assets/mobilitetsgaranti.png";
import Dekk from "./Dekk";

import verksted1 from "../../../assets/verksted/verksted1.jpg";

import MarginLayout from "../common/MarginLayout";
import Column2Layout from "../common/Column2Layout";
import BilxtraGaranti from "./BilxtraGaranti";
import ServiceBilxtra from "./ServiceBilxtra";

const VerkstedSection = () => {
  return (
    <>
      <MarginLayout>
        <div className="container">
          <Column2Layout>
            <div className="textContainer">
              <p className="text">
                Flisa Bil tilbyr reparasjon og service på alle type biler inntil
                7500kg, og bobiler. Vi har diagnoseverktøy, spesialverktøy og
                verkstedutstyr slik at din bil får god oppfølging og pleie når
                den er på vårt verksted. Bestill time på verksted i dag.
              </p>
              <br />
              <p className="text">
                Vi tilbyr også finansiering/delbetaling rentefritt i 12 mnd. med
                Bilxtra konto.
              </p>
              <div className="logoContainer">
                <div className="logo">
                  <Image src={verkstedLogo} layout="responsive" />
                </div>
                <a href="https://bilxtraverksted.no/elverum/flisa-bil">
                  <button className="btn2">Bestill verkstedtime</button>
                </a>
              </div>
            </div>
            <Image src={verksted1} layout="responsive" />
          </Column2Layout>

          <div className="euKontollContainer">
            <EuKontroll />
          </div>
          <div className="bildelerContainer">
            <Bildeler />
          </div>
          <div className="garanti-container">
            <BilxtraGaranti />

            <ServiceBilxtra />
          </div>
          <div className="dekk-container">
            <Dekk />
          </div>
        </div>
      </MarginLayout>
      <style jsx>{`
        .header {
          font-size: 2.5rem;
          font-weight: 100;
        }

        .logoContainer {
          padding-top: 2rem;
        }
        .logo {
          width: 15rem;
          margin-bottom: 2rem;
        }
        .container {
          margin-top: 10rem;
        }
        .dekk-container {
          margin-bottom: 5rem;
        }

        @media screen and (max-width: 756px) {
          .bildelerContainer {
            margin-top: -4rem;
          }
          .textContainer {
            margin: -8rem 0 0 0;
          }
          .garanti-container {
            margin-top: -4rem;
          }
        }
      `}</style>
    </>
  );
};

export default VerkstedSection;
