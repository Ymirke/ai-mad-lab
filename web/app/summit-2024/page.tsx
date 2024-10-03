import Ticket from './actual-page';
import ogImage from './opengraph-image.png';

export const metadata = {
  metadataBase: new URL('https://aimadlab.com/summit-2024'),
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

export default function Page() {
  return <Ticket />;
}
