'use client';
import Modal from '@/components/Modal';
import getUrlFor from '@/utils/getUrlFor';
import Image from 'next/image';
import { useState } from 'react';

type Props = { image: Image };

const Schedule = ({ image }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const displayModal = (): void => {
    setShowModal(true);
  };
  const hideModal = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className='relative h-[133px] w-[200px] tablet:h-[267px] tablet:w-[400px] group m-auto'
        onClick={displayModal}
      >
        <Image
          src={getUrlFor(image).url()}
          alt={image.alt}
          className='object-contain group-hover:outline group-hover:outline-yellow'
          fill
          sizes=''
        />
      </div>

      <Modal isOpen={showModal} onClose={hideModal}>
        <div className='relative h-[1200px] w-[1360px] tablet:h-[580px] tablet:w-[700px] laptop:h-[700px] laptop:w-[900px] desktop:h-[700px] desktop:w-[1400px] m-auto'>
          <Image
            src={getUrlFor(image).url()}
            alt={image.alt}
            className='object-contain'
            fill
            sizes=''
          />
        </div>
      </Modal>
    </>
  );
};

export default Schedule;
