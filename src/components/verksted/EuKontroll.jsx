import React from "react";

const EuKontroll = () => {
  return (
    <>
      <div className="container">
        <h1>Eu-kontroll</h1>
        <p className="text textEu1">
          Vi tar eu-kontroll på alle type biler inntil 7500kg, og bobiler. Hos
          oss har vi fast lavpris på Eu-kontroll. Vi gir tilbud til
          konkeransedyktige priser på eventuelle utbedringer som må tas og
          setter opp en time for deg hvis ønskelig. Sjekk når fristen på bilen
          din er for neste Eu-kontroll.
        </p>
        <a href="https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/eu-kontroll/kontrollfrist/?registreringsnummer">
          <button className="btn2">Sjekk frist Eu-kontroll</button>
        </a>
        <br />
        <p className="text textEu2">
          Så lenge kjøretøyet er godkjent innen fristen, kan du selv velge hvor
          tidlig du ønsker å gjennomføre EU-kontrollen. Fristen er endelig, så
          beregn nok tid til å få gjennomført hovedkontroll, rette eventuelle
          mangler og få utført etterkontroll. Neste frist for EU-kontroll
          beregnes ut fra datoen du tok hovedkontrollen. (sitat fra vegvesen.no){" "}
          <a href="https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/eu-kontroll/nar-kan-du-ta-eu-kontroll/">
            Les mer her
          </a>
        </p>
        <a href="https://bilxtraverksted.no/elverum/flisa-bil">
          <button className="btn2">Bestill Eu-kontroll</button>
        </a>
      </div>
      <style jsx>{`
        .container {
          margin-top: 8rem;
        }
        .textEu1 {
          margin-bottom: 2rem;
        }
        .textEu2 {
          margin-top: 2rem;
        }
      `}</style>
    </>
  );
};

export default EuKontroll;
