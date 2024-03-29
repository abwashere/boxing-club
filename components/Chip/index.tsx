import classNames from 'classnames';

type Props = { item: string; color?: UiColor; extraClassNames?: string };

const backgroundColors = {
  gray: 'bg-gray',
  'gray-light': 'bg-gray-light',
  'gray-dark': 'bg-gray-dark',
  yellow: 'bg-yellow',
  white: 'bg-white',
  black: 'bg-black',
  transparent: 'bg-transparent',
};

const resolveBgColor = (color: UiColor): string => {
  return backgroundColors[color];
};

const Chip = ({ item, color = 'black', extraClassNames }: Props) => {
  const resolvedBgColor = resolveBgColor(color);
  return (
    <div
      className={classNames(
        'rounded-full !w-fit bg-gray px-1.5 text-[0.6rem] text-white',
        resolvedBgColor,
        extraClassNames,
      )}
    >
      {item}
    </div>
  );
};

export default Chip;
