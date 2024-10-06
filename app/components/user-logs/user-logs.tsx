import {
  Badge,
  Flex,
  Group,
  Paper,
  Text,
  ScrollArea,
} from "@mantine/core";
import { UserLog } from "~/types";

type UserLogsProps = {
  logs: UserLog[];
  selectedUsername: string;
};

export default function UserLogs({ logs, selectedUsername }: UserLogsProps) {
  // const theme = useMantineTheme();

  return (
    <Flex direction="column" style={{ height: "100%" }}>
      <Text size="lg" fw={700} mb="md">
        User Logs
      </Text>
      <ScrollArea style={{ flex: 1 }}>
        {logs.map((log, index) => (
          <Paper
            key={index}
            p="sm"
            mb="sm"
            radius="8px"
            withBorder
            bd="1px solid grey4"
            bg={log.userName === selectedUsername ? "grey1" : "white"}
          >
            <Group>
              <Group>
                <Text fw={700}>{log.userName}</Text>
                <Text color="dimmed" size="sm">
                  at {new Date(log.timestamp).toLocaleString()}
                </Text>
              </Group>
              {log.userName === selectedUsername && (
                <Badge color="blue">Selected User</Badge>
              )}
            </Group>
            <Text mt="sm">{log.logDescription}</Text>
          </Paper>
        ))}
      </ScrollArea>
    </Flex>
  );
}
