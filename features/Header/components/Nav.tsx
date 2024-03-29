import CollapsableMenu from '@/components/CollapsableMenu';
import NavLink from '@/components/NavLink';
import classNames from 'classnames';
import { useState } from 'react';
import {
  actusLink,
  clubLink,
  clubMenuItems,
  gallerieLink,
  galleryMenuItems,
  inscriptionsLink,
} from '../constants';

const Nav = ({ closeMobileNav }: { closeMobileNav: () => void }) => {
  const [isClubMenuOpen, setIsClubMenuOpen] = useState(false);
  const [isGalleryMenuOpen, setIsGalleryMenuOpen] = useState(false);

  const navLinkClassNames = 'cursor-pointer mb-4 tablet:mb-0 tablet:text-right';
  const hoverItemClasses = 'hover:border-b-2 border-yellow';

  return (
    <div className='flex flex-col tablet:flex-row tablet:items-center tablet:gap-4 laptop:gap-8'>
      <div
        className={classNames(navLinkClassNames, 'tablet:relative')}
        onMouseEnter={() => setIsClubMenuOpen(true)}
        onMouseLeave={() => setIsClubMenuOpen(false)}
      >
        <div
          className={classNames(hoverItemClasses, 'h-6 font-bold uppercase')}
        >
          {clubLink.name}
        </div>
        <CollapsableMenu
          items={clubMenuItems}
          extraClassNames={classNames(
            'mt-2 tablet:block tablet:absolute tablet:-right-4 tablet:w-48',
            { hidden: !isClubMenuOpen },
          )}
          hoverItemClasses={hoverItemClasses}
          isOpen={isClubMenuOpen}
        />
      </div>
      <div
        onClick={() => closeMobileNav()}
        className={classNames(
          navLinkClassNames,
          hoverItemClasses,
          'h-6 font-bold uppercase',
        )}
      >
        <NavLink {...actusLink} />
      </div>
      <div
        className={classNames(navLinkClassNames, 'tablet:relative')}
        onMouseEnter={() => setIsGalleryMenuOpen(true)}
        onMouseLeave={() => setIsGalleryMenuOpen(false)}
      >
        <div
          className={classNames(hoverItemClasses, 'h-6 font-bold uppercase')}
        >
          {gallerieLink.name}
        </div>
        <CollapsableMenu
          items={galleryMenuItems}
          extraClassNames={classNames(
            'mt-2 tablet:block tablet:absolute tablet:-right-4 tablet:w-24',
            { hidden: !isGalleryMenuOpen },
          )}
          hoverItemClasses={hoverItemClasses}
          isOpen={isGalleryMenuOpen}
        />
      </div>
      <div
        onClick={() => closeMobileNav()}
        className={classNames(
          navLinkClassNames,
          hoverItemClasses,
          'h-6 font-bold text-yellow uppercase',
        )}
      >
        <NavLink {...inscriptionsLink} />
      </div>
    </div>
  );
};

export default Nav;
