/* eslint-disable jsx-a11y/media-has-caption */
import {
  Badge,
  Flex,
  Group,
  Paper,
  Text,
  Button,
  Center,
  useMantineTheme,
} from "@mantine/core";
import { VideoSource } from "~/types";
import { IconPointer, IconVolume } from "@tabler/icons-react";


type UserSelectedVideoProps = {
  selectedVideoSource?: VideoSource;
  onDeselectUser: () => void;
};

export default function UserSelectedVideo({
  selectedVideoSource,
  onDeselectUser,
}: UserSelectedVideoProps) {
  const theme = useMantineTheme();

  return selectedVideoSource ? (
    <Flex
      direction="column"
      style={{ flex: 1, minHeight: 0, height: "100%" }}
    >
      {/* Top row with two Papers */}
      <Flex direction="row" justify="space-between" align="center" mb="md">
        {/* Top left Paper */}
        <Paper p="xs" radius="8px" withBorder bd="3px solid blue" bg="grey1">
          <Group>
            <Text size="lg" pb="0.1rem" fw={700}>
              Currently inspecting:
            </Text>
            <Button
              size="sm"
              radius="8px"
              color="blue"
              onClick={onDeselectUser}
            >
              {selectedVideoSource.userName}
            </Button>
          </Group>
        </Paper>
        {/* Top right Papers */}
        <Group>
          <Paper
            p="xs"
            radius="8px"
            withBorder
            bd="1px solid grey4"
            h="3.35rem"
            w="3.35rem"
            bg={selectedVideoSource.cheats.audio ? "redLight" : "grey1"}
          >
            <Center style={{ height: "100%" }}>
              <IconVolume size={24} color="black" />
            </Center>
          </Paper>
          <Paper
            p="xs"
            radius="8px"
            withBorder
            bd="1px solid grey4"
            bg="grey1"
          >
            <Group>
              <Text>Number of potential cheats:</Text>
              <Badge
                size="mlg"
                w="2.5rem"
                h="2rem"
                radius="8px"
                color={
                  selectedVideoSource.cheatCount > 4
                    ? "red"
                    : selectedVideoSource.cheatCount > 0
                    ? "yellow"
                    : "green"
                }
              >
                {selectedVideoSource.cheatCount}
              </Badge>
            </Group>
          </Paper>
        </Group>
      </Flex>
      {/* Flex container to arrange videos side by side */}
      <Flex
        direction="row"
        gap="md"
        style={{
          width: "100%",
          boxSizing: "border-box",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Left video: Screen */}
        <Paper
          p="sm"
          radius="8px"
          withBorder
          bd="1px solid grey4"
          bg={selectedVideoSource.cheats.screen ? "redLight" : "grey1"}
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          <video
            src={selectedVideoSource.srcScreen}
            autoPlay
            loop
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              borderRadius: "8px",
              objectFit: "cover",
              aspectRatio: "16/9",
              minHeight: 0,
            }}
          />
          <Text ta="center" mt="sm">
            Screen
          </Text>
        </Paper>
        {/* Right video: Webcam */}
        <Paper
          p="sm"
          radius="8px"
          withBorder
          bd="1px solid grey4"
          bg={selectedVideoSource.cheats.webcam ? "redLight" : "grey1"}
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          <video
            src={selectedVideoSource.srcWebcam}
            autoPlay
            loop
            muted
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              borderRadius: "8px",
              objectFit: "cover",
              aspectRatio: "16/9",
              minHeight: 0,
            }}
          />
          <Text ta="center" mt="sm">
            Webcam
          </Text>
        </Paper>
      </Flex>
    </Flex>
  ) : (
    <Paper
      radius="8px"
      p="xs"
      bg="grey1"
      bd="1px solid grey4"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}
      withBorder
    >
      <Center style={{ flex: 1 }}>
        <Group>
          <IconPointer color={theme.colors.blue[1]} size="1.5rem" />
          <Text size="1.2rem" color="blue" fw={700}>
            Select a user to inspect their webcam, screen, audio, cheat logs, and
            to send a message.
          </Text>
        </Group>
      </Center>
    </Paper>
  );
}
