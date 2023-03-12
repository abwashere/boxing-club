import Footer from '@/features/Footer';
import Header from '@/features/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <body className='h-screen bg-gray-dark'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
