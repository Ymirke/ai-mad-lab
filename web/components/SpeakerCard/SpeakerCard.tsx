import { Card, Flex, Stack, Text } from '@mantine/core';

export type Speaker = {
  name: string;
  title: string;
  company: string;
  image: string;
};

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <Card style={{ backgroundColor: 'black', color: 'white' }} withBorder>
      <Flex justify={'space-between'}>
        <Stack gap={0}>
          <Text>{speaker.name}</Text>
          <Text>{speaker.title}</Text>
          <Text>{speaker.company}</Text>
        </Stack>
        <img src={speaker.image} alt={speaker.name} style={{ width: '100px', height: '100px' }} />
      </Flex>
    </Card>
  );
}
