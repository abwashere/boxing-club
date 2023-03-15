import getUrlFor from '@/utils/getUrlFor';
import { entraineursUrl } from '@/utils/urls';
import { PortableText } from '@portabletext/react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Loader from '../Loader';
import { RichTextComponents } from '../PortableTextComponents';

type Props = { course: Article | null };

const Course = ({ course }: Props) => {
  if (!course) return <Loader text='Chargement' />;

  const { title, subtitle, coaches, body, mainImage } = course;

  return (
    <div className='flex flex-col justify-center p-2 text-center tablet:p-4 laptop:p-8 tablet:mx-36 desktop:mx-80 text-gray-dark'>
      <h2 className='mb-2 text-sm font-bold uppercase'>{title}</h2>
      <h3>{subtitle}</h3>
      <div className='laptop:py-8'>
        <div className='mb-8 text-left'>
          <PortableText value={body} components={RichTextComponents} />
        </div>
        <h3 className='mb-2'>Encadrement</h3>
        <ul
          className={classNames(
            'grid grid-cols-2 gap-2 laptop:gap-12',
            coaches.length === 3
              ? 'desktop:grid-cols-3'
              : 'desktop:grid-cols-2',
          )}
        >
          {coaches.map((coach: Person) => (
            <li key={coach._id} className='font-bold group'>
              <Link href={entraineursUrl + `/${coach.slug.current}`}>
                <div className='relative h-24 mb-2 tablet:h-48 laptop:h-56 desktop:h-80 group-hover:outline group-hover:outline-yellow'>
                  <Image
                    src={getUrlFor(coach.photo).url()}
                    alt={mainImage.alt}
                    className={classNames('object-cover object-top')}
                    fill
                    sizes='(max-height: 390px) 192px, (max-height: 768px) 240px'
                  />
                </div>
                <p>{coach.fullName}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Course;
