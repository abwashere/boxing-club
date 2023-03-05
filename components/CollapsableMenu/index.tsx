import { NavMenuItem } from '@/features/Header/constants';
import classNames from 'classnames';

type Props = {
  items: NavMenuItem[];
  classes: string;
  hoverItemClasses: string;
  isOpen: boolean;
};

const CollapsableMenu = ({
  items,
  classes,
  hoverItemClasses,
  isOpen,
}: Props) => {
  return (
    <ul
      className={classNames(
        classes,
        'top-100 rounded w-full tablet:px-4 tablet:py-2 tablet:text-right',
        'tablet:shadow-xl shadow-neutral-100 bg-gray-dark',
        'transition-transform scale-y-0 duration-500 origin-top',
        {
          'transition-transform scale-y-100 duration-500': isOpen,
        },
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
  );
};

export default CollapsableMenu;
