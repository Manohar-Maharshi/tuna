import React from "react";

function HomeHeroContent() {
  return (
    <main className='w-full flex items-center justify-center max-w-5xl'>
      <div className='text-left'>
        <h1 className='leading-normal md:leading-snug font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight'>
          Experience Digital Classroom with{" "}
          <span className='block text-info-content'>Tuna</span>
        </h1>
        <p className='font-bold text-secondary-focus text-xl md:text-2xl py-5'>
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup.
        </p>
      </div>
    </main>
  );
}

export default HomeHeroContent;
