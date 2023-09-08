import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";

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
    <div style={{ backgroundColor: "#D6EFF5" }}>
      <Navbar
        fluid
        rounded
        className="px-4"
        style={{ backgroundColor: "#D6EFF5" }}
      >
        <Navbar.Brand href="/">
          {/* <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
        /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
            Molespec
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 ">
          <Button
            style={{ backgroundColor: "#3296BC" }}
            className="font-bold"
            onClick={() => {
              navigate("/");
            }}
          >
            Get started
          </Button>
          {/* <Navbar.Toggle /> */}
        </div>
        {/* <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
}
