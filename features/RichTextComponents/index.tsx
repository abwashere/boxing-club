import getUrlFor from '@/utils/getUrlFor';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

export const RichTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        className='object-contain'
        src={getUrlFor(value).url()}
        alt='Post image'
        fill
      />
    ), // TODO: change
  },
  block: {
    h1: ({ children }) => <h1 className=''>{children}</h1>,
    h2: ({ children }) => <h2 className=''>{children}</h2>,
    h3: ({ children }) => <h3 className=''>{children}</h3>,
    h4: ({ children }) => <h4 className=''>{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className='border-l-purple-500'>{children}</blockquote>
    ), // TODO: change
  },
  list: {
    bullet: ({ children }) => <ul className='mt-xl'>{children}</ul>,
    number: ({ children }) => <ol className='mt-lg'>{children}</ol>,
    checkmarks: ({ children }) => (
      <ol className='m-auto text-lg'>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ listStyleType: 'disclosure-closed' }}>{children}</li>
    ),
    // rendering custom list items
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
