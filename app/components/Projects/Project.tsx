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
      Project
    </div>
  );
}

export default Project;
