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
    </div>
  );
};

export default ImageSection;
