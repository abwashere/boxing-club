import MainWrapper from '@/components/MainWrapper';
import PageTitle from '@/components/PageTitle';
import { client } from '@/lib/sanity.client';
import getUrlFor from '@/utils/getUrlFor';
import { entraineursUrl } from '@/utils/urls';
import classNames from 'classnames';
import { groq } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';

const query = groq`*[_type=='person' && role == "coach"]{
  slug,
  subtitle,
  fullName,
  photo,
} | order(fullName asc)
`;

export default async function EntraineursPage() {
  const allCoaches = await client.fetch(query);
  const kickCoaches = allCoaches.filter((member: Person) =>
    member.subtitle.match(/kick/i),
  );
  const englishCoaches = allCoaches.filter((member: Person) =>
    member.subtitle.match(/anglaise/i),
  );
  const feminineCoaches = allCoaches.filter((member: Person) =>
    member.subtitle.match(/féminine/i),
  );

  const getCoachCard = (coach: Person): JSX.Element => (
    <div key={coach._id} className='mb-8 font-bold group'>
      <Link href={entraineursUrl + `/${coach.slug.current}`}>
        <p className='mb-2'>{coach.fullName}</p>
        <div className='relative mb-2 h-52 tablet:h-48 laptop:h-56 desktop:h-80 group-hover:outline group-hover:outline-yellow'>
          <Image
            src={getUrlFor(coach.photo).url()}
            alt={coach.photo.alt}
            className='object-cover object-top'
            fill
            sizes='(max-height: 390px) 192px, (max-height: 768px) 240px'
          />
        </div>
      </Link>
    </div>
  );
  const cardsGroupClassNames = 'mb-8';

  return (
    <MainWrapper>
      <PageTitle title='NOS ENTRAINEURS' />
      <div className='grid mt-8 text-center tablet:grid-cols-3 gap-x-4'>
        {kickCoaches && (
          <div className={classNames(cardsGroupClassNames)}>
            <h3 className='mb-6'>Boxe Pieds/Poings</h3>
            {kickCoaches.map((coach: Person) => getCoachCard(coach))}
          </div>
        )}
        {englishCoaches && (
          <div className={classNames(cardsGroupClassNames)}>
            <h3 className='mb-6'>Boxe Anglaise</h3>
            {englishCoaches.map((coach: Person) => getCoachCard(coach))}
          </div>
        )}
        {feminineCoaches && (
          <div className={classNames(cardsGroupClassNames)}>
            <h3 className='mb-6'>Boxe Féminine</h3>
            {feminineCoaches.map((coach: Person) => getCoachCard(coach))}
          </div>
        )}
      </div>
      <hr className='mb-8 text-gray' />
      {allCoaches && (
        <>
          <h3 className='mb-6'>Tous les entraineurs</h3>
          <div
            className={classNames(
              cardsGroupClassNames,
              'grid grid-cols-2 tablet:grid-cols-3 gap-2',
            )}
          >
            {allCoaches.map((coach: Person) => getCoachCard(coach))}
          </div>
        </>
      )}
    </MainWrapper>
  );
}
