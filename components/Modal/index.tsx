'use client';

import Close from '@/components/Icons/Close';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-30 flex items-center justify-center p-4 tablet:p-10 overflow:auto bg-black bg-opacity-30 backdrop-blur-sm'>
      <div className='flex flex-col items-center justify-center h-full desktop:max-w-[50%]'>
        <div
          className='place-self-end mb-1 text-right text-white '
          role='button'
          onClick={onClose}
        >
          <Close extraClassNames='h-8 w-8 tablet:h-14 tablet:w-14' />
        </div>
        <div className='p-4 tablet:p-8 rounded-md tablet:overflow-auto overscroll-contain bg-white'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
