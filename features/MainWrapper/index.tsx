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
        'px-2 mx-auto mt-5 desktop:px-0',
        { 'bg-transparent': bgColor === 'transparent' },
        { 'bg-white': bgColor === 'white' },
        {
          'tablet:max-w-xl laptop:max-w-tablet laptop-lg:max-w-laptop ':
            isArticle,
        },
        { 'laptop-lg:max-w-laptop-lg': !isArticle },
      )}
    >
      {children}
      <div className='flex justify-end'>{backButton}</div>
    </main>
  );
};

export default MainWrapper;
