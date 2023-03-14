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
    <div
      className='fixed inset-0 z-30 flex items-center justify-center p-2 bg-black bg-opacity-30 bg-blur-sm'
      onClick={onClose}
    >
      <div className='w-[95%] flex flex-col items-center justify-center h-full'>
        <div
          className='mb-1 text-right text-white place-self-end'
          onClick={onClose}
        >
          <Close />
        </div>
        <div className='px-2 py-8 overflow-y-scroll bg-white rounded-md overscroll-contain'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
