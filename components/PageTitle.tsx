import React from 'react';

type Props = { title: string };

const PageTitle = ({ title }: Props) => {
  return <h1 className='text-center tablet:mt-10'>{title}</h1>;
};

export default PageTitle;
