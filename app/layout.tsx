import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'REVQUIX - Digital Innovation & Development Agency',
  description: 'Transform your ideas into digital reality with cutting-edge web development, mobile apps, AI integration, and tech stack tutoring services.',
  keywords: 'web development, app development, AI integration, tech tutoring, software development, digital agency',
  authors: [{ name: 'REVQUIX' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}