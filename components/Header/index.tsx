import Burger from '@/components/Burger';
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import classNames from 'classnames';
import Link from 'next/link';
import { clubMenuItems, galleryMenuItems } from './constants';

const navLinkClassNames = 'cursor-pointer mb-4 tablet:mb-0 tablet:text-right';
const menuClassNames = 'tablet:mt-2 w-full tablet:text-right';
const hoverItemClasses = 'hover:border-b-2 border-yellow';

const Header = () => {
  return (
    <header className='flex flex-row-reverse items-center justify-between px-4 py-8 text-sm tablet:flex-row bg-gray-dark text-gray-light'>
      <Link className='tablet:hidden' href='/'>
        <Logo small />
      </Link>
      <Link className='hidden tablet:block' href='/'>
        <Logo />
      </Link>

      <div className='tablet:hidden'>
        <Burger />
      </div>

      <nav className='flex-col hidden tablet:flex tablet:flex-row tablet:justify-end tablet:gap-4 laptop:gap-6'>
        <div className={classNames(navLinkClassNames, 'tablet:relative')}>
          <div className='h-6 font-bold'>LE CLUB</div>
          <Menu
            items={galleryMenuItems}
            classes={classNames(
              'tablet:absolute tablet:-right-4 tablet:w-48',
              menuClassNames,
            )}
            hoverItemClasses={hoverItemClasses}
          />
        </div>
        <div
          className={classNames(
            navLinkClassNames,
            hoverItemClasses,
            'h-6 font-bold',
          )}
        >
          <Link href='/resultats'>RÉSULTATS</Link>
        </div>
        <div className={classNames(navLinkClassNames, 'tablet:relative')}>
          <div className='h-6 font-bold'>GALLERIE</div>
          <Menu
            items={galleryMenuItems}
            classes={classNames(
              'tablet:absolute tablet:-right-4 tablet:w-24',
              menuClassNames,
            )}
            hoverItemClasses={hoverItemClasses}
          />
        </div>
        <div
          className={classNames(
            navLinkClassNames,
            hoverItemClasses,
            'h-6 font-bold text-yellow',
          )}
        >
          <Link href='/inscriptions'>INSCRIPTIONS</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
