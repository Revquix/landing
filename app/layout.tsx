import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'REVQUIX - Software Development Agency',
    description: 'Transform your ideas into digital reality with cutting-edge web development, mobile apps, AI integration, and tech stack tutoring services.',
    keywords: 'web development, app development, AI integration, tech tutoring, software development, digital agency, java development, spring boot, backend development, mobile development, fullstack development, fullstack, freelance, freelancer',
    authors: [{name: 'REVQUIX'}],
    viewport: 'width=device-width, initial-scale=1',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'REVQUIX - Software Development Agency',
        description:
            'Transform your ideas into digital reality with cutting-edge web development, mobile apps, AI integration, and tech stack tutoring services.',
        url: 'https://revquix.com',
        siteName: 'REVQUIX',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'REVQUIX - Digital Innovation Development',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    // 🐦 Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'REVQUIX - Software Development Agency',
        description:
            'Transform your ideas into digital reality with cutting-edge web development, mobile apps, AI integration, and tech stack tutoring services.',
        images: ['/og-image.png'],
    },
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