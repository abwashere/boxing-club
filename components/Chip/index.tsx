import React from 'react';

type Props = { item: string };

const Chip = ({ item }: Props) => {
  return (
    <div className='rounded-full bg-gray px-1.5 py-0.5 text-xs text-white sm:block'>
      {item}
    </div>
  );
};

export default Chip;
