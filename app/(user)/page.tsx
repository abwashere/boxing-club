import MainWrapper from '@/components/MainWrapper';
import Banner from '@/features/Banner';
import Header from '@/features/Header';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';

const query = groq`*[_type=='heroSection'][0]`;

export const revalidate = 60;

export default async function HomePage() {
  const heroSection = await client.fetch(query);

  if (!heroSection) return null;

  return (
    <>
      <Header isHomePageHeader />
      <MainWrapper isHomePage extraClassNames=' !left-0 !pt-0'>
        <Banner hero={heroSection} />
      </MainWrapper>
    </>
  );
}
