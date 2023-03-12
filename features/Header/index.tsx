'use client';
import classNames from 'classnames';
import { useState } from 'react';

import Burger from '@/components/Icons/Burger';
import HeaderLogo from './components/HeaderLogo';
import Nav from './components/Nav';

type Props = {
  isTransparent?: boolean;
};

const Header = ({ isTransparent = false }: Props) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header
      className={classNames(
        'flex flex-row-reverse justify-between items-start',
        'tablet:flex-row tablet:items-center',
        'py-2 tablet:py-8 px-1 tablet:px-4 laptop:px-8 desktop:px-32',
        'shadow-sm text-sm',
        isTransparent ? 'bg-transparent' : 'bg-gray-dark',
      )}
    >
      <HeaderLogo />
      <nav
        className={classNames({
          'bg-gray-dark bg-opacity-80 tablet:bg-transparent p-2 rounded':
            isMobileNavOpen,
        })}
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
          <Nav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
