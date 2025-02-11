import Image from "next/image";
import React from "react";

function TopBackground() {
  return (
    <>
      <div className='absolute w-full max-w-[360px] md:max-w-screen-lg h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 md:overflow-x-hidden z-10'>
        <div className='w-full h-full relative'>
          <div className='circle-icon top-0 md:top-28 left-[171px] md:left-[72px]'>
            <div>
              <Image
                src='/rocket_icon.svg'
                alt='rocket icon'
                height={23}
                width={23}
              />
            </div>
          </div>
          <div className='circle-icon top-[162px] md:top-64 -left-5 md:left-0'>
            <div>
              <Image
                src='/bracket_icon.svg'
                alt='bracket icon'
                height={23}
                width={23}
              />
            </div>
          </div>
          <div className='circle-icon top-60 md:top-[570px] left-[149px] md:left-44'>
            <div>
              <Image
                src='/github_icon.svg'
                alt='github icon'
                height={23}
                width={23}
              />
            </div>
          </div>
          <div className='hidden md:circle-icon  md:top-[590px] md:left-[608px]'>
            <div>
              <Image
                src='/electricity_icon.svg'
                alt='electricity icon'
                height={23}
                width={23}
              />
            </div>
          </div>
          <div className='hidden md:circle-icon  md:top-[158px] md:left-[608px]'>
            <div>
              <Image
                src='/merge_icon.svg'
                alt='merge icon'
                height={23}
                width={23}
              />
            </div>
          </div>
          <div className='hidden md:circle-icon  md:top-[368px] md:left-[965px]'>
            <div>
              <Image
                src='/stack_icon.svg'
                alt='stack icon'
                height={23}
                width={23}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src='top_highlight.svg'
          alt='top highlight'
          height={809}
          width={877}
          className='absolute top-[-515px] hidden dark:md:block left-1/2 -translate-x-1/2'
        />
      </div>
      <div>
        <Image
          src='/top_highlight_mobile.svg'
          alt='top highlight mobile'
          height={429}
          width={465}
          className='absolute top-[-229px] hidden dark:block dark:md:hidden left-1/2 -translate-x-1/2'
        />
      </div>
      <div className='absolute top-0 w-full h-[795px] bg-repeat-x bg-[url("/top_bg_light.svg")] bg-[auto_auto] hidden dark:hidden md:block'></div>
      <div className='absolute top-0 w-full h-[795px] bg-repeat-x bg-[url("/top_bg_light.svg")] bg-[auto_auto] dark:hidden md:hidden'></div>
      <div className='absolute top-0 w-full h-[795px] bg-repeat-x bg-[url("/top_bg_dark.svg")] bg-[auto_auto] hidden md:dark:block'></div>
      <div className='absolute top-0 w-full h-[795px] bg-repeat-x bg-[url("/top_bg_mobile_dark.svg")] bg-[auto_auto] hidden dark:block dark:md:hidden'></div>
    </>
  );
}

export default TopBackground;
