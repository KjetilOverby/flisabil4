import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { IoMenuSharp } from "react-icons/io5";
import Image from "next/image";
import logo from "../../../assets/flisabil.png";
import Link from "next/link";

const HeaderComponent = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  const openSidebarHandler = () => {
    setHideSidebar(true);
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <div className="container">
        <div className="logoContainer">
          <Image src={logo} />
        </div>
        <div className="tabContainer">
          {isMobile ? (
            <>
              <IoMenuSharp
                onClick={openSidebarHandler}
                className="drawerIcon"
                style={{ fontSize: "2rem" }}
              />
              {hideSidebar && (
                <div
                  className={`sidebar-container ${
                    openSidebar ? "sidebar-open" : "sidebar-close"
                  }`}
                >
                  <Link href="/">
                    <p className="tabs-mobile">Hjem</p>
                  </Link>
                  <Link href="/bruktbiler">
                    <p className="tabs-mobile">Bruktbiler</p>
                  </Link>
                  <Link href="/verksted">
                    <p className="tabs-mobile">Verksted</p>
                  </Link>
                  <Link href="https://bilxtra.no/">
                    <p className="tabs-mobile">Bilxtra</p>
                  </Link>
                  <Link href="/kontakt">
                    <p className="tabs-mobile">Kontakt Oss</p>
                  </Link>
                </div>
              )}
              {openSidebar && (
                <div
                  onClick={openSidebarHandler}
                  style={{
                    background: "rgba(256,256,256,.0)",
                    height: "100vh",
                    width: "100vw",
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                ></div>
              )}
            </>
          ) : (
            <>
              <Link href="/">
                <p className="tabs">Hjem</p>
              </Link>
              <Link href="/bruktbiler">
                <p className="tabs">Bruktbiler</p>
              </Link>
              <Link href="/verksted">
                <p className="tabs">Verksted</p>
              </Link>
              <Link href="https://bilxtra.no/">
                <p className="tabs">Bilxtra</p>
              </Link>
              <Link href="/kontakt">
                <p className="tabs">Kontakt Oss</p>
              </Link>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .container {
          height: 6rem;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5rem;
          position: fixed;
          width: 100%;
          grid-area: head;
          z-index: 100;
          grid-area: header;
        }
        .logoContainer {
          height: 3rem;
          width: 13.5rem;
          position: relative;
        }
        .sidebar-container {
          position: absolute;
          background-color: #fff;
          left: 0;
          width: 10rem;
          height: 80vh;
          top: 6rem;
          padding-left: 1rem;
          left: -10rem;
          z-index: 10;
        }
        .sidebar-open {
          animation: slide 0.3s forwards;
        }
        .sidebar-close {
          animation: slideClose 0.5s forwards;
        }
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(10rem);
          }
        }
        @keyframes slideClose {
          0% {
            transform: translateX(10rem);
          }
          100% {
            transform: translateX(-10rem);
          }
        }
        .tabs {
          text-transform: uppercase;
          transition: 0.5s;
        }
        .tabs-mobile {
          text-transform: uppercase;
          font-size: 1.3rem;
        }
        .tabs:hover {
          cursor: pointer;
          color: #747474;
        }
        .tabContainer {
          width: 40rem;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        @media screen and (max-width: 1150px) {
          .tabContainer {
            width: 35rem;
          }
        }
        @media screen and (max-width: 1000px) {
          .container {
            padding: 0 1rem;
          }
          .tabContainer {
            justify-content: flex-end;
          }
        }

        @media screen and (max-width: 650px) {
          .logoContainer {
            width: 40rem;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderComponent;
