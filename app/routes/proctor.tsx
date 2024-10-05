import { Flex, Paper } from "@mantine/core";
import { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData, useSearchParams } from "@remix-run/react";
import { videoService } from "~/backend/video-stream.server";
import UserVideoGrid from "~/components/user-grid/user-grid";
import UserSelectedVideo from "~/components/user-selected-video.tsx/user-selected-video";


export async function loader({
  request,
}: LoaderFunctionArgs) {
  // get the userName from searchParams
  const searchParams = new URLSearchParams(request.url.split('?')[1]);
  const userName = searchParams.get('userName') || "";

  // get the video sources
  const videoSources = await videoService.getVideoSources();

  let selectedVideoSource;
  if (userName) {
    selectedVideoSource = videoSources.find((source) => source.userName === userName);
  }

  return json({ userName, videoSources, selectedVideoSource });
}


export default function ProctorPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const data = useLoaderData<typeof loader>();

  const onUserSelect = (userName: string) => {
    if (userName === data.userName) {
      searchParams.delete('userName');
      setSearchParams(searchParams);
    } else {
      searchParams.set('userName', userName);
      setSearchParams(searchParams);
    }
  };

  // Two Columns, Two Rows in each column
  // row1:row2 = 2:1
  // row1col1:row1col2 = 2:5
  // row2col1:row2col2 = 1:1

  return (
    <Flex style={{ height: '100vh' }} p="md">
      {/* Left */}
      <Flex
        direction="column"
        style={{
          flex: 2,
          // borderRight: `20px solid ${theme.colors.grey4[1]}`,
          minHeight: 0, // Allow flex items to shrink
        }}
      >
        {/* Top Left */}
        <Paper
          style={{
            flex: 4,
            // borderBottom: `20px solid ${theme.colors.grey4[1]}`,
            minHeight: 0,
          }}
          bg="grey1"
          radius="10px"
          m="sm"
          p="md"
        >
          <UserSelectedVideo selectedVideoSource={data.selectedVideoSource} />
        </Paper>
        {/* Bottom Left */}
        <Paper
          style={{
            flex: 5,
            minHeight: 0,
            overflow: 'hidden', // Prevent content from affecting layout
          }}
          bg="grey4"
          radius="10px"
          m="sm"
          p="md"
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
        style={{ flex: 1, minHeight: 0 }} // Allow flex items to shrink
      >
        {/* Top Right */}
        <Paper
          style={{
            flex: 5,
            // borderBottom: `20px solid ${theme.colors.grey4[1]}`,
            minHeight: 0,
          }}
          radius="10px"
          bg="redLight"
          m="sm"
          p="md"
        >
          Right Top
        </Paper>
        {/* Bottom Right */}
        <Paper
          style={{ flex: 3, minHeight: 0 }}
          radius="10px"
          bg="orangeLight"
          m="sm"
          p="md"
        >
          Right Bottom
        </Paper>
      </Flex>
    </Flex>
  );
}
