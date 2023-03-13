import ArticleWrapper from '@/components/ArticleWrapper';
import Loader from '@/components/Loader';
import MainWrapper from '@/components/MainWrapper';
import { RichTextComponents } from '@/components/PortableTextComponents';
import Banner from '@/features/Banner';
import Header from '@/features/Header';
import { client } from '@/lib/sanity.client';
import getUrlFor from '@/utils/getUrlFor';
import { PortableText } from '@portabletext/react';
import classNames from 'classnames';
import Image from 'next/image';
const query = `{
  'heroSection': *[_type == 'heroSection'][0],
  'articles': *[_type == 'article']{
    ...,
    coaches[]->,
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

        <ArticleWrapper>
          {prizesArticle && (
            <>
              <div className='relative h-32 m-auto tablet:w-2/3 tablet:h-48 laptop:h-64 desktop:h-72'>
                <Image
                  src={getUrlFor(prizesArticle.mainImage).url()}
                  alt={prizesArticle.mainImage.alt || 'Photo compétiteurs'}
                  className={classNames('object-cover object-top')}
                  fill
                />
              </div>
              <div className='p-2 text-sm text-gray-light'>
                <p className='my-2'>Le VBC c&apos;est&nbsp;: </p>
                <PortableText
                  value={prizesArticle.body}
                  components={RichTextComponents}
                />
              </div>
            </>
          )}
        </ArticleWrapper>

        <ArticleWrapper>
          {classesArticles?.length && (
            <>
              <h2 className='mb-2 uppercase'>Nos cours</h2>
              <div className='grid gap-2 tablet:grid-cols-2 tablet:gap-3 desktop:gap-6'>
                {classesArticles.map((article: Article) => (
                  <div
                    key={article._id}
                    className='flex flex-col justify-center py-4'
                  >
                    <div className='relative mb-1 laptop:mb-2 h-48 tablet:h-60 laptop:h-72 desktop:h-[400px]'>
                      <Image
                        src={getUrlFor(article.mainImage).url()}
                        alt={article.mainImage.alt}
                        className={classNames('object-cover object-top')}
                        fill
                      />
                    </div>
                    <h2 className='text-sm font-bold uppercase tablet:text-base'>
                      {article.title}
                    </h2>
                  </div>
                ))}
              </div>
            </>
          )}
        </ArticleWrapper>

        <ArticleWrapper bgColor='white'>
          <div className='!text-gray-dark'>
            <h2 className='mb-2 uppercase'>{partnersArticle.title}</h2>
            <p>{partnersArticle.subtitle}</p>
          </div>
          <div className='flex flex-col items-center justify-center max-w-sm gap-4 py-8 m-auto my-2 tablet:flex-row tablet:flex-wrap'>
            {partnersArticle.gallery.images.map((image: Image) => (
              // TODO: replace with Image and add alt txt
              <img key={image._id} src={getUrlFor(image).height(80).url()} />
            ))}
          </div>
        </ArticleWrapper>
      </MainWrapper>
    </>
  );
}
