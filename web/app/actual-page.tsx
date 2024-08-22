'use client';
import { Description } from '@/components/Description/Description';
import { Header } from '@/components/Header/Header';
import { Links } from '@/components/Links/Links';
import { Sphere } from '@/components/Sphere/Sphere';
import { SummitBanner2 } from '@/components/SummitBanner/2';
import { Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import localFont from 'next/font/local';

const gothamBlack = localFont({ src: '../fonts/Gotham-Black.otf' });
const gothamMedium = localFont({ src: '../fonts/Gotham-Medium.otf' });
const gothamBook = localFont({ src: '../fonts/Gotham-Book.otf' });
const gothamLight = localFont({ src: '../fonts/Gotham-Light.otf' });

export function ActualHomePage({ globeCount }: { globeCount: number }) {
  const isTablet = useMediaQuery('(max-width: 769px)');

  return (
    <Box pt={isTablet ? 16 : 30} pr={isTablet ? 16 : 30} pl={isTablet ? 16 : 30} pb={0}>
      <Header font={gothamBlack} />
      <Description font={gothamMedium} />
      <Sphere font={gothamBook} initialGlobeCount={globeCount} />
      <Links font={gothamLight} />
      <SummitBanner2 />
    </Box>
  );
}
