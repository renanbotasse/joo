import React from 'react';

// images
import Logo from '../assets/logo.ico';

import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          {/* button */}
          <button className='btn btn-sm'>
          <Link
          to='contact'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          Contato
        </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
