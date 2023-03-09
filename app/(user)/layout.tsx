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
      <body className='relative bg-gray-dark'>
        <div className='absolute top-0 z-20 w-full'>
          <Header />
        </div>
        {children}
        <footer className='h-32'></footer>
      </body>
    </html>
  );
}
