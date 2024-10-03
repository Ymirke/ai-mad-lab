import { Container, Flex, Title, Text } from '@mantine/core';

export function Program2024() {
  return (
    <Container mt={100} style={{ color: 'white' }}>
      <Flex direction={'column'} gap={10}>
        <Title>Program</Title>
        <Text mt={10} fw={700}>
          Welcome
        </Text>
        <Text>14:30 Doors open and registration</Text>
        <Text>14:45 Grab a drink and network with all the awesome people</Text>
        <Text>
          15:15 How to become investable and raise venture funding with Unlisted.ai [Room 6]
        </Text>
        <Text>15:15 Unfair Advantage with Amazon Web Services [Room 7]</Text>
        <Text>16:00 Introduction to Al Mad Lab Summit, Team and Partners.</Text>
        <Text mt={10} fw={700}>
          Builder Stories - 1
        </Text>
        <Text>16:15 What you can build with nine years of R&D with Anita, CEO @ Iris.Al</Text>
        <Text>16:30 How to build apps with chain-of-thought with Martin, CTO @ Databutton</Text>
        <Text>
          16:45 How to use Al to fight financial crime with Patrick Skjennum, CTO @ Strise
        </Text>
        <Text>17:00 Half Hour Break</Text>
        <Text mt={10} fw={700}>
          Builder Stories - 2
        </Text>
        <Text>17:30 How to make the internet safe with Al with Hege Tokerud, CEO @ Aiba</Text>
        <Text>17:45 Inspiring curiosity with Frikk Fossan, CTO @ Curipod</Text>
        <Text>
          18:00 Generative Al for creative with Fredrik Thomassen, CEO and Jing Kjeldsen, CTO @
          Superside
        </Text>
        <Text>18:15 Half Hour Break</Text>
        <Text mt={10} fw={700}>
          Developer Fireside
        </Text>
        <Text>
          18:50 Al 3.0: What happens post transformers? Developer Fireside with Google and Meta
        </Text>
        <Text>19:20 Outro to Summit, Team, and Partners</Text>
        <Text>19:30 Networking</Text>
        <Text>Doors close at 20:00</Text>
      </Flex>
    </Container>
  );
}
