import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center w-full pb-8 text-center text-gray'>
      <p className='mb-2 laptop:mb-4'>
        Created by <br />
        <Link
          href='https://linkedin.com/in/audrey-belson'
          rel='noopener noreferrer'
        >
          <span className='text-yellow'>Audrey Belson</span>
        </Link>
        <br />
        with NextJS / Vercel / Sanity
      </p>
      <p className='mb-2 laptop:mb-4'>
        <Link
          href='https://github.com/abwashere/boxing-club'
          rel='noopener noreferrer'
        >
          <img
            src='/images/github-mark-white.png'
            alt='Logo GitHub'
            className='w-4 h-4 m-auto laptop:w-6 laptop:h-6'
          />
        </Link>
      </p>
      <p>
        Inspired by <br />
        &apos;
        <Link href='http://usvkickboxing.com/v2/' rel='noopener noreferrer'>
          Académie des boxed de Villejuif
        </Link>
        &apos; website
      </p>
    </footer>
  );
};

export default Footer;
