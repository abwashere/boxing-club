'use client';

type Props = { text: string; color?: UiColor };

const BackButton = ({ text, color = 'white' }: Props) => {
  return (
    <div
      data-testid='back-button-div'
      onClick={() => window.history.back()}
      className='flex items-center px-2 py-1 border cursor-pointer w-fit rounded-xl border-gray hover:bg-gray'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke={color}
        className='w-4 h-4'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
        />
      </svg>

      <p className='ml-2'>{text}</p>
    </div>
  );
};

export default BackButton;
