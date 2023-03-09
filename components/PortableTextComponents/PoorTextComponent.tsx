import { PortableTextComponents } from '@portabletext/react';

export const PoorTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <>{children}</>,
    h2: ({ children }) => <>{children}</>,
    h3: ({ children }) => <>{children}</>,
    h4: ({ children }) => <>{children}</>,
    blockquote: ({ children }) => <>{children}</>,
  },
  list: {
    bullet: ({ children }) => (
      <>
        {children}
        <br />
      </>
    ),
    number: ({ children }) => (
      <>
        {children}
        <br />
      </>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <>
        {children}
        <br />
      </>
    ),
  },
  marks: {
    strong: ({ children }) => <>{children}</>,
  },
};
