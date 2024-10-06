import {
  Flex,
  Group,
  Paper,
  Text,
  ScrollArea,
} from "@mantine/core";
import { Chat } from "~/types";

type UserChatProps = {
  selectedUserName: string;
  chat: Chat[];
};

export default function UserChat({ selectedUserName, chat }: UserChatProps) {
  // const theme = useMantineTheme();

  return (
    <Flex direction="column" style={{ height: "100%" }}>
      <Text size="lg" fw={700} mb="md">
        Chat
      </Text>
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
              maxWidth: "70%",
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
    </Flex>
  );
}
