'use client';
import classNames from 'classnames';
import { useState } from 'react';

import Burger from '@/components/Icons/Burger';
import HeaderLogo from './components/HeaderLogo';
import Nav from './components/Nav';

type Props = {
  isHomePageHeader?: boolean;
};

const Header = ({ isHomePageHeader }: Props) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header
      className={classNames(
        'flex flex-row-reverse justify-between items-start',
        'tablet:flex-row tablet:items-center',
        'py-2 tablet:py-8 px-1 tablet:px-4 laptop:px-8 desktop:px-32',
        'text-sm',
        { 'absolute top-0 z-20 w-full !bg-transparent': isHomePageHeader },
        { relative: !isHomePageHeader },
      )}
    >
      <HeaderLogo />
      <nav
        className={classNames(
          'drop-shadow-2xl pb-12',
          {
            'absolute tablet:static top-0 left-0 z-20 bg-gray-dark bg-opacity-80 backdrop-blur-sm p-2 rounded min-w-[50vw]':
              isMobileNavOpen,
          },
          { 'bg-opacity-50': isHomePageHeader },
        )}
      >
        <div
          className={classNames('-mt-2 tablet:hidden text-yellow', {
            'mb-6 -ml-1': isMobileNavOpen,
          })}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <Burger />
        </div>
        {/* TODO: transition top to bottom */}
        <div
          className={classNames({ hidden: !isMobileNavOpen }, 'tablet:block')}
        >
          <Nav closeMobileNav={() => setIsMobileNavOpen(false)} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
