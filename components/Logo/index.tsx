import LogoVBC from '/public/images/logo-vbc.png';
import Image from 'next/image';

type Props = {
  small?: boolean;
};

const Logo = ({ small }: Props) => {
  return <Image width={small ? 150 : 200} alt='logo' src={LogoVBC} priority />;
};

export default Logo;
