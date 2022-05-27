import React from "react";
import ImageSection from "./ImageSection";
import LogoSection from "./LogoSection";
import TextSection from "./TextSection";
import TextSection1 from "./TextSection1";
import carsale from "../../../assets/carsale.jpg";
import workshop from "../../../assets/workshop.jpg";
import shopcart from "../../../assets/shopcart.jpg";
import carcheck from "../../../assets/carcheck.jpg";
import tyres from "../../../assets/tyres.jpg";
import carparts from "../../../assets/carparts.jpg";
import Image from "next/image";

const StartPage = () => {
  return (
    <>
      <div className="container">
        <ImageSection />
        <h1 className="global-header main-header">VELKOMMEN TIL FLISA BIL</h1>
        <TextSection1
          header="BILSALG"
          image={<Image src={carsale} />}
          text="Ta en kikk på våre biler, vi har et bredt utvalg og mange
              prisklasser. Vi tar gjerne i mot innbytte, vi kan også betale et
              passende mellomlegg i eventuellt dyrere bil."
          header2="VEKSTED"
          image2={<Image src={workshop} />}
          text2="Flisa bil tilbyr reparasjon og service på alle type biler. Vi har
          diagnoseverktøy, spesialverktøy og verkstedutstyr. Her utfører vi
          også EU-kontroll på bilen din til fast lavpris."
          header3="BILXTRA"
          image3={<Image src={shopcart} />}
          text3=" Vi er en del av Bilxtra. Du kan bestille bildeler og rekvisita på
          nett. Vi tilbyr også finansiering/delbetaling rentefritt i 12 mnd.
          medBilxtra konto."
        />
        <TextSection />
        <TextSection1
          header="EU KONTROLL"
          image={<Image src={carcheck} />}
          text="Vi tar eu-kontroll på alle type biler inntil 7500kg, og bobiler. Hos oss har vi fast lavpris på Eu-kontroll. Vi gir tilbud til konkeransedyktige priser på eventuelle utbedringer som må tas og setter opp en time for deg hvis ønskelig. Sjekk når fristen på bilen din er for neste Eu-kontroll."
          header2="DEKK OG FELG"
          image2={<Image src={tyres} />}
          text2="Vi forhandler dekk og felger fra Superdaek. Og kan tilby dekkhotell for våre kunder."
          header3="BILDELER"
          image3={<Image src={carparts} />}
          text3="Vi lagerfører Bremseklosser, filtre, reimer, termostater, vannpumper, forstillingsdeler, hjullager, drivledd, eksos, plugger, drivstoffslanger og batterier"
        />

        <LogoSection />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
        }
        .header {
          font-weight: 100;
          margin: 0.5rem 0;
        }
        .main-header {
          text-align: center;
          margin: 6rem 0 8rem 0;
          font-size: 2.5rem;
        }
        @media screen and (max-width: 756px) {
          .main-header {
            text-align: center;
            margin: 3rem 0 0rem 0;
            font-size: 2.1rem;
          }
        }
      `}</style>
    </>
  );
};

export default StartPage;
