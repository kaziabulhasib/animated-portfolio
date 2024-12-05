import React from "react";
import cn from "classnames";

const NavItem = ({
  label,
  section,
  activeSection,
  setActiveSection,
  scrollToSection,
  setIsOpen,
}) => {
  return (
    <li>
      <div
        className={cn("rounded p-1", {
          "bg-primary text-white": activeSection === section,
        })}
        onClick={() => {
          setActiveSection(section);
          scrollToSection(section);
          setIsOpen(false);
        }}>
        {label}
      </div>
    </li>
  );
};

export default NavItem;
