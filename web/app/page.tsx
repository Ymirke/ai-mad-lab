import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Header } from '@/components/Header/Header';
import { Box, Container } from '@mantine/core';
import { Description } from '@/components/Description/Description';
import { Sphere } from '@/components/Sphere/Sphere';
import { Links } from '@/components/Links/Links';

export default function HomePage() {
  return (
    <>
      <Box p={10}>
        <Header />
        <Description />
        <Sphere />
        <Links />
        {/* <Welcome /> */}
        {/* <ColorSchemeToggle /> */}
      </Box>
    </>
  );
}
