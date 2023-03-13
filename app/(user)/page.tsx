import Loader from '@/components/Loader';
import MainWrapper from '@/components/MainWrapper';
import Banner from '@/features/Banner';
import PostImage from '@/features/BlogList/components/PostImage';
import Header from '@/features/Header';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
const query = groq`*[_type in ["article", "heroSection"]]`;

export const revalidate = 60;

export default async function HomePage() {
  const data = await client.fetch(query);
  const heroSection = data.filter(
    (obj: HeroSection) => obj._type === 'heroSection',
  )[0];
  const articles = data.filter((obj: Article) => obj._type === 'article');

  const palmaresArticle = articles.find(
    (article: Article) => article.slug.current === 'photo-palmares-du-club',
  );

  if (!data) return <Loader text='Chargement' />;

  return (
    <>
      <Header isHomePageHeader />
      <MainWrapper isHomePage extraClassNames=' !left-0 !pt-0'>
        <Banner hero={heroSection} />
        {palmaresArticle && (
          <div className='relative h-32'>
            <PostImage cdnImage={palmaresArticle.mainImage} isGalleryImage />
          </div>
        )}
      </MainWrapper>
    </>
  );
}
