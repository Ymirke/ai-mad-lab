'use client';
import { Button, Flex } from '@mantine/core';
import React from 'react';
import {
  IconBrandLinkedin,
  IconBrandMeetup,
  IconBrandWhatsapp,
  IconMoodSmile,
  IconShare3,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const links = [
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

export function Links() {
  const router = useRouter();

  return (
    <Flex gap={30} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem' }}>
      {links.map((l) => (
        <Button
          leftSection={l.icon}
          rightSection={<IconShare3 size={18} />}
          c="black"
          bg="white"
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
