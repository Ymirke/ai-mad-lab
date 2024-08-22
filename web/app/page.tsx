import { ActualHomePage } from './actual-page';

// Should make fetch request run every time someone visits the page
export const dynamic = 'force-dynamic';

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
  const initialGlobeCount = await getGlobeClickCount();

  return (
    <>
      <ActualHomePage globeCount={initialGlobeCount} />
    </>
  );
}
