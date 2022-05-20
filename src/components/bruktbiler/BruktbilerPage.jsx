import React from "react";
import Iframe from "react-iframe";
import ImageHeader from "../common/ImageHeader";
import MarginLayout from "../common/MarginLayout";

const BruktbilerPage = () => {
  return (
    <>
      <div className="main-container">
        <ImageHeader
          header="BRUKTBILER"
          image="https://lh3.googleusercontent.com/pw/AM-JKLXkjgsEYLg90-Z-pOOy9qNuM5ueRcZR8ngiokKKXDX7pYtpY15QM4xaLQ3UkOwfm7M89T4XL6gap34RzEHuKjuyxgWTYf0_DuaTP1sQi4pe-RHQzpO2QVEdOjTpfDsbMecRW0so_KhDoStgQ2TuUdMD=w1365-h768-no?authuser=0"
        />
        <MarginLayout>
          <div className="container">
            <div className="iframe-container">
              <h1 className="header">Våre bruktbiler</h1>
              <Iframe
                url="https://www.finn.no/pw/search/car-norway?orgId=1180510454"
                id="myId"
                width="100%"
                height="100%"
                className="i-frame"
                display="initial"
                position="relative"
                frameBorder="0"
              />
            </div>
            <div className="text-container">
              <h1 className="header">Kjøpe bruktbil?</h1>
              <p className="text">
                Flisa Bil har drevet bilsalg siden 1985. Vi har biler i alle
                prisklasser og selges med garanti med mindre noe annet er
                tydelig opplyst.
              </p>
              <p className="text">
                Vi er godkjent som autoreg forhandler av Statens Vegevesen,
                dette gjør at vi kan omregistrere og levere biler umiddelbart.
              </p>
              <p className="text">
                Vi er fleksible, serviceinnstilte og kan være behjelpelige med
                «alt» i forbindelse med ditt bilkjøp. Finansiering, forsikring,
                innbytte, verkstedtjenester, ruteskift, soting, dekkhotell,
                frakt av bil, takstativ, skibokser og annet ekstrautstyr til
                bilen.
              </p>
              <p className="text">
                Vi har for det meste mange flere biler enn de som er annonsert,
                vi rekker ikke alltid å legge ut. Har du et spesielt ønske så ta
                kontakt.
              </p>
            </div>
          </div>
        </MarginLayout>
      </div>
      <style jsx>{`
        .container {
          min-height: 100vh;
        }
        .header {
          margin: 5rem 0;
        }
        .main-container {
          grid-area: content;
        }
        .iframe-container {
          width: 100%;
          height: 70vh;
          margin-bottom: 10rem;
        }

        .text-container {
          grid-area: tx;
        }
        @media screen and (max-width: 2100px) {
          .container {
            grid-template-columns: 12rem 1fr 1fr 12rem;
          }
        }
        @media screen and (max-width: 1740px) {
          .container {
            grid-template-columns: 8rem 1fr 1fr 8rem;
          }
        }
        @media screen and (max-width: 1500px) {
          .container {
            grid-template-columns: 4rem 1fr 1fr 4rem;
          }
        }
        @media screen and (max-width: 1200px) {
          .container {
            grid-template-columns: 1rem 1fr 1fr 1rem;
          }
        }
        @media screen and (max-width: 1000px) {
          .container {
            grid-template-columns: 1rem 1fr 1fr 1rem;
            grid-template-rows: 80rem auto;
            grid-column-gap: 0;
            grid-template-areas:
              ". fr fr ."
              ". tx tx .";
          }
          .text-container {
            margin-top: -5rem;
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </>
  );
};

export default BruktbilerPage;
