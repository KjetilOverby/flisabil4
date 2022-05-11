import React from "react";
import MarginLayout from "../common/MarginLayout";
import Image from "next/image";
import workshop from "../../../assets/workshop.jpg";
import carsale from "../../../assets/carsale.jpg";
import shopcart from "../../../assets/shopcart.jpg";

const TextSection1 = () => {
  return (
    <>
      <MarginLayout>
        <h1 className="header main-header">VELKOMMEN TIL FLISA BIL</h1>
        <div className="container">
          <div className="text-box">
            <Image src={carsale} />
            <h1 className="header">BILSALG</h1>
            <p className="text">
              Ta en kikk på våre biler, vi har et bredt utvalg og mange
              prisklasser. Vi tar gjerne i mot innbytte, vi kan også betale et
              passende mellomlegg i eventuellt dyrere bil.
            </p>
          </div>
          <div className="text-box">
            <Image src={workshop} />
            <h1 className="header">VERKSTED</h1>
            <p className="text">
              Flisa bil tilbyr reparasjon og service på alle type biler. Vi har
              diagnoseverktøy, spesialverktøy og verkstedutstyr. Her utfører vi
              også EU-kontroll på bilen din til fast lavpris.
            </p>
          </div>
          <div className="text-box">
            <Image src={shopcart} />
            <h1 className="header">BILXTRA</h1>
            <p className="text">
              Vi er en del av Bilxtra. Du kan bestille bildeler og rekvisita på
              nett. Vi tilbyr også finansiering/delbetaling rentefritt i 12 mnd.
              medBilxtra konto.
            </p>
          </div>
        </div>
      </MarginLayout>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 6rem;
          }
          .img {
            width: 100%;
          }
          .header {
            font-size: 2.5rem;
            font-weight: 100;
            margin: 0.5rem 0;
          }
          .main-header {
            text-align: center;
            margin: 8rem 0;
          }
          @media screen and (max-width: 950px) {
            .container {
              grid-template-columns: 1fr;
            }
          }
          @media screen and (max-width: 950px) {
            .main-header {
              font-size: 2rem;
              margin: 5rem 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default TextSection1;
