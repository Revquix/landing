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
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    alternates: {
        canonical: 'https://revquix.com',
    },
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'REVQUIX | Custom Software Development & AI Solutions Agency',
        description: 'Expert software development agency specializing in custom web applications, mobile apps, AI/ML integration, and tech consulting. Transform your business with cutting-edge solutions.',
        url: 'https://revquix.com',
        siteName: 'REVQUIX',
        images: [
            {
                url: 'https://revquix.com/og-image.png', // Use absolute URL
                width: 1200,
                height: 630,
                alt: 'REVQUIX Software Development Agency - Custom Web & Mobile Solutions',
                type: 'image/png',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    // Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'REVQUIX | Custom Software Development & AI Solutions Agency',
        description: 'Expert software development agency specializing in custom web applications, mobile apps, AI/ML integration, and tech consulting.',
        images: ['https://revquix.com/og-image.png'], // Use absolute URL
        creator: '@revquix', // Add if you have a Twitter handle
        site: '@revquix',
    }
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