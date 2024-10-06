//userName is common key

export type VideoSource = {
  srcWebcam: string;
  srcScreen: string;
  userName: string;
  cheatCount: number;
  cheats: {
    audio: boolean;
    webcam: boolean;
    screen: boolean;
  };
};

export type UserLog = {
  timestamp: Date;
  userName: string;
  logDescription: string;
};

export type Chat = {
  timestamp: Date;
  userName: string;
  message: string;
};
