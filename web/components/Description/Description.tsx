'use client';
import { Text, useComputedColorScheme, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { NextFont } from 'next/dist/compiled/@next/font';
import React from 'react';

export function Description({ font }: { font: NextFont }) {
  const theme = useComputedColorScheme();
  const isTablet = useMediaQuery('(max-width: 769px)');

  return (
    <Box mt={50} style={{ width: '500px', maxWidth: '90vw' }}>
      <Text
        style={{ lineHeight: 1.2, fontSize: isTablet ? '18px' : '22px', ...font.style }}
        // size={'xl'}
        maw={600}
        c={'white'}
        fw={500}
      >
        A community of AI founders, engineers and researchers. Join our community and monthly
        meetups at Startuplab in Oslo, Norway.
      </Text>
    </Box>
  );
}
