import React, { useState, useEffect } from "react";
import NavbarItems from "./navbar-items.component";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScrollPosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);

  const width = `${
    (scrollPosition /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100
  }%`;

  return (
    <div className="fixed top-6 z-100 w-full desktop:block">
      <div className="m-auto flex h-full max-w-[40%] flex-col px-5 tablet:px-22px desktop:px-11  justify-start">
        <div className="relative flex justify-between rounded-lg bg-white bg-opacity-[0.08] before:absolute before:-z-10 before:h-full before:w-full before:backdrop-blur-[5px]">
          <div className="relative flex flex-1 px-4">
            <div
              className={`absolute top-0 left-0 h-full rounded-l-lg transition-all duration-75 ${
                scrollPosition ===
                document.documentElement.scrollHeight - window.innerHeight
                  ? ""
                  : "rounded-r-lg"
              }  bg-white bg-opacity-[0.24]`}
              style={{ width: width }}
            ></div>
            <a href="https://massa.net/" className="relative">
              <img
                src="/assets/images/logo_massa.webp"
                alt="logo"
                className="my-2 w-full h-[40px]"
              />
            </a>
            <NavbarItems />
          </div>
          <a
            href="https://massa.net/testnet"
            className="flex cursor-pointer items-center rounded-r-lg bg-white bg-[size:400%] px-4 hover:animate-gradient hover:bg-[linear-gradient(to_right,_#BDD0FD_0%,_#FFFFFF_100%)]"
          >
            <p className="relative font-medium text-base text-gray.100">
              Explorer
            </p>
            <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-md border-2 border-gray.100 border-opacity-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
