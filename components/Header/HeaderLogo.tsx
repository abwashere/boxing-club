import Link from 'next/link';
import Logo from '@/components/Logo';

const HeaderLogo = () => {
  return (
    <>
      <Link className='flex items-center tablet:hidden' href='/'>
        <Logo small />
      </Link>
      <Link className='items-center hidden tablet:flex ' href='/'>
        <Logo />
      </Link>
    </>
  );
};

export default HeaderLogo;
