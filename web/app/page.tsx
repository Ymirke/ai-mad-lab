import { Header } from '@/components/Header/Header';
import { Box, Container } from '@mantine/core';
import { Description } from '@/components/Description/Description';
import { Sphere } from '@/components/Sphere/Sphere';
import { Links } from '@/components/Links/Links';
import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
const gothamBlack = localFont({ src: '../fonts/Gotham-Black.otf' });
const gothamMedium = localFont({ src: '../fonts/Gotham-Medium.otf' });
const gothamBook = localFont({ src: '../fonts/Gotham-Book.otf' });

export default function HomePage() {
  return (
    <>
      <Box p={30}>
        <Header font={gothamBlack} />
        <Description font={gothamMedium} />
        <Sphere />
        <Links font={gothamBook} />
        {/* <Welcome /> */}
        {/* <ColorSchemeToggle /> */}
      </Box>
    </>
  );
}
