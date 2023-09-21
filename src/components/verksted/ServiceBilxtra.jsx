import React from "react";
import Column2Layout from "../common/Column2Layout";
import Image from "next/image";

import service from "../../../assets/verksted/service.jpg";

const ServiceBilxtra = () => {
  return (
    <>
      <h1 className="global-header header">Service med mobilitetsgaranti</h1>
      <Column2Layout>
        <div>
          <p className="text">
            Hos BilXtra verksted får du 12 måneders Mobilitetsgaranti med på
            kjøpet, hvis du bestiller BilXtra – service med Mobilitetsgaranti,
            eller service ut fra bilens servicehefte. Med BilXtra
            Mobilitetsgaranti får du hjelp uansett tid og sted i hele Norden i
            et helt år. Ved å utføre service hos BilXtra verksted, vil
            Mobilitetsgarantien fornyes med 12 måneder og gi deg ekstra
            trygghet.
          </p>
          <a
            className="text"
            href="https://bilxtraverksted.no/mobilitetsgaranti">
            Les mer om mobilitetsgaranti
          </a>
        </div>
        <div>
          <Image src={service} layout="responsive" />
        </div>
      </Column2Layout>
      <style jsx>
        {`
          .container {
          }
          .header {
            margin: 8rem 0 3rem 0;
          }
        `}
      </style>
    </>
  );
};

export default ServiceBilxtra;
