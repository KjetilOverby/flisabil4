import React from "react";
import styles from "../../../styles/startpage/TopComponent.module.css";
import Link from "next/link";

const TopComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Velkommen til Flisa Bil</h1>
      <p className={styles.text}>
        Alt innen bil. Etablert 1985, her er det trygt å handle.
      </p>
      <Link href="/bruktbiler">
        <button className="btn">BRUKTBILER</button>
      </Link>
    </div>
  );
};

export default TopComponent;
