import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'AI MAD LAB',
  description:
    'AI founders, engineers and researchers. Join our community and attend our monthly meetups at StartupLab in Oslo, Norway.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" forceColorScheme="dark" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="icon" href="Fav_64.gif" type="image/gif" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
