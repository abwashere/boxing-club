import classNames from 'classnames';
import React from 'react';

type Props = {
  children: React.ReactNode;
  bgColor?: 'white' | 'transparent' | 'black';
};

const SectionWrapper = ({ children, bgColor = 'transparent' }: Props) => {
  return (
    <section
      className={classNames(
        'px-2 tablet:px-8 py-6 my-12 tablet:mb-24 laptop:px-24 text-center',
        {
          'bg-black': bgColor === 'black',
          'bg-white': bgColor === 'white',
        },
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
