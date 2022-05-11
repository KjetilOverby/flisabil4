import React from "react";
import PageLayout from "../src/components/common/PageLayout";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import KontaktPage from "../src/components/kontakt/KontaktPage";

const kontakt = () => {
  return (
    <PageLayout>
      <HeaderComponent />
      <KontaktPage />
      <FooterComponent />
    </PageLayout>
  );
};

export default kontakt;
