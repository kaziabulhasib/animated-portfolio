import React from "react";
import skills from "@/data/skills.json";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";

const Skills = () => {
  return (
    <SectionContainer id='skills'>
      <div className='section-contents mx-[22px] md:mx-[116px]'>
        <SectionHeader plainText='💻 this is my' highlightText='Tech Stack' />
        <div className='card'></div>
      </div>
    </SectionContainer>
  );
};

export default Skills;
