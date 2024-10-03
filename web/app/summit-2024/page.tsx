'use client';
import localFont from 'next/font/local';
import { Box, Container, Title, Text, Center, SimpleGrid } from '@mantine/core';
import { Speaker, SpeakerCard } from '@/components/SpeakerCard/SpeakerCard';
import { Program2024 } from '@/components/Program/2024-program';
import { Partners2024 } from '@/components/Partners/partners-2024';
import Head from 'next/head';

const speakers: Speaker[] = [
  {
    name: 'Anita Schjøll Abildgaard',
    title: 'CEO',
    company: 'Iris.ai',
    image: '/2024/Anita Schjøll Abildgaard.png',
  },
  {
    name: 'Martin Skov Røed',
    title: 'CTO',
    company: 'Databutton',
    image: '/2024/Martin Skov Røed.png',
  },
  {
    name: 'Patrick Skjennum',
    title: 'CTO',
    company: 'Strise.ai',
    image: '/2024/Patrick Skjennum.png',
  },
  {
    name: 'Hege Tokerud',
    title: 'CEO',
    company: 'Aiba.ai',
    image: '/2024/Hege Tokerud.png',
  },
  {
    name: 'Frikk Fossan',
    title: 'CTO',
    company: 'Curipod',
    image: '/2024/Frikk Fossan.png',
  },
  {
    name: 'Fredrik Thomassen',
    title: 'CEO',
    company: 'Superside',
    image: '/2024/Fredrik Thomassen.png',
  },
  {
    name: 'Jing Kjeldsen',
    title: 'CTO',
    company: 'Superside',
    image: '/2024/Jing Kjeldsen.png',
  },
];

const firesideChat: Speaker[] = [
  {
    name: 'Ola Torudbakken',
    title: 'Engineering Director',
    company: 'Meta',
    image: '/2024/Ola Torudbakken.png',
  },
  {
    name: 'Sina Nek Akhtar',
    title: 'Tech Lead',
    company: 'Google',
    image: '/2024/Sina Nek Akhtar.png',
  },
];

const gothamBold = localFont({ src: '../../fonts/Gotham-Bold.otf' });

export default function Ticket() {
  return (
    <>
      <Head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </Head>
      <Container pt={50}>
        <Title ta="center" order={1} style={{ color: 'white', ...gothamBold.style }}>
          AI MAD LAB Summit 2024
        </Title>
        <Text ta="center" style={{ color: 'white', ...gothamBold.style }}>
          24th of October, Oslo, StartupLab
        </Text>
        <Title mt={60} ta="center" order={2} style={{ color: 'white', ...gothamBold.style }}>
          Speakers
        </Title>
        <SimpleGrid mt={15} cols={{ base: 1, sm: 2 }}>
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} speaker={speaker} />
          ))}
        </SimpleGrid>
        <Title mt={60} ta="center" order={2} style={{ color: 'white', ...gothamBold.style }}>
          Developer Fireside
        </Title>
        <SimpleGrid mt={15} cols={{ base: 1, sm: 2 }}>
          {firesideChat.map((speaker) => (
            <SpeakerCard key={speaker.name} speaker={speaker} />
          ))}
        </SimpleGrid>
        <Program2024 />
        {/* <SpeakerCard speaker={speaker} /> */}
        <Title mt={100} ta="center" order={2} style={{ color: 'white', ...gothamBold.style }}>
          Click to apply for a ticket
        </Title>
        <Center mt={30} mb={30}>
          <img
            onClick={() => {
              window.open('https://lu.ma/wxkp0tcf', '_blank');
            }}
            style={{ width: '512px', maxWidth: '100%', cursor: 'pointer' }}
            src="/2024/ticket.png"
          />
        </Center>
        <Title
          c="dark.3"
          mt={0}
          mb={100}
          ta="center"
          order={4}
          style={{ color: 'white', ...gothamBold.style }}
        >
          Participants are selected.
          <br></br>
          There is an emphasis on founders, builders and developers.
        </Title>
      </Container>
      <Partners2024 />
      <Box
        // should be added to html as css
        style={{
          zIndex: -1,
          backgroundColor: 'black',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </>
  );
}
