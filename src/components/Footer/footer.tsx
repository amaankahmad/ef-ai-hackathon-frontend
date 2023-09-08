import React from "react";
import LinkedIn from "../../assets/icons/LinkedIn.png";
import Twitter from "../../assets/icons/Twitter.png";
import Mail from "../../assets/icons/Mail.png";

const Footer = () => {
  return (
    <footer
      className="relative flex flex-wrap items-center mt-[6%] md:py-4 py-[4%] lg:py-8 xl:px-32"
      style={{ backgroundColor: "#E7DFD5" }}
    >
      <div
        className="w-full md:w-1/2 xl:w-2/3 px-4 lg:px-8 xl:px-0"
        id="contact-section"
      >
        <h2
          className="text-4xl md:text-6xl xl:text-8xl mb-4 md:mt-4 md:mb-16 xl:ml-0 leading-loose underline"
          style={{ color: "#121113" }}
        >
          contact
        </h2>
        <p
          className="sm:text-xl md:text-2xl xl:pl-0 mb-8 xl:pr-12"
          style={{ color: "#121113" }}
        >
          feel free to contact me using any of the socials on the right! i’m
          particularly interested in talking to people about education,
          healthcare, ai, bci + looking into the history of movements.
        </p>
      </div>
      <div
        className="w-full md:w-1/2 xl:w-1/3 px-4 md:pt-20 lg:pt-24 md:pl-8 lg:pl-16 md:h-[50px] flex md:items-end md:pr-8 md:border-t-0 md:justify-end"
        style={{ borderColor: "#121113" }}
      >
        <ul className="flex flex-col justify-center xs:pb-4 h-full text-[#121113]">
          <li className="mb-4">
            <a
              href="https://www.linkedin.com/in/amaankahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center sm:text-xl md:text-2xl"
              style={{ color: "#121113" }}
            >
              <img
                src={LinkedIn}
                alt="linkedin"
                className="md:h-8 md:w-8 mr-4"
              />{" "}
              linkedin.com/in/amaankahmad
            </a>
          </li>
          <li className="mb-4">
            <a
              href="https://twitter.com/amaankahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center sm:text-xl md:text-2xl"
              style={{ color: "#121113" }}
            >
              <img src={Twitter} alt="twitter" className="md:h-8 md:w-8 mr-4" />{" "}
              twitter.com/amaankahmad
            </a>
          </li>
          <li>
            <a
              href="mailto:amaankahmad@gmail.com"
              className="flex items-center sm:text-xl md:text-2xl"
              style={{ color: "#121113" }}
            >
              <img src={Mail} alt="email" className="md:h-8 md:w-8 mr-4" />{" "}
              amaankahmad@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
