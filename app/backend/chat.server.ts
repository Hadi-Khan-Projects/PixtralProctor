import { Chat } from "~/types";

class ChatService {
  async getChat(): Promise<typeof chat> {
    return Promise.resolve(chat);
  }

  async addChat(message: Chat): Promise<void> {
    chat.push(message);
  }

  async getChatForUserName(userName: string): Promise<Chat[]> {
    return Promise.resolve(chat.filter((message) => message.userName === userName));
  }
}

export const chatService = new ChatService();

const chat: Chat[] = [
  {
    timestamp: new Date("2021-10-06T12:05:00"),
    userName: "Karsyn Morton",
    message: "Karsyn, please stop conversing with whoever else is in the room with you."
  },
  {
    timestamp: new Date("2021-10-6T12:10:00"),
    userName: "Karsyn Morton",
    message: "Please note, I have reported this to the professor."
  },
]
