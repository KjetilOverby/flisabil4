import React from "react";
import styles from "../../../styles/startpage/ImageSection.module.css";
import BoxComponent from "./BoxComponent";
import TopComponent from "./TopComponent";
import { GiCarKey } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";
import { MdStore } from "react-icons/md";

const ImageSection = () => {
  return (
    <div className={styles.container}>
      <TopComponent />
      {/* 
      <BoxComponent
        header="Bilsalg"
        icon={<GiCarKey style={{ color: "#73c086", fontSize: "3rem" }} />}
        area="box1"
        text="Ta en kikk på våre biler, vi har et bredt utvalg og mange prisklasser.
        Vi tar gjerne i mot innbytte, vi kan også betale et passende mellomlegg i eventuellt dyrere bil."
        btn="Til bilsalg"
        goto="/bruktbiler"
      />
      <BoxComponent
        header="Verksted"
        icon={<FaWrench style={{ color: "#c27c66", fontSize: "2.5rem" }} />}
        area="box2"
        text="Flisa bil tilbyr reparasjon og service på alle type biler. Vi har diagnoseverktøy, spesialverktøy og verkstedutstyr. Her utfører vi også EU-kontroll på bilen din til fast lavpris."
        btn="Til verksted"
        goto="/verksted"
      />
      <BoxComponent
        header="Bilxtra"
        icon={<MdStore style={{ color: "#76b3e4", fontSize: "2.5rem" }} />}
        area="box3"
        text=" Vi er en del av Bilxtra, Vi tilbyr også finansiering/delbetaling
        rentefritt i 12 mnd. medBilxtra konto."
        btn="Til Bilxtra"
        goto="https://bilxtra.no/"
      /> */}
    </div>
  );
};

export default ImageSection;
