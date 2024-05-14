'use client';
import { Box, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';

export function Sphere() {
  const [img, setImg] = useState('');
  const isMobile = useMediaQuery('(max-width: 768px)');

  function setRandomSphere() {
    const randomNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    const url = `/sphere-${randomNum}.png`;
    setImg(url);
  }

  useEffect(() => {
    setRandomSphere();
  }, []);

  return (
    <Box
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
      <img
        style={{
          cursor: 'pointer',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '80vw',
          height: 'auto',
        }}
        onClick={() => {
          setRandomSphere();
        }}
        src={img}
      />
    </Box>
  );
}
