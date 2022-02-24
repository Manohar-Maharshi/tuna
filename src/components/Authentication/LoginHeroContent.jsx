import React from "react";

function HeroContent() {
  return (
    <div className='md:mr-10 self-start'>
      <h1 className='leading-normal md:leading-snug font-extrabold text-4xl sm:text-5xl md:text-6xl lg:7xl tracking-tight text-left'>
        Experience Digital Classroom with{" "}
        <span className='block text-info-content'>Tuna</span>
      </h1>
      <p className='font-bold text-left text-secondary-focus text-xl md:text-2xl py-5'>
        A utility-first CSS framework packed with classes like flex, pt-4,
        text-center and rotate-90 that can be composed to build any design,
        directly in your markup.
      </p>
    </div>
  );
}

export default HeroContent;
