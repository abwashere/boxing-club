import classNames from 'classnames';

type Props = {
  bgColor?: 'white' | 'transparent';
  backButton?: React.ReactNode;
  isArticle?: boolean;
  children: React.ReactNode;
};

const MainWrapper = ({
  children,
  isArticle = false,
  bgColor = 'transparent',
  backButton,
}: Props) => {
  return (
    <main
      className={classNames(
        'pt-10 px-1',
        { 'tablet:px-4 laptop:px-8 laptop-lg:px-20 desktop:px-32': !isArticle },
        {
          'tablet:px-8 laptop:px-[20%]':
          isArticle,
        },
        { 'bg-transparent': bgColor === 'transparent' },
        { 'bg-white': bgColor === 'white' },
      )}
    >
      {children}
      <div className='flex justify-end'>{backButton}</div>
    </main>
  );
};

export default MainWrapper;
