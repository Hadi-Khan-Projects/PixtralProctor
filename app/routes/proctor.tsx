import { useState, useEffect, useRef } from "react";
import { Flex, Paper, Title, useMantineTheme } from "@mantine/core";
import { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData, useSearchParams } from "@remix-run/react";
import { videoService } from "~/backend/video-stream.server";
import UserVideoGrid from "~/components/user-grid/user-grid";
import UserSelectedVideo from "~/components/user-selected-video.tsx/user-selected-video";
import { logService } from "~/backend/logs.server";
import UserLogs from "~/components/user-logs/user-logs";
import { UserLog } from "~/types";
import { chatService } from "~/backend/chat.server";
import UserChat from "~/components/user-chat/user-chat";

export async function loader({ request }: LoaderFunctionArgs) {
  const searchParams = new URLSearchParams(request.url.split("?")[1]);
  const userName = searchParams.get("userName") || "";
  const cheatNumber = searchParams.get("cheatNumber") || "";

  const videoSources = await videoService.getVideoSources();
  const chat = userName
    ? await chatService.getChatForUserName(userName)
    : await chatService.getChat();

  let selectedVideoSource;
  if (userName) {
    selectedVideoSource = await videoService.getVideoSourceFormUserName(
      userName
    );
  }

  let newLog;
  if (cheatNumber) {
    newLog = await logService.getCheatingPrediction(cheatNumber);
  }

  // add the new log to the logs
  if (newLog && (newLog.webcamCheat == true || newLog.screenCheat == true)) {
    logService.addLog(newLog.log as UserLog);
  }

  const logs = userName
    ? await logService.getLogsForUserName(userName)
    : await logService.getLogs();

  return json({ userName, videoSources, selectedVideoSource, logs, chat });
}

export default function ProctorPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const data = useLoaderData<typeof loader>();
  const theme = useMantineTheme();

  // State to control the height of the top-left component
  const [topLeftHeight, setTopLeftHeight] = useState("15%");

  // convert log timestamps back to Date objects
  const logs = data.logs.map((log) => ({
    ...log,
    timestamp: new Date(log.timestamp),
  })) as UserLog[];

  // convert chat timestamps back to Date objects
  const chat = data.chat.map((chat) => ({
    ...chat,
    timestamp: new Date(chat.timestamp),
  }));

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

  // for logs, change conrads cheat count, cheat bools, etc
  // example of the data strcuture
  //   log: {
  //     timestamp: new Date(Date.now()),
  //     userName: "Conrad Khakria",
  //     logDescription: "User is looking at his phone",
  //   },
  //   webcamCheat: false,
  //   screenCheat: false,
  // };

  // Add this useEffect to manage timers when "ConradKhakria" is selected
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    console.log("triggered")
    console.log("data.userName", data.userName);
    console.log("searchParams", searchParams.toString());

    // Clear any existing timers
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    if (data.userName === "Conrad Khakria") {
      // Start timers
      const timer1 = setTimeout(() => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set("cheatNumber", "1");
        setSearchParams(newSearchParams);
      }, 16000);

      const timer2 = setTimeout(() => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set("cheatNumber", "2");
        setSearchParams(newSearchParams);
      }, 18000);

      const timer3 = setTimeout(() => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set("cheatNumber", "3");
        setSearchParams(newSearchParams);
      }, 23000);

      timersRef.current = [timer1, timer2, timer3];
    } else {
      // Clear "cheatNumber" when another user is selected
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete("cheatNumber");
      setSearchParams(newSearchParams);
    }

    // Cleanup function to clear timers when the component unmounts or data.userName changes
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [data.userName, searchParams, setSearchParams]);

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
        <Title c="white" size="1.5rem">
          Pixtral Proctor
        </Title>
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
          <Flex direction="column" style={{ flex: 2, minHeight: 0 }}>
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
              <UserLogs
                logs={logs}
                selectedUserName={data.userName}
                onUserSelect={onUserSelect}
              />
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
              <UserChat
                chat={chat}
                selectedUserName={data.userName}
                onUserSelect={onUserSelect}
              />
            </Paper>
          </Flex>
        </Flex>
      </div>
    </>
  );
}
