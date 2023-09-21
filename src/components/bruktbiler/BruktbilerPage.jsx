import React from "react";
import Iframe from "react-iframe";
import ImageHeader from "../common/ImageHeader";
import MarginLayout from "../common/MarginLayout";

const BruktbilerPage = () => {
  return (
    <>
      <div className="main-container">
        {/* <ImageHeader
          header="BRUKTBILER"
          image="https://lh3.googleusercontent.com/pw/AM-JKLXkjgsEYLg90-Z-pOOy9qNuM5ueRcZR8ngiokKKXDX7pYtpY15QM4xaLQ3UkOwfm7M89T4XL6gap34RzEHuKjuyxgWTYf0_DuaTP1sQi4pe-RHQzpO2QVEdOjTpfDsbMecRW0so_KhDoStgQ2TuUdMD=w1365-h768-no?authuser=0"
        /> */}

        <div className="container">
          <div className="iframe-container">
            {/* <h1 className="global-header header">Våre bruktbiler</h1> */}
            {/* <Iframe
                url="https://www.finn.no/pw/search/car-norway?orgId=1180510454"
                id="myId"
                width="100%"
                height="100%"
                className="i-frame"
                display="initial"
                position="relative"
                frameBorder="0"
              /> */}
            <iframe
              src="https://billink.no/page2_iframe.php?butikk=flisa&nytt_vindu=1"
              width="100%"
              height="1500"
              scrolling="auto"
              align="middle"></iframe>
          </div>
          {/* <div className="text-container">
              <h1 className="global-header header">Kjøpe bruktbil?</h1>
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
            </div> */}
        </div>
      </div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding-top: 6rem;
        }
        .header {
          margin: 3rem 0;
        }
        .main-container {
          grid-area: content;
        }
        .iframe-container {
          width: 100%;
          height: auto;
          margin-bottom: 3rem;
        }

        .text-container {
          margin: 0 6rem 3rem 6rem;
        }
        @media screen and (max-width: 2100px) {
        }
        @media screen and (max-width: 1740px) {
        }
        @media screen and (max-width: 1500px) {
        }
        @media screen and (max-width: 1000px) {
          .text-container {
            margin: 0 8rem 10rem 0;
          }
        }
        @media screen and (max-width: 756px) {
          .text-container {
            margin-top: -11rem;
            margin-bottom: 3rem;
          }
          .iframe-container {
            margin-bottom: 15rem;
          }
          .header {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default BruktbilerPage;
