import Header from '@/features/Header';
import MainWrapper from '@/features/MainWrapper';
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
      <body>
        <Header />
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
