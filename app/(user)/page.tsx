import Loader from '@/components/Loader';
import MainWrapper from '@/components/MainWrapper';
import Banner from '@/features/Banner';
import CoursesSection from '@/features/CoursesSection';
import Header from '@/features/Header';
import PartnersSection from '@/features/PartnersSection';
import PrizesSection from '@/features/PrizesSection';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';

const query = groq`{
  'heroSection': *[_type == 'heroSection'][0],
  'articles': *[_type == 'article']{
    ...,
    coaches[]->
  }
}`;

export const revalidate = 60;

export default async function HomePage() {
  const data = await client.fetch(query);
  const heroSection = data.heroSection;
  const articles = data.articles;

  const prizesArticle = articles.find(
    (article: Article) => article.slug.current === 'photo-palmares-du-club',
  );
  const partnersArticle = articles.find(
    (article: Article) => article.slug.current === 'partenaires-officiels',
  );
  const classesArticles = articles.filter(
    (article: Article) => article.section === 'classes',
  );

  if (!data) return <Loader text='Chargement' />;

  return (
    <>
      <Header isHomePageHeader />

      <MainWrapper isHomePage extraClassNames=' !left-0 !pt-0'>
        <Banner hero={heroSection} />

        <PrizesSection article={prizesArticle} />

        <CoursesSection articles={classesArticles} />

        <PartnersSection article={partnersArticle} />
      </MainWrapper>
    </>
  );
}
