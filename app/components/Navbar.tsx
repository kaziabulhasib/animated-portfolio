import React from "react";

const NavBar = () => {
  return (
    <div>
      <button className='bg-background card-shadow p-3 md:hidden rounded'>
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
    </div>
  );
};

export default NavBar;
