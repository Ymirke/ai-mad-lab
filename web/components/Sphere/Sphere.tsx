'use client';
import { Box } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import classes from './Sphere.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export function Sphere() {
  const [videoSrc, setVideo] = useState('');

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
      <AnimatePresence>
        <motion.video
          key={videoSrc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: .75, ease: 'easeInOut' },
            exit: { duration: 0 }, // Instant exit
          }}
          className={classes.video}
          loop
          muted
          autoPlay
          playsInline
          style={{
            cursor: 'pointer',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '70vw',
            width: 'auto',
            outline: '100px solid black',
            borderRadius: '1000px',
            position: 'absolute', // Ensures overlapping videos
          }}
          onClick={() => {
            setRandomSphere();
          }}
          src={videoSrc}
        />
      </AnimatePresence>
    </Box>
  );
}
