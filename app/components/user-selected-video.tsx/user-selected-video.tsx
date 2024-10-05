/* eslint-disable jsx-a11y/media-has-caption */
import {
  Badge,
  Flex,
  Group,
  Paper,
  PaperProps,
  Text,
  Button,
} from "@mantine/core";
import { VideoSource } from "~/types";

type UserSelectedVideoProps = {
  selectedVideoSource?: VideoSource;
} & PaperProps;

export default function UserSelectedVideo({
  selectedVideoSource,
  ...props
}: UserSelectedVideoProps) {

  return selectedVideoSource ? (
    <Paper
      radius="8px"
      p="xs"
      bg={selectedVideoSource.cheatCurrently ? "redLight" : "white"}
      withBorder
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
        gap="xs"
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
      <Flex direction="row" pt="0.4em" justify="space-between">
        <Button
          size="md"
          radius="8px"
          color="blue"
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
      bg="gray"
      withBorder
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}
      {...props}
    >
      <Text size="xl">
        Select a user to view their video
      </Text>
    </Paper>
  );
}
