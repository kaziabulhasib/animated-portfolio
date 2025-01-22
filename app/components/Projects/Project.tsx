import Image from "next/image";
import React from "react";

type Props = {
  thumbnail: string;
  title: string;
  link: {
    url: string;
    label: string;
  };
  description: string;
  languageIcons: string[];
};

function Project({
  thumbnail,
  title,
  link,
  description,
  languageIcons,
}: Props) {
  return (
    <div className='card flex flex-col  items-stretch w-full max-w-[428.4px] p-5 md:p-[18px] gap-[30px]'>
      <Image
        src={thumbnail}
        alt={`Thumbnail for ${title}`}
        width={392}
        height={230}
        className='w-full h-[230px] object-cover'
      />
      <div className='flex flex-col gap-[11px]'>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold text-xl md:text-[22px]'>{title}</h3>
          <a
            href={link.url}
            className='flex px-[5px] py-[3px] gap-1 bg-[#b9b9b9] bg-opacity-[24%] rounded text-sm'>
            <span className='hidden md:block'>{link.label}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
