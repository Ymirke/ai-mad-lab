import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import '@/styles/.global.css';

export const metadata = {
  title: 'AI Mad Lab',
  description:
    'AI founders, engineers and researchers. Join our community and attend our monthly meetups at StartupLab in Oslo, Norway.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" forceColorScheme="dark" />
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="AI Mad Lab" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="Fav_64.gif" type="image/gif" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta property="og:image" content="https://aimadlab.com/2024/opengraph-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
