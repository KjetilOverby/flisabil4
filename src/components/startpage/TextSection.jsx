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
        <div>
          <Image src={carservice} width="1120" />
        </div>
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
        {/*  <h1 className={styles.header}>Kort om oss</h1>
         <div className={styles.imgTextBox}>
          
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
        </div> */}
      </div>
    </MarginLayout>
  );
};

export default TextSection;
