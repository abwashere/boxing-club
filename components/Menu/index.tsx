import { NavMenuItem } from '@/components/Header/constants';
import classNames from 'classnames';

type Props = {
  items: NavMenuItem[];
  classes: string;
  hoverItemClasses: string;
};

const Menu = ({ items, classes, hoverItemClasses }: Props) => {
  return (
    <>
      <ul
        className={classNames(
          classes,
          'tablet:px-4 tablet:py-2 rounded tablet:shadow-xl shadow-neutral-100 bg-gray-dark',
        )}
      >
        {items.map(item => (
          <li
            key={item.url}
            className={classNames(hoverItemClasses, 'h-6 tablet:mt-2')}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
