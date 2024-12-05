import Image from "next/image";
import React from "react";

function TopBackground() {
  return (
    <>
      <div className='absolute w-full max-w-[360px] md:max-w-screen-lg h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 md:overflow-x-hidden z-10'>
        <div className='w-full h-full relative'>
          <div className='circle-icon top-0 md:top-28 left-[171px] md:left-[72px]'>
            <Image
              src='/rocket_icon.svg'
              alt='rocket icon'
              height={23}
              width={23}
            />
          </div>
          <div className='circle-icon top-[162px] md:top-64 -left-5 md:left-0'>
            <Image
              src='bracket_icon.svg'
              alt='bracket icon'
              height={23}
              width={23}
            />
          </div>
          <div className='circle-icon top-60 md:top-[570px] left-[149px] md:left-44'>
            <Image
              src='/github_icon.svg'
              alt='github icon'
              height={23}
              width={23}
            />
          </div>
          <div className='hidden md:circle-icon  md:top-[590px] md:left-[608px]'>
            <Image
              src='/electricity_icon.svg'
              alt='electricity icon'
              height={23}
              width={23}
            />
          </div>
          <div className='hidden md:circle-icon  md:top-[158px] md:left-[608px]'>
            <Image
              src='/merge_icon.svg'
              alt='merge icon'
              height={23}
              width={23}
            />
          </div>
          <div className='hidden md:circle-icon  md:top-[368px] md:left-[965px]'>
            <Image
              src='/stack_icon.svg'
              alt='stack icon'
              height={23}
              width={23}
            />
          </div>
        </div>
      </div>
      <Image
        src='top_highlight.svg'
        alt='top highlight '
        height={809}
        width={877}
        className='absolute top-[-515px] hidden dark:md:block left-1/2 -translate-x-1/2'
      />
      <Image
        src='/top_highlight_mobile.svg'
        alt='top highlight mobile'
        height={429}
        width={465}
        className='absolute top-[-229px] hidden dark:block dark:md:hidden left-1/2 -translate-x-1/2'
      />
    </>
  );
}

export default TopBackground;
