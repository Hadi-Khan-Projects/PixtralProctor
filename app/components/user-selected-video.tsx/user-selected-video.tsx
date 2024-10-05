/* eslint-disable jsx-a11y/media-has-caption */
import {
  Badge,
  Flex,
  Group,
  Paper,
  PaperProps,
  Text,
  Button,
  Center,
  useMantineTheme,
} from "@mantine/core";
import { VideoSource } from "~/types";
import { IconPointer } from "@tabler/icons-react";

type UserSelectedVideoProps = {
  selectedVideoSource?: VideoSource;
  onDeselectUser: () => void;
} & PaperProps;

export default function UserSelectedVideo({
  selectedVideoSource,
  onDeselectUser,
  ...props
}: UserSelectedVideoProps) {
  const theme = useMantineTheme();

  return selectedVideoSource ? (
    <Paper
      radius="8px"
      p="md"
      bg={selectedVideoSource.cheatCurrently ? "redLight" : "grey1"}
      withBorder
      bd="4px solid blue"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}
      {...props}
    >
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
        <video
          src={selectedVideoSource.srcWebcam}
          autoPlay
          loop
          style={{
            flex: 1,
            minWidth: 0,
            borderRadius: "8px",
            objectFit: "cover",
            aspectRatio: "16/9",
          }}
        />
        <video
          src={selectedVideoSource.srcScreen}
          autoPlay
          loop
          style={{
            flex: 1,
            minWidth: 0,
            borderRadius: "8px",
            objectFit: "cover",
            aspectRatio: "16/9",
          }}
        />
      </Flex>
      <Flex direction="row" pt="0.8em" justify="space-between">
        <Button
          size="md"
          radius="8px"
          color="blue"
          onClick={onDeselectUser}
        >
          {selectedVideoSource.userName}
        </Button>
        <Group gap="xs">
          <Text size="lg">Potential Cheats:</Text>
          <Badge
            size="lg"
            w="3rem"
            h="2.5rem"
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
      </Flex>
    </Paper>
  ) : (
    <Paper
      radius="8px"
      p="xs"
      bg="grey1"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}
      {...props}
      withBorder
      bd="1px solid grey4"
    >
      <Center style={{ flex: 1 }}>
        <Group>
          <IconPointer color={theme.colors.blue[1]} size="1.8rem"/>
          <Text size="1.5rem" c="blue" fw={700}>
            Select a user to view their video
          </Text>
        </Group>
      </Center>
    </Paper>
  );
}
