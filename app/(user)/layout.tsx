import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Villejuif Boxing Club',
  description: 'Fake Boxing Club Website',
  icons: {
    icon: '/images/cropped-logo-usv-32x32.png',
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
      <body
        className={`relative min-h-screen bg-gray-dark ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
