'use client';
import { Container } from '@mantine/core';
import React, { useEffect, useState } from 'react';

export function Sphere() {
  const [img, setImg] = useState('');

  function setRandomSphere() {
    const randomNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    const url = `/sphere-${randomNum}.png`;
    setImg(url);
  }

  useEffect(() => {
    setRandomSphere();
  }, []);

  return (
    <Container size="xl" display={'flex'}>
      <img
        style={{ cursor: 'pointer', marginLeft: 'auto', marginRight: 'auto' }}
        onClick={() => {
          setRandomSphere();
        }}
        src={img}
      />
    </Container>
  );
}
