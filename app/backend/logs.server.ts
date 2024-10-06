import { UserLog } from "~/types";

class LogService {
  async getLogs(): Promise<typeof logs> {
    return Promise.resolve(logs);
  }

  async addLog(log: UserLog): Promise<void> {
    logs.push(log);
  }

  async getLogsForUserName(userName: string): Promise<UserLog[]> {
    return Promise.resolve(logs.filter((log) => log.userName === userName));
  }
}

export const logService = new LogService();

const logs: UserLog[] = [
  {
    timestamp: new Date("2021-10-06T12:40:00"),
    userName: "Anatoly Karazhnev",
    logDescription: "User is looking away from the screen frequently"
  },
  {
    timestamp: new Date("2021-10-06T12:45:00"),
    userName: "Anatoly Karazhnev",
    logDescription: "User is using a calculator not allowed in the exam"
  },
  {
    timestamp: new Date("2021-10-06T12:05:00"),
    userName: "Karsyn Morton",
    logDescription: "Second person detected in the room"
  },
  {
    timestamp: new Date("2021-10-06T12:10:00"),
    userName: "Karsyn Morton",
    logDescription: "Heard conversation in the room regarding the solution of a differential equation, text received was 'I think you should use the Laplace transform'"
  },
  {
    timestamp: new Date("2021-10-06T12:15:00"),
    userName: "Karsyn Morton",
    logDescription: "Phone usage detected, user is not looking at the screen"
  },
  {
    timestamp: new Date("2021-10-06T12:15:00"),
    userName: "Karsyn Morton",
    logDescription: "User is not in front of the camera"
  },
  {
    timestamp: new Date("2021-10-06T12:05:00"),
    userName: "Karsyn Morton",
    logDescription: "Second person detected in the room"
  },
  {
    timestamp: new Date("2021-10-06T12:20:00"),
    userName: "Karsyn Morton",
    logDescription: "User opened a new window with Le Chat, and is typing in questions to be answered by LLM"
  },
  {
    timestamp: new Date("2021-10-06T12:15:00"),
    userName: "Karsyn Morton",
    logDescription: "Phone usage detected, user is not looking at the screen"
  },
  {
    timestamp: new Date("2021-10-06T12:50:00"),
    userName: "Jaxon Lee",
    logDescription: "User is talking to someone off-camera"
  },
  {
    timestamp: new Date("2021-10-06T12:55:00"),
    userName: "Ava Smith",
    logDescription: "User is browsing unrelated social media websites, is on the a16z twitter"
  },
  {
    timestamp: new Date("2021-10-06T13:00:00"),
    userName: "Ava Smith",
    logDescription: "User is using a mobile phone"
  },
  {
    timestamp: new Date("2021-10-06T13:05:00"),
    userName: "Ava Smith",
    logDescription: "User is not in front of the camera"
  },
  {
    timestamp: new Date("2021-10-06T13:10:00"),
    userName: "Noah Brown",
    logDescription: "User is frequently looking at notes off-camera"
  },
  {
    timestamp: new Date("2021-10-06T13:15:00"),
    userName: "Noah Brown",
    logDescription: "User has opened a pdf with exam solutions"
  },
  {
    timestamp: new Date("2021-10-06T13:20:00"),
    userName: "Noah Brown",
    logDescription: "User is prompting Chegg for answers"
  },
  {
    timestamp: new Date("2021-10-06T13:25:00"),
    userName: "Noah Brown",
    logDescription: "User is not in front of the camera"
  },
  {
    timestamp: new Date("2021-10-06T13:30:00"),
    userName: "Noah Brown",
    logDescription: "User is playing subway surfers on half of the screen"
  },
  {
    timestamp: new Date("2021-10-06T13:35:00"),
    userName: "Olivia Jones",
    logDescription: "User is playing subway surfers on half of the screen"
  },
  {
    timestamp: new Date("2021-10-06T13:40:00"),
    userName: "Olivia Jones",
    logDescription: "User is not in front of the camera"
  }
];