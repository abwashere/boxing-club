import Banner from '@/components/Banner';
import MainWrapper from '@/features/MainWrapper';

export default function HomePage() {
  return (
    <MainWrapper>
      <Banner />
      <h2 className='text-red'>Club de boxe</h2>
    </MainWrapper>
  );
}
