'use client';
import { Text, useComputedColorScheme, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { NextFont } from 'next/dist/compiled/@next/font';
import React from 'react';

export function Description({ font }: { font: NextFont }) {
  const theme = useComputedColorScheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box mt={50}>
      <Text
        style={{ lineHeight: 1.2, fontSize: isMobile ? '1.3rem' : '2rem', ...font.style }}
        // size={'xl'}
        maw={600}
        c={theme === 'light' ? '#000' : '#fff'}
        fw={500}
      >
        A community of AI founders, engineers and researchers. Join our community and attend our
        monthly meetups at Start-up Lab in Oslo, Norway.
      </Text>
    </Box>
  );
}
