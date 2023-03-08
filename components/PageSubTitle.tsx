import React from 'react';

type Props = { text: string };

const PageSubTitle = ({ text }: Props) => {
  return <h2 className='text-center'>{text}</h2>;
};

export default PageSubTitle;
