import React from "react";
import carcheck from "../../../assets/carcheck.jpg";
import vwcar from "../../../assets/verksted/vwcar.jpg";
import Column2Layout from "../common/Column2Layout";
import Image from "next/image";

const EuKontroll = () => {
  return (
    <>
      <div className="container">
        <h1 className="global-header verksted-header">Eu-kontroll</h1>
        <Column2Layout>
          <div className="text-img-container">
            <Image src={carcheck} />
            <p className="text textEu1">
              Vi tar eu-kontroll på alle type biler inntil 7500kg, og bobiler.
              Hos oss har vi fast lavpris på Eu-kontroll. Vi gir tilbud til
              konkeransedyktige priser på eventuelle utbedringer som må tas og
              setter opp en time for deg hvis ønskelig. Sjekk når fristen på
              bilen din er for neste Eu-kontroll.
            </p>
            <a href="https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/eu-kontroll/kontrollfrist/?registreringsnummer">
              <button className="btn2">Sjekk frist Eu-kontroll</button>
            </a>
          </div>
          <div className="text-img-container">
            <Image src={vwcar} />
            <p className="text textEu1">
              Så lenge kjøretøyet er godkjent innen fristen, kan du selv velge
              hvor tidlig du ønsker å gjennomføre EU-kontrollen. Fristen er
              endelig, så beregn nok tid til å få gjennomført hovedkontroll,
              rette eventuelle mangler og få utført etterkontroll. Neste frist
              for EU-kontroll beregnes ut fra datoen du tok hovedkontrollen.
              (sitat fra vegvesen.no){" "}
              <a href="https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/eu-kontroll/nar-kan-du-ta-eu-kontroll/">
                Les mer her
              </a>
            </p>
            <a href="https://bilxtraverksted.no/elverum/flisa-bil">
              <button className="btn2">Bestill Eu-kontroll</button>
            </a>
          </div>
        </Column2Layout>
        <br />
      </div>
      <style jsx>{`
        .container {
          margin-top: 8rem;
        }
        .textEu1 {
          margin-top: 2rem;
          margin-bottom: 3rem;
        }

        .verksted-header {
          margin-bottom: 3rem;
        }
      `}</style>
    </>
  );
};

export default EuKontroll;
