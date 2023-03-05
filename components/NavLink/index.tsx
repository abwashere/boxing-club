import { NavLink } from '@/features/Header/constants';
import Link from 'next/link';

const Navlink = ({ url, name }: NavLink) => {
  return <Link href={url}>{name}</Link>;
};

export default Navlink;
