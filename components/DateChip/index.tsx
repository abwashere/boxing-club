import classNames from 'classnames';
import React from 'react';

type Props = { date: string; classes: string };

const DateChip = ({ date, classes }: Props) => {
  const dateArr = date.split(' ');
  const day = dateArr[0];
  const month = dateArr[1];
  const year = dateArr[2];
  return (
    <div
      className={classNames(
        classes,
        'flex items-center justify-center tablet:flex-col w-[6rem] tablet:w-[5rem] py-1 tablet:py-2 font-semibold text-center text-gray-dark bg-yellow opacity-70 tablet:opacity-100',
      )}
    >
      <div>
        {day} {month.toUpperCase().substring(0, 3)}
      </div>
      <div>
        <span>&nbsp;</span>
        {year}
      </div>
    </div>
  );
};

export default DateChip;
