import classNames from 'classnames';

type Props = {
  bgColor?: 'white' | 'transparent';
  backButton: React.ReactNode;
  children: React.ReactNode;
};

const MainWrapper = ({
  children,
  bgColor = 'transparent',
  backButton,
}: Props) => {
  return (
    <main
      className={classNames(
        'px-2 mx-auto mt-5 laptop-lg:max-w-laptop-lg desktop:px-0',
        { 'bg-transparent': bgColor === 'transparent' },
        { 'bg-white': bgColor === 'white' },
      )}
    >
      {backButton}
      {children}
    </main>
  );
};

export default MainWrapper;
