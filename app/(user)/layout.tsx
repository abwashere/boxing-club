import Footer from '@/features/Footer';
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
