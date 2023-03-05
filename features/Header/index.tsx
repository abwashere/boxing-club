'use client';
import { useState } from 'react';
import classNames from 'classnames';

import Burger from '@/components/Burger';
import HeaderLogo from './components/HeaderLogo';
import Nav from './components/Nav';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header
      className={classNames(
        'flex flex-row-reverse justify-between items-start px-4 py-2',
        'tablet:flex-row tablet:items-center',
        'bg-gray-dark text-gray-light text-sm',
      )}
    >
      <HeaderLogo />
      <nav>
        <div
          className={classNames('-ml-1 -mt-1 tablet:hidden', {
            'mb-6': isMobileNavOpen,
          })}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <Burger />
        </div>
        {/* TODO: transition top to bottom */}
        <div
          className={classNames({ hidden: !isMobileNavOpen }, 'tablet:block')}
        >
          <Nav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
