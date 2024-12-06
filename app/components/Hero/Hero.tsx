import React from "react";

const Hero = () => {
  return (
    <section className='relative flex flex-row items-center z-20 mx-auto'>
      <div className='flex flex-col gap-[13px]'>
        <h1 className='text-2xl/1 text-center font-semibold block'>
          <span className='-ml-3'>👋 Hello I'm Kazi Abu Hasib,I'm a {""}</span>
          <span className='block text-[27px] highlight mt-2'>
            Web developer
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
