import PageTitle from '@/components/PageTitle';
import MainWrapper from '@/components/MainWrapper';

export default async function AdministrationPage() {
  return (
    <MainWrapper>
      <div className='my-4 text-center uppercase tablet:mb-10'>
        <PageTitle title='ADMINISTRATION' />
      </div>
    </MainWrapper>
  );
}
