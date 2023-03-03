import CollapsableMenu from '@/components/CollapsableMenu';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { clubMenuItems, galleryMenuItems } from './constants';

const Menu = () => {
  const [isClubMenuOpen, setIsClubMenuOpen] = useState(false);
  const [isGalleryMenuOpen, setIsGalleryMenuOpen] = useState(false);

  const navLinkClassNames = 'cursor-pointer mb-4 tablet:mb-0 tablet:text-right';
  const hoverItemClasses = 'hover:border-b-2 border-yellow';

  return (
    <div className='flex-col tablet:flex tablet:flex-row tablet:gap-4 laptop:gap-8'>
      <div
        className={classNames(navLinkClassNames, 'tablet:relative')}
        onTouchStart={() => setIsClubMenuOpen(!isClubMenuOpen)}
        onMouseEnter={() => setIsClubMenuOpen(true)}
        onMouseLeave={() => setIsClubMenuOpen(false)}
      >
        <div className={classNames(hoverItemClasses, 'h-6 font-bold')}>
          LE CLUB
        </div>
        <CollapsableMenu
          items={clubMenuItems}
          classes={classNames(
            'tablet:absolute tablet:-right-4 tablet:w-48',
            // {'block' : isClubMenuOpen},
          )}
          hoverItemClasses={hoverItemClasses}
          isOpen={isClubMenuOpen}
        />
      </div>
      <div
        className={classNames(
          navLinkClassNames,
          hoverItemClasses,
          'h-6 font-bold',
        )}
      >
        <Link href='/resultats'>RÉSULTATS</Link>
      </div>
      <div
        className={classNames(navLinkClassNames, 'tablet:relative')}
        onTouchStart={() => setIsGalleryMenuOpen(!isGalleryMenuOpen)}
        onMouseEnter={() => setIsGalleryMenuOpen(true)}
        onMouseLeave={() => setIsGalleryMenuOpen(false)}
      >
        <div className={classNames(hoverItemClasses, 'h-6 font-bold')}>
          GALLERIE
        </div>
        <CollapsableMenu
          items={galleryMenuItems}
          classes={classNames('tablet:absolute tablet:-right-4 tablet:w-24')}
          hoverItemClasses={hoverItemClasses}
          isOpen={isGalleryMenuOpen}
        />
      </div>
      <div
        className={classNames(
          navLinkClassNames,
          hoverItemClasses,
          'h-6 font-bold text-yellow',
        )}
      >
        <Link href='/inscriptions'>INSCRIPTIONS</Link>
      </div>
    </div>
  );
};

export default Menu;
