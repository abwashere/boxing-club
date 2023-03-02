import '@/styles/globals.css';

export const metadata = {
  title: 'Villejuif Boxing Club',
  description: 'VBC content manager',
  icons: {
    icon: 'https://www.sanity.io/static/images/favicons/favicon-32x32.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <body>{children}</body>
    </html>
  );
}
