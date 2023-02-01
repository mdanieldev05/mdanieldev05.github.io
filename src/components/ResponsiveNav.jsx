import React from "react";
import NavLinks from './NavLinks'

const ResponsiveNav = ({ setActiveNav, activeNav }) => {

  return (
    <div className={activeNav ? 'nav-menu nav-active': 'nav-menu'} onClick={()=>{setActiveNav(false)}}>
        <div className='nav-menu-links'>
            <NavLinks />
        </div>
    </div>
  );
};

export default ResponsiveNav;
