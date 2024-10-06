import {
  Flex,
  Group,
  Paper,
  Text,
  ScrollArea,
  Button,
} from "@mantine/core";
import { UserLog } from "~/types";

import classes from '~/components/user-grid/user-grid.module.css';

type UserLogsProps = {
  logs: UserLog[];
  selectedUserName: string;
  onUserSelect: (userName: string) => void;
};

export default function UserLogs({ logs, selectedUserName, onUserSelect }: UserLogsProps) {
  // const theme = useMantineTheme();

  return (
    <Flex direction="column" style={{ height: "100%" }}>
      <Flex direction="row" justify="space-between" align="center" mb="md">
        <Paper p="xs" radius="8px" withBorder bd={selectedUserName ? "3px solid blue" : "1px solid grey4"} bg="grey1">
          <Group>
            {selectedUserName ? (
              <>
                <Text size="lg" pb="0.1rem" fw={700}>
                  Cheat logs for:
                </Text>
                <Button
                  size="sm"
                  radius="8px"
                  color="blue"
                  onClick={() => onUserSelect(selectedUserName)}
                >
                  {selectedUserName}
                </Button>
              </>
            ) : (
              <>
                <Text size="lg" pb="0.1rem" fw={700}>
                  Cheat logs for:
                </Text>
                <Button
                  size="sm"
                  radius="8px"
                  color="grey6"
                  onClick={() => onUserSelect(selectedUserName)}
                >
                  All users
                </Button>
              </>
            )
            }
          </Group>
        </Paper>
        <Paper w="1" h="1"></Paper>
      </Flex>
      <ScrollArea style={{ flex: 1 }}>
        {logs.map((log, index) => (
          <Paper
            key={index}
            p="sm"
            mb="sm"
            radius="8px"
            withBorder
            bd="1px solid grey4"
            bg={log.userName === selectedUserName ? "grey1" : "white"}
          >
            <Group>
              <Group>
              <Button
                  size="xs"
                  radius="8px"
                  color={log.userName === selectedUserName ? 'blue' : 'grey6'}
                  onClick={() => onUserSelect(log.userName)}
                  classNames={{
                    root: classes.root,
                  }}
                >
                {log.userName.length > 16 ? `${log.userName.slice(0, 12)}...` : log.userName}
              </Button>
                <Text color="dimmed" size="sm">
                  at {new Date(log.timestamp).toLocaleString()}
                </Text>
              </Group>
            </Group>
            <Text mt="sm">{log.logDescription}</Text>
          </Paper>
        ))}
      </ScrollArea>
    </Flex >
  );
}
