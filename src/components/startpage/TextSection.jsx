import React from "react";
import styles from "../../../styles/startpage/TextSection.module.css";
import MarginLayout from "../common/MarginLayout";
import Image from "next/image";

import insidecar3 from "../../../assets/insidecar3.jpg";
import insidecar2 from "../../../assets/insidecar2.jpg";
import carservice from "../../../assets/carservice.jpg";

const TextSection = () => {
  return (
    <MarginLayout>
      <div className={styles.container}>
        <h1 className={styles.header}>Kort om oss</h1>
        <div className={styles.imgTextBox}>
          <Image src={insidecar3} />
          <p className={styles.text}>
            Flisa Bil har drevet bilsalg siden 1985. Vi har solgt/kjøpt biler i
            alle prisklasser siden den gang. Mest til kunder her i distriktet
            men også mer og mer over hele norge. Spesielt etterhvert som nettet
            har blitt mer og mer utnyttet. Avstanden er ikke lenger noe problem
            om du bor i Kirkenes eller Stavanger. Vår gunstige beliggenhet 1,5
            time fra Oslo Gardermoen, og videre med gode bussforbindelser. Eller
            til Elverum med tog, og buss videre en snau time, gjør at det er
            enkelt å hente bil hos oss.
          </p>
        </div>
        <div className={styles.imgTextBox}>
          <div>
            <p className={styles.text}>
              Etter så mange år i bransjen, er det med god følelse å mene at det
              er trygt å kjøpe brukt bil fra oss. Vi har lang erfaring og ordner
              alt i forbindelse med registrering av din nye brukt bil. Vi tar
              gjerne innbytte også i eventuelt dyrere bil, eller at vi kjøper
              din.
            </p>
            <br />
            <p className={styles.text}>
              Gunstig finansiering får du hos oss, som godkjent autoreg
              forhandler av Statens vegvesen kan bilen leveres med skilter
              umiddelbart.
            </p>
          </div>
          <Image src={insidecar2} />
        </div>

        <br />
        <ul>
          <li>
            <p className={styles.text}>Kjøp og salg av alle typer bruktbiler</p>
            <p className={styles.text}>
              (Vi er godkjent som autoreg forhandler av Statens Vegevesen, dette
              gjør at vi kan omregistrere og levere biler umiddelbart.)
            </p>
          </li>
          <li>
            <p className={styles.text}>Bilxtra verksted</p>
          </li>
          <li>
            <p className={styles.text}>Bilxtra butikk</p>
          </li>
          <li>
            <p className={styles.text}>
              Periodisk kjøretøykontroll/EU kontroll
            </p>
          </li>
          <li>
            <p className={styles.text}>Dekkhotell</p>
          </li>
          <li>
            <p className={styles.text}>Godkjent av Statens Vegevesen</p>
          </li>
          <li>
            <p className={styles.text}>Medlem av Norges bilbransjeforbund</p>
          </li>
        </ul>
        <div>
          <Image src={carservice} />
        </div>
      </div>
    </MarginLayout>
  );
};

export default TextSection;
