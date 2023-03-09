import classNames from 'classnames';

type Props = { date: string; extraClassNames: string };

const DateChip = ({ date, extraClassNames }: Props) => {
  const dateArr = date.split(' ');
  const day = dateArr[0];
  const month = dateArr[1];
  const year = dateArr[2];
  return (
    <div
      className={classNames(
        extraClassNames,
        'flex items-center justify-center min-w-fit h-fit p-1 font-bold text-center text-xs text-gray-dark bg-yellow bg-opacity-70',
        'tablet:flex-col tablet:bg-opacity-100',
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
