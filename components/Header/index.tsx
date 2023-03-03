'use client';
import { useState } from 'react';

import Burger from '@/components/Burger';
import classNames from 'classnames';
import HeaderLogo from './HeaderLogo';
import Menu from './Menu';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header
      className={classNames(
        'flex flex-row-reverse justify-between items-start px-4 py-2 text-sm tablet:flex-row tablet:items-center bg-gray-dark text-gray-light',
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
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
