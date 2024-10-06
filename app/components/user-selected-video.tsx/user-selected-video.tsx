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
import { useEffect, useRef } from "react"; // Import useEffect and useRef
import { Mistral } from "@mistralai/mistralai";

type UserSelectedVideoProps = {
  selectedVideoSource?: VideoSource;
  onDeselectUser: () => void;
};

const p1 = "y5dmD6mx6KJoKSkh";
const p2 = "KV8Uub9wrmwjz4A0";
const client = new Mistral({ apiKey: `${p1}${p2}` });

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // Event handler executed when the reading operation is successfully completed
      reader.onloadend = () => {
          const dataUrl = reader.result as string;

          // Extract the base64 encoded string from the data URL
          const base64 = dataUrl.split(',')[1];
          resolve(base64);
      };

      // Event handler executed if an error occurs during the reading operation
      reader.onerror = (error) => {
          reject(error);
      };

      // Initiate reading the Blob as a Data URL (base64)
      reader.readAsDataURL(blob);
  });
}


const processImage = async (imageData: Blob | null, name: string) => {
  if (name != "Conrad Khakhria" || imageData == null) {
    return;
  }

  const image = await blobToBase64(imageData);
  const response = await client.chat.complete({
    model: "pixtral-12b-2409",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Describe the contents of this image in a short sentence"
          },
          {
            type: "image_url",
            imageUrl: `data:image/png;base64,${image}`
          }
        ],
      },
    ]
  });

  console.log(response);
}


export default function UserSelectedVideo({
  selectedVideoSource,
  onDeselectUser,
}: UserSelectedVideoProps) {
  const theme = useMantineTheme();

  // Refs for the webcam video and canvas
  const webcamVideoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const captureIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only set up the capture if a user is selected
    if (selectedVideoSource) {
      const videoElement = webcamVideoRef.current;
      const canvasElement = canvasRef.current;

      if (videoElement && canvasElement) {
        const context = canvasElement.getContext("2d");

        // Ensure the canvas dimensions match the video dimensions
        const setCanvasDimensions = () => {
          canvasElement.width = videoElement.videoWidth;
          canvasElement.height = videoElement.videoHeight;
        };

        videoElement.addEventListener("loadedmetadata", setCanvasDimensions);

        // Capture frames at 4 times per second
        captureIntervalRef.current = setInterval(() => {
          // Draw the current video frame onto the canvas
          context?.drawImage(
            videoElement,
            0,
            0,
            canvasElement.width,
            canvasElement.height
          );

          canvasElement.toBlob(blob => processImage(blob, selectedVideoSource.userName));
        }, 4000); // 250ms intervals (4 times per second)

        // Clean up event listener and interval on unmount or when selectedVideoSource changes
        return () => {
          videoElement.removeEventListener("loadedmetadata", setCanvasDimensions);
          if (captureIntervalRef.current) {
            clearInterval(captureIntervalRef.current);
          }
        };
      }
    }
  }, [selectedVideoSource]);

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
            ref={webcamVideoRef} // Reference to the webcam video element
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
          {/* Hidden canvas for capturing frames */}
          <canvas ref={canvasRef} style={{ display: "none" }} />
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
