'use client';

import Course from '@/components/Course';
import Modal from '@/components/Modal';
import SectionWrapper from '@/components/SectionWrapper';
import getUrlFor from '@/utils/getUrlFor';
import Image from 'next/image';
import { useState } from 'react';

type Props = { articles: Article[] };

const CoursesSection = ({ articles }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalArticle, setModalArticle] = useState<Article | null>(null);

  const displayCourseContent = (article: Article): void => {
    setModalArticle(article);
    setShowModal(true);
  };
  const hideCourseContent = (): void => {
    setModalArticle(null);
    setShowModal(false);
  };

  return (
    <>
      <SectionWrapper>
        {articles?.length && (
          <>
            <h2 className='mb-2 uppercase'>Nos cours</h2>
            <div className='grid gap-2 tablet:grid-cols-2 tablet:gap-3 desktop:gap-6'>
              {articles.map((article: Article) => (
                <div
                  key={article._id}
                  className='flex flex-col justify-center py-4'
                >
                  <div
                    className='relative mb-1 laptop:mb-2 h-48 tablet:h-60 laptop:h-72 desktop:h-[400px] hover:cursor-pointer'
                    onClick={() => displayCourseContent(article)}
                  >
                    <Image
                      src={getUrlFor(article.mainImage).url()}
                      alt={article.mainImage.alt}
                      className='object-cover object-top'
                      fill
                      sizes=''
                    />
                  </div>
                  <h3 className='text-sm font-bold uppercase tablet:text-base'>
                    {article.title}
                  </h3>
                </div>
              ))}
            </div>
          </>
        )}
      </SectionWrapper>
      <Modal isOpen={showModal} onClose={hideCourseContent}>
        <Course course={modalArticle} />
      </Modal>
    </>
  );
};

export default CoursesSection;
