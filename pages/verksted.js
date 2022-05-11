import React from "react";
import PageLayout from "../src/components/common/PageLayout";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import VerkstedPage from "../src/components/verksted/VerkstedPage";

const verksted = () => {
  return (
    <PageLayout>
      <HeaderComponent />
      <VerkstedPage />
      <FooterComponent />
    </PageLayout>
  );
};

export default verksted;
