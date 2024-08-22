'use client';
import { Box, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import classes from './Sphere.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { NextFont } from 'next/dist/compiled/@next/font';

export function Sphere({ initialGlobeCount, font }: { initialGlobeCount: number; font: NextFont }) {
  const [videoSrc, setVideo] = useState('');
  const [count, setCount] = useState(initialGlobeCount);

  async function increaseGlobeCount() {
    try {
      const res = await fetch('https://www.aimadlab.com/api/click-count/add', {
        method: 'GET',
      });

      const { data } = await res.json();

      if (typeof data === 'number') {
        setCount(data);
      }
    } catch (err) {
      console.error('increaseGlobeCountError', err);
    }
  }

  function setRandomSphere() {
    const max = 6;

    const randomNum = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    const url = `/sphere-${randomNum}.mp4`;
    setVideo(url);
  }

  useEffect(() => {
    setRandomSphere();
  }, []);

  return (
    <Box
      bg="black"
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
      }}
    >
      <Text
        c="white"
        style={{
          ...font.style,
          position: 'absolute',
          left: 20,
          zIndex: 9999,
          writingMode: 'vertical-lr',
          transform: 'rotate(180deg)',
        }}
      >
        {count} Clicks
      </Text>
      <AnimatePresence>
        <motion.video
          key={videoSrc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.75, ease: 'easeInOut' },
            exit: { duration: 0 }, // Instant exit
          }}
          className={classes.video}
          loop
          muted
          autoPlay
          playsInline
          onClick={() => {
            setRandomSphere();
            increaseGlobeCount();
          }}
          src={videoSrc}
        />
      </AnimatePresence>
    </Box>
  );
}
