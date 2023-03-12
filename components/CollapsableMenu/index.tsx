import NavLink from '@/components/NavLink';
import { TNavLink } from '@/features/Header/constants';
import classNames from 'classnames';

type Props = {
  items: TNavLink[];
  extraClassNames: string;
  hoverItemClasses: string;
  isOpen: boolean;
  closeMobileNav?: () => void;
};

const CollapsableMenu = ({
  items,
  extraClassNames,
  hoverItemClasses,
  isOpen,
  closeMobileNav,
}: Props) => {
  return (
    <ul
      className={classNames(
        extraClassNames,
        'top-100 rounded w-full tablet:px-4 tablet:py-2 tablet:text-right',
        'tablet:shadow-xl shadow-neutral-100 tablet:bg-gray-dark tablet:bg-opacity-40',
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
          onClick={() => closeMobileNav && closeMobileNav()}
        >
          <NavLink {...item} />
        </li>
      ))}
    </ul>
  );
};

export default CollapsableMenu;
