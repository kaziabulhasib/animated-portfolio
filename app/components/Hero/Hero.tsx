import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    // to do : remove the margin top property .
    <section className='relative flex flex-row items-center z-20 mx-auto md:gap-[37px] md:mx-10 mt-16 md:mt-28'>
      <div className='flex flex-col gap-[13px] md:gap[34px] md:gap-[58px] md:items-start'>
        <h1 className='text-2xl/1 text-center font-semibold block md:text-[40px] md:text-start md:inline'>
          <span className='-ml-3'>
            👋 Hello I&apos;m Kazi Abul Hasib,I&apos;m a {""}
          </span>
          <span className='block text-[27px] highlight mt-2 md:[45px] md:inline md:mt-0'>
            Web developer
          </span>
        </h1>
        <p className='text-center text-sm mx-6 md:text-[22px] md:text-start md:mx-0 '>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          sit quibusdam aperiam soluta ducimus ipsa?
        </p>
        <a
          href='mailto:hasibkazi420@gmail.com'
          className='self-center bg-primary text-white rounded flex gap-2.5 items-center text-sm md:self-center md:text-xl/6 p-2.5'>
          Let&apos;s connect{" "}
          <img src='arrow_right_icon.svg' alt='Arrow right icon' />
        </a>
      </div>
      <div className=''>
        <Image
          src='/profile_light_purple.png'
          alt='Light Pruple rectagle '
          width={372}
          height={430}
          className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10'
        />
        <Image
          src='/profile_dark_purple.png'
          alt='Light Pruple rectagle '
          width={372}
          height={430}
          className='hidden md:block w-[372px] h-[430px]  absolute right-0 -z-10  '
        />
        <Image
          src='/profile_picture.png'
          alt='Hasib kazi profile picture '
          width={357}
          height={417}
          className='hidden md:block min-w-[357px] h-[417px]  z-10 mr-[7.7px] my-[6.5px]'
        />
      </div>
    </section>
  );
};

export default Hero;
