import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  bgColor?: 'white' | 'transparent';
};

const MainWrapper = ({ children, bgColor = 'transparent' }: Props) => {
  return (
    <main
      className={classNames(
        'px-2 mx-auto mt-5 laptop-lg:max-w-laptop-lg desktop:px-0',
        { 'bg-transparent': bgColor === 'transparent' },
        { 'bg-white': bgColor === 'white' },
      )}
    >
      {children}
    </main>
  );
};

export default MainWrapper;
