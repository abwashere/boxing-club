import getUrlFor from '@/utils/getUrlFor';
import { PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

export const RichTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        className='object-contain'
        src={getUrlFor(value).url()}
        alt={value.alt || `${value.type} image`}
        fill
      />
    ),
  },
  block: {
    h1: ({ children }) => <h1 className='mb-4'>{children}</h1>,
    h2: ({ children }) => <h2 className='mb-4'>{children}</h2>,
    h3: ({ children }) => <h3 className='mb-4'>{children}</h3>,
    h4: ({ children }) => <h4 className='mb-4'>{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className='italic border-l-yellow'>{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className='mt-4'>{children}</ul>,
    number: ({ children }) => <ol className='mt-4'>{children}</ol>,
    checkmarks: ({ children }) => (
      <ol className='m-auto text-lg'>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>- {children}</li>,
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <Link href={value.href} rel={rel} className='underline'>
          {children}
        </Link>
      );
    },
  },
};
