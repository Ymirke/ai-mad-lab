'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Text, ContainerProps, Flex } from '@mantine/core';
import { IconArrowUpRight, IconCircleFilled as IconCircle } from '@tabler/icons-react';

const IconCircleFilled = () => (
  <Flex justify={'center'} align={'center'}>
    <IconCircle size={14} />
  </Flex>
);

const elements: React.ReactNode[] = [
  <IconCircleFilled />,
  <>
    <Text fw={900}>AI Mad Lab Summit</Text>
  </>,
  <IconCircleFilled />,
  <>
    <Text fw={900}>Limited seats</Text>
  </>,
  <IconCircleFilled />,
  <>
    <Text fw={900}>Get yours now</Text>
  </>,
  <IconCircleFilled />,
  <>
    <Text fw={900}>24th of October</Text>
  </>,
  <IconCircleFilled />,
  <>
    <Text fw={900}>FREE!</Text>
  </>,
  <IconCircleFilled />,
  <>
    <IconArrowUpRight />
    <IconArrowUpRight />
    <IconArrowUpRight />
    <IconArrowUpRight />
  </>,
];

export function SummitBanner2({ ...props }: ContainerProps) {
  const elementWidth = 910;
  const duration = 10; // Adjust the duration as needed

  const motionVariants = {
    animate: {
      x: [0, -elementWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: duration,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <Box
      {...props}
      onClick={() => window.open('https://lu.ma/wxkp0tcf')}
      style={{
        cursor: 'pointer',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: '3.25rem',
        backgroundImage: 'url(/summit-banner.png)',
        overflow: 'hidden',
      }}
    >
      <motion.div
        variants={motionVariants}
        animate="animate"
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          marginTop: '16px',
          marginBottom: '16px',
        }}
      >
        <Flex gap={10}>
          {[...elements, ...elements, ...elements].map((Element, index) => (
            <Flex style={{ color: '#000' }} key={index}>
              {Element}
            </Flex>
          ))}
        </Flex>
      </motion.div>
    </Box>
  );
}
