import React from "react";
import ImageHeader from "../common/ImageHeader";
import VerkstedSection from "../verksted/VerkstedSection";
import verksted from "../../../assets/verksted/verksted.jpg";

const VerkstedPage = () => {
  return (
    <>
      <div className="container">
        <ImageHeader
          header="VERKSTED"
          image={
            "https://lh3.googleusercontent.com/pw/AM-JKLXZCZlRlHUNVADYREZAu2tSkOMvLgyXLHxbgYeZRUg7t_xmnRQfYL8cpCEX7S_jJHgGKYM3M-6LO8jI2OXVkPjJIis-hAQUYnBmpZxejZFphObeF-8yREXdKnYCZYuSn9_3ZUjHDUeHVKdn4Fk-M71X=w1920-h500-no?authuser=0"
          }
        />
        <VerkstedSection />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
        }
      `}</style>
    </>
  );
};

export default VerkstedPage;
