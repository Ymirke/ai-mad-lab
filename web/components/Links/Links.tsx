'use client';
import { Button, Flex } from '@mantine/core';
import React from 'react';
import {
  IconBrandLinkedin,
  IconBrandMeetup,
  IconBrandWhatsapp,
  IconMoodSmile,
  IconBrandX,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@mantine/hooks';
import { NextFont } from 'next/dist/compiled/@next/font';
import classes from './Links.module.css';

const links = [
  {
    label: 'Follow us',
    icon: <IconBrandX />,
    href: 'https://www.x.com/aimadlab/',
  },
  {
    label: 'Next event',
    icon: <IconBrandMeetup />,
    href: 'https://www.meetup.com/ai-mad-lab/',
  },
  {
    label: 'Join our whatsapp group',
    icon: <IconBrandWhatsapp />,
    href: 'https://chat.whatsapp.com/KshA0lKC19gCbSixi0soBr',
  },
  {
    label: 'See past events, and stay up to date',
    icon: <IconBrandLinkedin />,
    href: 'https://www.linkedin.com/company/98585366/',
  },
  {
    label: 'Want to speak at our events?',
    icon: <IconMoodSmile />,
    href: 'https://forms.gle/AfjMpWhZyaKKX7jZ7',
  },
];

export function Links({ font }: { font: NextFont }) {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 1150px)');

  return (
    <Flex
      justify={'flex-start'}
      align={'start'}
      gap={isMobile ? '.25rem' : '.25rem'}
      direction={'column'}
      style={{
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0,
        padding: '1rem',
      }}
    >
      {links.map((l) => (
        <Button
          key={l.label}
          leftSection={l.icon}
          rightSection={<img src="/arrow.svg"></img>}
          c="white"
          className={classes.button}
          bg="transparent"
          style={{ ...font.style, fontSize: '0.875rem' }}
          variant="subtle"
          onClick={() => {
            router.push(l.href);
          }}
        >
          {l.label}
        </Button>
      ))}
    </Flex>
  );
}
