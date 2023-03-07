'use client';

import { PreviewSuspense } from 'next-sanity/preview';

type Props = { children: React.ReactNode };

export const Preview = ({ children }: Props) => {
  return (
    <PreviewSuspense
      fallback={
        <div role='status'>
          <p className='text-center animate'>
            <svg
              className='animate-spin h-5 w-5 mr-3 ...'
              viewBox='0 0 24 24'
            ></svg>
            Loading preview data...
          </p>
        </div>
      }
    >
      {children}
      <footer className='font-bold bg-red text-small'>_PREVIEW MODE_</footer>
    </PreviewSuspense>
  );
};
