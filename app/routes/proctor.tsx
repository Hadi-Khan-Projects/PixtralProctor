import { useState, useEffect } from "react";
import { Flex, Paper, Title, useMantineTheme } from "@mantine/core";
import { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData, useSearchParams } from "@remix-run/react";
import { videoService } from "~/backend/video-stream.server";
import UserVideoGrid from "~/components/user-grid/user-grid";
import UserSelectedVideo from "~/components/user-selected-video.tsx/user-selected-video";

export async function loader({ request }: LoaderFunctionArgs) {
  const searchParams = new URLSearchParams(request.url.split("?")[1]);
  const userName = searchParams.get("userName") || "";

  const videoSources = await videoService.getVideoSources();

  let selectedVideoSource;
  if (userName) {
    selectedVideoSource = videoSources.find(
      (source) => source.userName === userName
    );
  }

  return json({ userName, videoSources, selectedVideoSource });
}

export default function ProctorPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const data = useLoaderData<typeof loader>();
  const theme = useMantineTheme();

  // State to control the height of the top-left component
  const [topLeftHeight, setTopLeftHeight] = useState("15%");

  useEffect(() => {
    // Update the height based on whether a video is selected
    if (data.selectedVideoSource) {
      setTopLeftHeight("50%");
    } else {
      setTopLeftHeight("15%");
    }
  }, [data.selectedVideoSource]);

  const onUserSelect = (userName: string) => {
    if (userName === data.userName) {
      searchParams.delete("userName");
      setSearchParams(searchParams);
    } else {
      searchParams.set("userName", userName);
      setSearchParams(searchParams);
    }
  };

  return (
    <>
      <Paper
        style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: `1px solid ${theme.colors.grey4[1]}`,
          overflow: "auto",
        }}
        bg="grey8"
      >
        <Title c="white" size="1.5rem">Pixtral Proctor</Title>
      </Paper>
      <div
        style={{
          borderRadius: "0",
          height: "calc(100vh - 60px)",
          backgroundColor: theme.colors.orange[1],
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <Flex
          style={{
            flex: 1,
            overflow: "auto",
          }}
          p="sm"
        >
          {/* Left */}
          <Flex
            direction="column"
            style={{
              flex: 5,
              minHeight: 0,
            }}
          >
            {/* Top Left */}
            <Paper
              style={{
                height: topLeftHeight,
                transition: "height 0.5s ease-in-out",
                minHeight: 0,
              }}
              bg="white"
              radius="10px"
              m="xs"
              p="xl"
              withBorder
              bd="2px solid grey4"
              shadow="xl"
            >
              <UserSelectedVideo
                selectedVideoSource={data.selectedVideoSource}
                onDeselectUser={() => onUserSelect(data.userName)}
              />
            </Paper>
            {/* Bottom Left */}
            <Paper
              style={{
                flex: 1,
                minHeight: 0,
                overflow: "auto", // Changed from "hidden" to "auto"
              }}
              bg="white"
              radius="10px"
              m="xs"
              p="xl"
              withBorder
              bd="2px solid grey4"
              shadow="xl"
            >
              <UserVideoGrid
                selectedUserName={data.userName}
                onUserSelect={onUserSelect}
                videoSources={data.videoSources}
              />
            </Paper>

          </Flex>

          {/* Right */}
          <Flex
            direction="column"
            style={{ flex: 2, minHeight: 0 }}
          >
            {/* Top Right */}
            <Paper
              style={{
                flex: 2,
                minHeight: 0,
              }}
              radius="10px"
              bg="white"
              m="xs"
              p="xl"
              withBorder
              bd="2px solid grey4"
              shadow="xl"
            >
              Right Top
            </Paper>
            {/* Bottom Right */}
            <Paper
              style={{ flex: 1, minHeight: 0 }}
              radius="10px"
              bg="white"
              m="xs"
              p="xl"
              withBorder
              bd="2px solid grey4"
              shadow="xl"
            >
              Right Bottom
            </Paper>
          </Flex>
        </Flex>
      </div>
    </>
  );
}