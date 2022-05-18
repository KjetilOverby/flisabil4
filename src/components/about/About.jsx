import React from "react";
import Column2Layout from "../common/Column2Layout";
import MarginLayout from "../common/MarginLayout";
import insidecar3 from "../../../assets/insidecar3.jpg";
import insidecar2 from "../../../assets/insidecar2.jpg";
import Image from "next/image";
import ImageHeader from "../common/ImageHeader";

const About = () => {
  return (
    <>
      <div className="container">
        <ImageHeader image="https://flisabil4.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Finsidecar3.f529961013732f1ea833a57a7219e0e2.jpg&w=1920&q=75" />
        <MarginLayout>
          <h1 className="global-header header">Kort om oss</h1>
          <Column2Layout>
            <Image src={insidecar3} />
            <p className="text">
              Flisa Bil har drevet bilsalg siden 1985. Vi har solgt/kjøpt biler
              i alle prisklasser siden den gang. Mest til kunder her i
              distriktet men også mer og mer over hele norge. Spesielt
              etterhvert som nettet har blitt mer og mer utnyttet. Avstanden er
              ikke lenger noe problem om du bor i Kirkenes eller Stavanger. Vår
              gunstige beliggenhet 1,5 time fra Oslo Gardermoen, og videre med
              gode bussforbindelser. Eller til Elverum med tog, og buss videre
              en snau time, gjør at det er enkelt å hente bil hos oss.
            </p>
          </Column2Layout>
          <br style={{ marginBottom: "5rem" }} />
          <Column2Layout>
            <div>
              <p className="text">
                Etter så mange år i bransjen, er det med god følelse å mene at
                det er trygt å kjøpe brukt bil fra oss. Vi har lang erfaring og
                ordner alt i forbindelse med registrering av din nye brukt bil.
                Vi tar gjerne innbytte også i eventuelt dyrere bil, eller at vi
                kjøper din.
              </p>
              <br />
              <p className="text">
                Gunstig finansiering får du hos oss, som godkjent autoreg
                forhandler av Statens vegvesen kan bilen leveres med skilter
                umiddelbart.
              </p>
            </div>
            <Image src={insidecar2} />
          </Column2Layout>
        </MarginLayout>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: content;
          }
          .header {
            margin-bottom: 3rem;
          }
          .text {
            font-size: 1.2rem;
          }
        `}
      </style>
    </>
  );
};

export default About;
