"use client";
import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import NavItem from "./NavItem";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    setActiveSection("home");
  }, []);

  // const scrollToSection = useCallback((sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // }, []);
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100; // Adjust based on your navbar height
      const position = section.offsetTop - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <div className='fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50 md:right-auto md:left-1/2 md:-translate-x-1/2'>
      <button
        className='bg-background card-shadow p-3 md:hidden rounded'
        onClick={() => setIsOpen((preVal) => !preVal)}>
        <img
          className='block dark:hidden'
          src='/menu_icon_light.svg'
          alt='menu icon'
        />
        <img
          className='dark:block hidden'
          src='/menu_icon_dark.svg'
          alt='menu icon'
        />
      </button>
      <nav
        className={cn(
          "bg-background card-shadow p-3 rounded md:block duration-300 ease-in-out",
          {
            "opacity-100": isOpen,
            "opacity-0 md:opacity-100": !isOpen,
          }
        )}>
        <ul className='flex flex-col md:flex-row items-center  gap-4 text-lg font-normal'>
          <NavItem
            label='home'
            section='home'
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            setIsOpen={setIsOpen}
            scrollToSection={scrollToSection}
          />

          <NavItem
            label='Skills'
            section='skills'
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            setIsOpen={setIsOpen}
            scrollToSection={scrollToSection}
          />

          <NavItem
            label='projects'
            section='projects'
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            setIsOpen={setIsOpen}
            scrollToSection={scrollToSection}
          />

          <NavItem
            label='Contact Me'
            section='contact'
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            setIsOpen={setIsOpen}
            scrollToSection={scrollToSection}
          />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
