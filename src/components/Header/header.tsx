import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import LinkedIn from "../../assets/icons/LinkedIn.png";
import Twitter from "../../assets/icons/Twitter.png";
import Mail from "../../assets/icons/Mail.png";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  active: string;
  window?: () => Window;
}

export default function DrawerAppBar(props: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.slice(1);
        scrollTo(id);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleNavigationClick = (id: string) => {
    console.log(location.pathname);
    if (location.pathname === "/") {
      scrollTo(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <div>
      <header>
        <nav className="bg-[#E7DFD5] px-4 lg:px-6 pt-6 py-4">
          <div className="flex flex-wrap justify-between items-center max-w-screen">
            <a href="https://amaankahmad.com" className="flex items-center">
              <span className="text-[#121113] font-black text-2xl">
                amaankahmad
              </span>
            </a>
            <div className="flex items-center md:order-2 ">
              <a
                className="flex items-center px-2"
                href="https://www.linkedin.com/in/amaankahmad/"
              >
                <img src={LinkedIn} alt="linkedin" />
              </a>
              <a
                className="flex items-center px-2"
                href="https://www.twitter.com/amaankahmad/"
              >
                <img src={Twitter} alt="twitter" />
              </a>
              <a
                className="flex items-center px-2"
                href="mailto:amaankahmad@gmail.com"
              >
                <img src={Mail} alt="email" />
              </a>
            </div>
            <div
              className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-bold md:flex-row md:space-x-2 lg:space-x-8 md:mt-0">
                <li>
                  <button
                    onClick={() => handleNavigationClick("about-me-section")}
                    className="block py-2 pr-4 pl-3 text-[#121113] hover:underline hover:font-bold focus:outline-none"
                  >
                    about me
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigationClick("pathfinder-section")}
                    className="block py-2 pr-4 pl-3 text-[#121113] hover:underline hover:font-bold focus:outline-none"
                  >
                    pathfinder
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigationClick("podcast-section")}
                    className="block py-2 pr-4 pl-3 text-[#121113] hover:underline hover:font-bold focus:outline-none"
                  >
                    podcast
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigationClick("writing-section")}
                    className="block py-2 pr-4 pl-3 text-[#121113] hover:underline hover:font-bold focus:outline-none"
                  >
                    writing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("contact-section")}
                    className="block py-2 pr-4 pl-3 text-[#121113] hover:underline hover:font-bold focus:outline-none"
                  >
                    contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
