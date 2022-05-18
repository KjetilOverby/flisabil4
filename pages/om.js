import React from "react";
import PageLayout from "../src/components/common/PageLayout";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import VerkstedPage from "../src/components/verksted/VerkstedPage";
import About from "../src/components/about/About";

const om = () => {
  return (
    <PageLayout>
      <HeaderComponent />
      <About />
      <FooterComponent />
    </PageLayout>
  );
};

export default om;
