import React from "react";

const RightContentBlock = ({ imageSrc, title, children }) => {
  return (
    <section className="mx-4 my-4 xl:mx-4 xl:my-8 2xl:my-20 md:mx-4 relative flex flex-wrap items-center mt-[6%]">
      <div className="w-full flex items-center justify-center md:w-2/5 lg:w-1/2 xl:pl-32 xl:pr-12">
        <img src={imageSrc} alt="Content Image" />
      </div>
      <div className="w-full md:w-3/5 lg:w-1/2 px-4 md:pl-8 xl:pr-32">
        <h1 className="text-4xl sm:text-6xl xl:text-8xl md:mb-16 xl:mr-16 leading-loose underline">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
};

export default RightContentBlock;
