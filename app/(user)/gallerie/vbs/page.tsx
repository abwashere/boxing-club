import PageTitle from '@/components/PageTitle';
import MainWrapper from '@/components/MainWrapper';

export default async function GallerieVbsPage() {
  return (
    <MainWrapper>
      <div className='flex w-full mb-10 tablet:justify-center'>
        <PageTitle title='VBS' />
      </div>
    </MainWrapper>
  );
}
