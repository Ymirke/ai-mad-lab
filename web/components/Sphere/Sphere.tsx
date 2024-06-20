'use client';
import { Box, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';

export function Sphere() {
  const [videoSrc, setVideo] = useState('');
  const isMobile = useMediaQuery('(max-width: 768px)');

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
      <video
        loop
        muted
        autoPlay
        style={{
          cursor: 'pointer',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '70vw',
          height: 'auto',
          border: '100px solid black',
          borderRadius: '1000px',
        }}
        onClick={() => {
          setRandomSphere();
        }}
        src={videoSrc}
      />
    </Box>
  );
}
