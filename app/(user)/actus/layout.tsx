import Footer from '@/features/Footer';
import Header from '@/features/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <body className='h-screen bg-gray-dark'>
        <Header />
        {children}
        <div className='flex flex-col justify-center w-full py-8'>
          <Footer />
        </div>
      </body>
    </html>
  );
}
