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

const VerkstedSection = () => {
  return (
    <>
      <MarginLayout>
        <div className="container">
          <Column2Layout>
            <Image src={verksted1} />

            <div>
              <p className="text">
                Flisa bil tilbyr reparasjon og service på alle type biler inntil
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
                  <Image src={verkstedLogo} />
                </div>
                <a href="https://bilxtraverksted.no/elverum/flisa-bil">
                  <button className="btn2">Bestill verkstedtime</button>
                </a>
              </div>
            </div>
          </Column2Layout>
          <div className="euKontollContainer">
            <EuKontroll />
          </div>
          <div className="bildelerContainer">
            <Bildeler />
          </div>
          <div className="garanti-container">
            <BilxtraSectionsComponent
              header="5 års garanti på alle reservedeler"
              text="Som et element til kundenes trygghet i valg av verksted, innfører
            BilXtra 5 års garanti/100 000 km på reservedeler som benyttes ved
            våre verksteder. Garantien er gjeldene fra 01.01.2011 og forutsetter
            at bilen følger bilfabrikantens service - og vedlikeholdsprogram hos
            BilXtra eller andre offentlig godkjente verksteder."
              atag="Les mer om delegaranti"
              link="https://bilxtraverksted.no/delegaranti"
              image={partsImage}
            />
            <BilxtraSectionsComponent
              header="Service med mobilitetsgaranti"
              text="Hos BilXtra verksted får du 12 måneders Mobilitetsgaranti med på kjøpet, hvis du bestiller BilXtra – service med Mobilitetsgaranti, eller service ut fra bilens servicehefte.
            Med BilXtra Mobilitetsgaranti får du hjelp uansett tid og sted i hele Norden i et helt år. Ved å utføre service hos BilXtra verksted, vil Mobilitetsgarantien fornyes med 12 måneder og gi deg ekstra trygghet."
              atag="Les mer om mobilitetsgaranti"
              link="https://bilxtraverksted.no/mobilitetsgaranti"
              image={mobilitetsgarantiImg}
            />
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
        .bildelerContainer {
          grid-area: del;
        }
        .container {
          margin-top: 10rem;
          margin-bottom: 5rem;
        }
        .dekk-container {
          grid-area: dekk;
        }
        .euKontollContainer {
          grid-area: eu;
        }
        .garanti-container {
          grid-area: gar;
        }
        .logoContainer {
          grid-area: logo;
          padding-top: 2rem;
        }
        .logo {
          width: 15rem;
          margin-bottom: 2rem;
        }

        .textContainer {
          grid-area: text;
          margin-bottom: 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 3rem;
        }
        @media (max-width: 2100px) {
          .container {
            grid-template-columns: 20rem 1fr 15rem 20rem;
          }
        }
        @media screen and (max-width: 1600px) {
          .container {
            grid-template-columns: 3rem 1fr 15rem 3rem;
          }
        }
        @media screen and (max-width: 1200px) {
          .container {
            grid-template-columns: 5rem 1fr 15rem 5rem;
          }
        }
        @media screen and (max-width: 900px) {
          .container {
            margin-top: 2rem;
            grid-template-columns: 1rem 1fr 1fr 1rem;
            grid-column-gap: 0;
            grid-template-areas:
              ". text text ."
              ". logo logo ."
              ". gar gar ."
              ". eu eu ."
              ". del del ."
              ". dekk dekk .";
          }
        }
      `}</style>
    </>
  );
};

export default VerkstedSection;
