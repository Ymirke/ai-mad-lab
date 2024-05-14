'use client';
import { Text, useComputedColorScheme, Box } from '@mantine/core';
import React from 'react';

export function Description() {
  const x = useComputedColorScheme();

  return (
    <Box mt={50}>
      <Text
        style={{ lineHeight: 1.2, fontSize: '2rem' }}
        // size={'xl'}
        maw={600}
        c={x === 'light' ? '#000' : '#fff'}
        fw={500}
      >
        A community of AI founders, engineers and researchers. Join our community and attend our
        monthly meetups at Start-up Lab in Oslo, Norway.
      </Text>
    </Box>
  );
}
