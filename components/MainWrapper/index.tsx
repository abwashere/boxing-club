import classNames from 'classnames';

type Props = {
  bgColor?: 'white' | 'transparent';
  backButton?: React.ReactNode;
  isHomePage?: boolean;
  extraClassNames?: string;
  children: React.ReactNode;
};

const MainWrapper = ({
  children,
  isHomePage = false,
  bgColor = 'transparent',
  backButton,
  extraClassNames,
}: Props) => {
  return (
    <main
      className={classNames(
        extraClassNames,
        'h-full pb-16 px-1 tablet:px-4 laptop:px-8 desktop:px-32',
        { '!px-0': isHomePage },
        { 'bg-transparent': bgColor === 'transparent' },
        { 'bg-white': bgColor === 'white' },
      )}
    >
      {backButton && (
        <div className='flex justify-start mb-8'>{backButton}</div>
      )}
      {children}
    </main>
  );
};

export default MainWrapper;
