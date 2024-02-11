import type { Metadata } from 'next';
import clsx from 'clsx';

import { AppNotificationToaster, Footer, MainHeader } from '@/components';
import { openSans } from '../lib/ui/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'EmpowerKids Zone',
  description:
    'Welcome to our bullying support website. Find resources, guidance, and support for dealing with bullying.',
  keywords: [
    'bullying',
    'support',
    'resources',
    'guidance',
    'help',
    'prevention',
    'intervention',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          openSans.className,
          'flex h-screen flex-col justify-between bg-septenary'
        )}
      >
        <MainHeader />
        <div>{children}</div>

        <Footer />
        <AppNotificationToaster />
      </body>
    </html>
  );
}
