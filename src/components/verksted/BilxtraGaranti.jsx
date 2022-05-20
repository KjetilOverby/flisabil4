import React from "react";
import Column2Layout from "../common/Column2Layout";
import Image from "next/image";
import spareparts from "../../../assets/verksted/spareparts.jpg";

const BilxtraGaranti = () => {
  return (
    <>
      <h1 className="global-header header">
        5 års garanti på alle reservedeler
      </h1>
      <Column2Layout>
        <div>
          <Image src={spareparts} />
        </div>
        <div>
          <p className="text">
            Som et element til kundenes trygghet i valg av verksted, innfører
            BilXtra 5 års garanti/100 000 km på reservedeler som benyttes ved
            våre verksteder. Garantien er gjeldene fra 01.01.2011 og forutsetter
            at bilen følger bilfabrikantens service - og vedlikeholdsprogram hos
            BilXtra eller andre offentlig godkjente verksteder.
          </p>
          <a className="text" href="https://bilxtraverksted.no/delegaranti">
            Les mer om Les mer om delegaranti
          </a>
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

export default BilxtraGaranti;
