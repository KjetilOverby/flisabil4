import React from "react";
import BruktbilerPage from "../src/components/bruktbiler/BruktbilerPage";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PageLayout from "../src/components/common/PageLayout";

const bruktbiler = () => {
  return (
    <PageLayout>
      <HeaderComponent />
      <BruktbilerPage />
      <FooterComponent />
    </PageLayout>
  );
};

export default bruktbiler;
