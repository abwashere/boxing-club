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
        'sticky top-0 bg-gray-dark text-gray-light text-sm',
      )}
    >
      <div
        className={classNames(
          'flex flex-row-reverse justify-between items-start',
          'tablet:flex-row tablet:items-center',
          'max-w-laptop-lg mx-auto',
          'py-2 px-1 tablet:px-4 laptop:px-8 desktop:px-0',
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
      </div>
    </header>
  );
};

export default Header;
