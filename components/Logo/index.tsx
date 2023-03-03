import LogoVBC from '@/assets/logo-vbc.png';
import Image from 'next/image';

type Props = {
  small?: boolean;
};

const Logo = ({ small }: Props) => {
  return <Image width={small ? 150 : 200} alt='logo' src={LogoVBC} />;
};

export default Logo;
