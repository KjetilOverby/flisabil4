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
        <ImageHeader
          header="OM OSS"
          image="https://lh3.googleusercontent.com/pw/AM-JKLVWb_83Y1DkDStYPwRRppAoYYRzxMfzumdp1Xht0g1hf3Qgm69t-iJdEPGN86cluMwttjNmTnCzoW69ZbhulANdAwYlHE65TaFxXPmOkbT7m1Zo2Q7SiVKeRgUTp01ZUZOClecq9u349KHQrwWey5Cu=w1920-h697-no?authuser=0"
        />
        <MarginLayout>
          <h1 className="global-header header">Kort om oss</h1>
          <Column2Layout>
            <Image src={insidecar3} layout="responsive" />

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
            <Image src={insidecar2} layout="responsive" />
          </Column2Layout>
        </MarginLayout>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: content;
            margin-bottom: 5rem;
          }
          .header {
            margin-bottom: 3rem;
            margin-top: 3rem;
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
