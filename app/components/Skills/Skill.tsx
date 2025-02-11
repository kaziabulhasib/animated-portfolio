import React from "react";

type Props = {
  name: string;
  icon: string;
};

const Skill = ({ name, icon }: Props) => {
  return (
    <div className='relative flex gap-2 p-2 border border-primary rounded-lg h-[46px]'>
      <img src={icon} alt={`${name} icon`} />
      <p className='text-lg'>{name}</p>
    </div>
  );
};

export default Skill;
