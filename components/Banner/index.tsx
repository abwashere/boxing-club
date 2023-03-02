import Image from 'next/image';

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className='h-[100vh]'>
      <Image alt='Fighter big image' src={''} />
      <div className='text-center font-bold'>
        <h1 className='text-xl text-yellow'>VBC</h1>
        <h2 className='text-2xl'>FORCE COURAGE ET DÉTERMINATION</h2>
      </div>
    </div>
  );
};

export default Banner;
