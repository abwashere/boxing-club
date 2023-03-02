import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import Link from 'next/link';
import { clubMenuItems } from './constants';

type Props = {};

const navLinkClassNames =
  'hover:outline outline-yellow outline-offset-2 outline-1 rounded font-bold ';

const Header = (props: Props) => {
  return (
    <header className='flex justify-between py-5 px-2 text-sm'>
      <div>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
      <nav className='flex flex-col tablet:flex-row tablet:justify-end tablet:gap-4 laptop:gap-6'>
        <div className=''>
          <div className={navLinkClassNames + 'relative'}>LE CLUB</div>
          <Menu classNames={'absolute'} items={clubMenuItems} />
        </div>
        <div className={navLinkClassNames}>
          <Link href='/resultats'>RÉSULTATS</Link>
        </div>
        <div className={navLinkClassNames}>MENU GALLERIE</div>
        <div className={navLinkClassNames}>
          <Link href='/inscriptions'>INSCRIPTIONS</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
