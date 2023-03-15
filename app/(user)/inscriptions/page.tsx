import MainWrapper from '@/components/MainWrapper';
import PageSubTitle from '@/components/PageSubTitle';
import PageTitle from '@/components/PageTitle';
import { RichTextComponents } from '@/components/PortableTextComponents';
import { client } from '@/lib/sanity.client';
import { PortableText } from '@portabletext/react';
import classNames from 'classnames';
import { groq } from 'next-sanity';
import Schedule from './Schedule';

const query = groq`*[_type=='article' && slug.current=='inscription-et-horaires'][0]`;

export default async function PresentationPage() {
  const article = await client.fetch(query);
  const { title, subtitle, table, gallery, body } = article;
  console.log(table.rows[0]);

  const schedule = gallery.images[0];

  return (
    <MainWrapper>
      <div className='my-4 text-center uppercase tablet:mb-10'>
        <PageTitle title={title} />
      </div>
      <div className='mb-4 text-center text-yellow tablet:mb-10'>
        <PageSubTitle text={subtitle} />
      </div>

      <div className='py-4 mb-8'>
        <PortableText components={RichTextComponents} value={body} />
      </div>

      <div className='mb-4 text-center'>
        <h2 className='text-yellow'>Planning du club</h2>
      </div>

      <table className='w-full mb-8 text-left border-b border-l laptop:w-1/2 laptop:text-sm desktop:w-2/3 text-xxs border-gray'>
        <tbody className=''>
          {table.rows.map((row: any) => (
            <tr
              key={row._key}
              className={classNames(
                row.cells[0] === ''
                  ? 'border-t border-gray'
                  : 'border-t-2 border-yellow',
              )}
            >
              <th className='w-1/4 px-1 border-r tablet:w-2/5 border-gray '>
                {row.cells[0]}
              </th>
              <td className='w-2/4 px-1 border-r tablet:w-2/5 border-gray'>
                {row.cells[1]}
              </td>
              <td className='p-1 border-r border-gray '>{row.cells[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Schedule image={schedule} />
    </MainWrapper>
  );
}
