import React from 'react';

type Props = { title: string };

const PageTitle = ({ title }: Props) => {
  return <h1 className='mb-5 text-center'>{title}</h1>;
};

export default PageTitle;
