'use client';
import { Flex, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { NextFont } from 'next/dist/compiled/@next/font';
import React from 'react';

export function Header({ font }: { font: NextFont }) {
  const x = useComputedColorScheme();
  const { setColorScheme } = useMantineColorScheme();
  const isMobile = useMediaQuery('(max-width: 1150px)');

  return (
    <Flex justify={'space-between'}>
      <img height={isMobile ? '22px' : '36px'} src="/logo.svg" alt="AI MAD LAB" />
      {/* <Title c={'white'} style={{ ...font.style }}>
        AI Mad Lab
      </Title> */}
      {/* <ActionIcon
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
      /> */}
    </Flex>
  );
}
