import classNames from 'classnames';

type Props = { item: string; color?: UiChipColor };

type UiChipColor =
  | 'gray'
  | 'gray-light'
  | 'gray-dark'
  | 'yellow'
  | 'white'
  | 'black';

const backgroundColors = {
  gray: 'bg-gray',
  'gray-light': 'bg-gray-light',
  'gray-dark': 'bg-gray-dark',
  yellow: 'bg-yellow',
  white: 'bg-white',
  black: 'bg-black',
};

const resolveBgColor = (color: UiChipColor): string => {
  return backgroundColors[color];
};

const Chip = ({ item, color = 'black' }: Props) => {
  const resolvedBgColor = resolveBgColor(color);
  return (
    <div
      className={classNames(
        'rounded-full !w-fit bg-gray px-1.5 text-[0.6rem] text-white',
        resolvedBgColor,
      )}
    >
      {item}
    </div>
  );
};

export default Chip;
