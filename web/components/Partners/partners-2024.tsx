import { Container, Flex, Title } from '@mantine/core';

export function Partners2024() {
  return (
    <Container pb={100} size="sm">
      <Flex direction={'column'}>
        <Title mb={50} mt={10} ta="center" c="white" order={2}>
          Made 100% free for the community by:
        </Title>
        <img style={{ filter: 'brightness(0.75)' }} src="/2024/partners.png" />
      </Flex>
    </Container>
  );
}
