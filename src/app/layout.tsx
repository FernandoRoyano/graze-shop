import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Store',
  description: 'Your trusted online store for quality products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
