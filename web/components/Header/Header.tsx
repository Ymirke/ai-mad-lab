'use client';
import {
  ActionIcon,
  Flex,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { NextFont } from 'next/dist/compiled/@next/font';
import React from 'react';

export function Header({ font }: { font: NextFont }) {
  const x = useComputedColorScheme();
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Flex justify={'space-between'}>
      <Title c={'white'} style={{ ...font.style }}>
        AI Mad Lab
      </Title>
      <ActionIcon
        onClick={() => {
          if (x === 'light') {
            setColorScheme('dark');
          } else {
            setColorScheme('light');
          }
        }}
        radius="xl"
        color={x === 'light' ? '#000' : 'white'}
        // style={{ '::Hover': '' }}
      />
    </Flex>
  );
}
