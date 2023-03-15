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

  const cardsGroupClassNames =
    'mb-8 grid grid-cols-2 tablet:grid-cols-4 gap-x-2 gap-y-4 laptop:gap-4';

  const getCoachCard = (coach: Person): JSX.Element => (
    <div key={coach._id} className='font-bold group'>
      <Link href={entraineursUrl + `/${coach.slug.current}`}>
        <div className='relative mb-2 h-52 tablet:h-48 laptop:h-56 desktop:h-96 group-hover:outline group-hover:outline-yellow'>
          <Image
            src={getUrlFor(coach.photo).url()}
            alt={coach.photo.alt}
            className='object-cover object-top'
            fill
            sizes='(max-height: 390px) 192px, (max-height: 768px) 240px'
          />
        </div>
        <p className='mb-2'>{coach.fullName}</p>
      </Link>
    </div>
  );

  const getGroupCards = (group: Person[]) => (
    <div className={classNames(cardsGroupClassNames)}>
      {group.map((coach: Person) => getCoachCard(coach))}
    </div>
  );

  return (
    <MainWrapper>
      <div className='my-4 text-center uppercase tablet:mb-10'>
        <PageTitle title='NOS ENTRAINEURS' />
      </div>
      <div className='mt-8 text-center'>
        <h3 className='mb-4 text-left'>Boxe Pieds/Poings</h3>
        {kickCoaches && getGroupCards(kickCoaches)}
        <h3 className='mb-4 text-left'>Boxe Anglaise</h3>
        {englishCoaches && getGroupCards(englishCoaches)}
        <h3 className='mb-4 text-left'>Boxe Féminine</h3>
        {feminineCoaches && getGroupCards(feminineCoaches)}
      </div>
      <hr className='mb-8 text-gray' />
      {allCoaches && getGroupCards(allCoaches)}
    </MainWrapper>
  );
}
