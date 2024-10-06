import {
  Flex,
  Group,
  Paper,
  Text,
  ScrollArea,
  TextInput,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { Chat } from "~/types";

type UserChatProps = {
  selectedUserName: string;
  chat: Chat[];
  onUserSelect: (userName: string) => void;
};

export default function UserChat({ selectedUserName, chat, onUserSelect }: UserChatProps) {
  const theme = useMantineTheme();

  return (
    <Flex direction="column" style={{ height: "100%" }}>
      <Flex direction="row" justify="space-between" align="center" mb="md">
        <Paper p="xs" radius="8px" withBorder bd={selectedUserName ? "3px solid blue" : "1px solid grey4"} bg="grey1">
          <Group>
            {selectedUserName ? (
              <>
                <Text size="lg" pb="0.1rem" fw={700}>
                  Chat logs for:
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
        {chat.map((message, index) => (
          <Paper
            key={index}
            p="sm"
            mb="sm"
            radius="8px"
            withBorder
            bd="1px solid grey4"
            bg={
              message.userName === selectedUserName ? "grey1" : "white"
            }
            style={{
              alignSelf:
                message.userName === selectedUserName ? "flex-end" : "flex-start",
              maxWidth: "100%",
            }}
          >
            <Group>
              <Text fw={700}>{message.userName}</Text>
              <Text color="dimmed" size="sm">
                {new Date(message.timestamp).toLocaleString()}
              </Text>
            </Group>
            <Text mt="sm">{message.message}</Text>
          </Paper>
        ))}
      </ScrollArea>
      <TextInput placeholder="Type a message..." radius={8} pt="md"
        styles={{
          input: {
            border: `1px solid ${theme.colors.grey4[1]}`,
          }
        }}
      />
    </Flex>
  );
}
