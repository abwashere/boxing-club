'use client';
import { useState } from 'react';
import classNames from 'classnames';

import Burger from '@/components/Icons/Burger';
import HeaderLogo from './components/HeaderLogo';
import Nav from './components/Nav';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header
      className={classNames(
        'flex flex-row-reverse justify-between items-start',
        'tablet:flex-row tablet:items-center',
        'py-2 tablet:py-8 px-1 tablet:px-4 laptop:px-8 desktop:px-32',
        'bg-transparent shadow-sm text-sm',
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
