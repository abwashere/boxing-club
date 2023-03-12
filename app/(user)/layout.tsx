import Footer from '@/features/Footer';
import Header from '@/features/Header';
import '@/styles/globals.css';

export const metadata = {
  title: 'Villejuif Boxing Club',
  description: 'Fake Boxing Club Website',
  icons: {
    icon: '/cropped-logo-usv-32x32.png',
  },
  authors: [{ name: 'Audrey Belson' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <body className='relative flex flex-col min-h-screen justify-betweenh-screen bg-gray-dark'>
        <Header extraClassNames='absolute top-0 z-20 w-full !bg-transparent' />
        {children}
        <Footer />
      </body>
    </html>
  );
}
