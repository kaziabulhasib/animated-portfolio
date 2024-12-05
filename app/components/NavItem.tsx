import React from "react";
import cn from "classnames";

interface NavItemProps {
  label: string;
  section: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollToSection: (section: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const NavItem: React.FC<NavItemProps> = ({
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
