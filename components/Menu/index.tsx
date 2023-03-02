import { NavMenuItem } from '@/components/Header/constants';

type Props = {
  classNames: string;
  items: NavMenuItem[];
};

const Menu = ({ classNames, items }: Props) => {
  return (
    <>
      <ul className={classNames + ''}>
        {items.map(item => (
          <li key={item.url}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
