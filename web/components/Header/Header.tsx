'use client';
import {
  ActionIcon,
  Flex,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import React from 'react';

export function Header() {
  const x = useComputedColorScheme();
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Flex justify={'space-between'}>
      <Title c={x === 'light' ? 'black' : 'white'}>AI MAD LAB</Title>
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
