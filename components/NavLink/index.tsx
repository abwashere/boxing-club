import { TNavLink } from '@/features/Header/constants';
import Link from 'next/link';

const Navlink = ({ url, name }: TNavLink) => {
  return <Link href={url}>{name}</Link>;
};

export default Navlink;
