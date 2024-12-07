import React from "react";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";

const Sections = () => {
  return (
    <main
      className='flex flex-col gap-[142px] w-full md:max-w-screen-lg 
    pt-[236px] md:pt-[60px] mx-auto'>
      <Hero />
      <Skills />
    </main>
  );
};

export default Sections;
