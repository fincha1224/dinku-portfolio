import type { Metadata, Viewport } from 'next';
import '@fontsource/newsreader/400.css';
import '@fontsource/newsreader/500.css';
import '@fontsource/newsreader/400-italic.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import './globals.css';
import { SITE_URL } from './site';

const description =
  'Dinku Adale — technology leader and AI systems architect. Six years of security consulting at Accenture, builder of AI platforms at Atronus Technologies, with a foundation in chemical manufacturing and petroleum laboratory quality.';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dinku Adale',
  jobTitle: 'Technology Leader & AI Systems Architect',
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.png`,
  email: 'mailto:info@atronus.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
  worksFor: { '@type': 'Organization', name: 'Atronus Technologies', url: 'https://atronus.com' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Howard University' },
    { '@type': 'CollegeOrUniversity', name: 'Western Governors University' },
    { '@type': 'CollegeOrUniversity', name: 'Addis Ababa University' },
  ],
  knowsAbout: [
    'Enterprise AI architecture', 'Cybersecurity', 'Identity and access management', 'Data loss prevention',
    'ISO/IEC 17025', 'ISO 9001', 'Petroleum and fuel quality', 'Chemical manufacturing', 'Alkyd resins and coatings',
  ],
  sameAs: ['https://www.linkedin.com/in/dinkuadale/'],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Dinku Adale — Technology Leader & AI Systems Architect',
  description,
  openGraph: {
    title: 'Dinku Adale — Technology Leader & AI Systems Architect',
    description,
    type: 'profile',
    url: SITE_URL,
  },
  twitter: { card: 'summary_large_image', title: 'Dinku Adale', description },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = { themeColor: '#0f1c2e' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        {children}
      </body>
    </html>
  );
}
