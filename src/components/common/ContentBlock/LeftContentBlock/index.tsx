import React from "react";

const LeftContentBlock = ({ imageSrc, title, children }) => {
  return (
    <section className="mx-8 my-4 sm:mx-12 sm:my-12 md:mx-4 xl:mx-4 xl:my-12 2xl:my-20 md:xl-0 relative flex flex-wrap items-center mt-[6%]">
      <div className="w-full md:w-3/5 lg:w-1/2 md:px-4 md:pr-8 xl:pl-16">
        <h1 className="text-4xl sm:text-6xl xl:text-8xl md:mb-16 xl:ml-16 leading-loose underline">
          {title}
        </h1>
        <div className="visible md:hidden mt-4 mb-8 sm:my-12 w-full flex items-center justify-center">
          <img src={imageSrc} alt="Content Image" />
        </div>
        {children}
      </div>
      <div className="xs:hidden md:visible w-full flex items-center justify-center md:w-2/5 lg:w-1/2 xl:pr-32 xl:pl-12">
        <img src={imageSrc} alt="Content Image" />
      </div>
    </section>
  );
};

export default LeftContentBlock;
