import React, { FC } from 'react';
import { Poppins } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';
import MainLayout from '@/components/Layout';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Blog',
  description: 'My blog - Georgi Dimitrov Dimitrov',
};

type Props = {
  children: React.ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" className="w-full h-full bg-zinc-200">
      <body className={`${inter.className} w-full h-full`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};

export default RootLayout;
