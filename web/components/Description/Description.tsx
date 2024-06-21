'use client';
import { Text, useComputedColorScheme, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { NextFont } from 'next/dist/compiled/@next/font';
import React from 'react';

export function Description({ font }: { font: NextFont }) {
  const theme = useComputedColorScheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box mt={50} style={{ width: '500px', maxWidth: '90vw' }}>
      <Text
        style={{ lineHeight: 1.2, fontSize: isMobile ? '24px' : '22px', ...font.style }}
        // size={'xl'}
        maw={600}
        c={'white'}
        fw={500}
      >
        A community of AI founders, engineers and researchers. Join our community and monthly
        meetups at Startup Lab in Oslo, Norway.
      </Text>
    </Box>
  );
}
