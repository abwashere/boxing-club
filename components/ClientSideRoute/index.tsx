'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = { children: ReactNode; route: string };

const ClientSideRoute = ({ children, route }: Props) => {
  return <Link href={route}>{children}</Link>;
};

export default ClientSideRoute;
