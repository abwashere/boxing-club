import classNames from 'classnames';

type Props = {
  bgColor?: 'white' | 'transparent';
  backButton?: React.ReactNode;
  isArticle?: boolean;
  isHomePage?: boolean;
  extraClassNames?: string;
  children: React.ReactNode;
};

const MainWrapper = ({
  children,
  isArticle = false,
  isHomePage = false,
  bgColor = 'transparent',
  backButton,
  extraClassNames,
}: Props) => {
  return (
    <main
      className={classNames(
        extraClassNames,
        'pt-8 pb-4',
        { '!px-0': isHomePage },
        {
          'px-1 tablet:px-4 laptop:px-8 desktop:px-32': !isArticle,
        },
        {
          'px-1 tablet:px-4 laptop:px-[20%]': isArticle,
        },
        { 'bg-transparent': bgColor === 'transparent' },
        { 'bg-white': bgColor === 'white' },
      )}
    >
      {children}
      {backButton && <div className='flex justify-end'>{backButton}</div>}
    </main>
  );
};

export default MainWrapper;
