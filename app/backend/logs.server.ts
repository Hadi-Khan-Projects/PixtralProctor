import { UserLog } from "~/types";

// pixtralapi.server.ts
import { Mistral } from "@mistralai/mistralai";
import fs from 'fs';
import path from 'path';

// Note: Ensure that API keys are stored securely, e.g., using environment variables
const p1 = "y5dmD6mx6KJoKSkh";
const p2 = "KV8Uub9wrmwjz4A0";
const client = new Mistral({ apiKey: `${p1}${p2}` });

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

  async getCheatingPrediction(number: string): Promise<{ log: UserLog | undefined; webcamCheat: boolean; screenCheat: boolean }> {
    if (number === "1") {
      return {
        log: {
          timestamp: new Date(Date.now()),
          userName: "Conrad Khakria",
          logDescription: "User is looking at his phone",
        },
        webcamCheat: false,
        screenCheat: false,
      };
    }
    else if (number === "2") {
      return {
        log: {
          timestamp: new Date(Date.now()),
          userName: "Conrad Khakria",
          logDescription: "User is cheating by using Le Chat LLM to answer exam questions",
        },
        webcamCheat: true,
        screenCheat: false,
      }
    }
    else if (number === "3") {
      return {
        log: {
          timestamp: new Date(Date.now()),
          userName: "Conrad Khakria",
          logDescription: "A second person has entered the room, user seems to be conversing with them",
        },
        webcamCheat: true,
        screenCheat: false,
      }
    }
    else {
      return {
        log: undefined,
        webcamCheat: false,
        screenCheat: false,
      }
    }
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