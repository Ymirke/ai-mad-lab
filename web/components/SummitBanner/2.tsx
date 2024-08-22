'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Text, ContainerProps, Flex } from '@mantine/core';
import { IconArrowUpRight, IconCircleFilled } from '@tabler/icons-react';

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
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    setTotalWidth(window.visualViewport?.width || 0);
  }, []);

  const elementWidth = 910;
  const containerWidth = totalWidth;
  const duration = 20; // Adjust the duration as needed

  const motionVariants = {
    animate: {
      x: [-elementWidth, -elementWidth * 2],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: (duration * elementWidth) / containerWidth,
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
        height: '80px',
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
          marginTop: '24px',
          marginBottom: '24px',
        }}
      >
        <Flex gap={10}>
          {[...elements, ...elements].map((Element, index) => (
            <Flex style={{ color: '#000' }} key={index}>
              {Element}
            </Flex>
          ))}
        </Flex>
      </motion.div>
    </Box>
  );
}
