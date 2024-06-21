import { Header } from '@/components/Header/Header';
import { Box } from '@mantine/core';
import { Description } from '@/components/Description/Description';
import { Sphere } from '@/components/Sphere/Sphere';
import { Links } from '@/components/Links/Links';
import localFont from 'next/font/local';

// Should make fetch request run every time someone visits the page
export const dynamic = "force-dynamic";

const gothamBlack = localFont({ src: '../fonts/Gotham-Black.otf' });
const gothamMedium = localFont({ src: '../fonts/Gotham-Medium.otf' });
const gothamBook = localFont({ src: '../fonts/Gotham-Book.otf' });
const gothamLight = localFont({ src: '../fonts/Gotham-Light.otf' });
// const gothamThin = localFont({ src: '../fonts/Gotham-Thin.otf' });


// Getting initial globe count
async function getGlobeClickCount(): Promise<number> {
  const res = await fetch('https://www.aimadlab.com/api/click-count/get', {
    method: 'GET',
  });

  const { data } = await res.json();

  return data as number;
}

export default async function HomePage() {
  // Getting initial globe count
  const initialGlobeCount = await getGlobeClickCount();

  return (
    <>
      <Box p={30}>
        <Header font={gothamBlack} />
        <Description font={gothamMedium} />
        <Sphere font={gothamBook} initialGlobeCount={initialGlobeCount} />
        <Links font={gothamLight} />
      </Box>
    </>
  );
}
