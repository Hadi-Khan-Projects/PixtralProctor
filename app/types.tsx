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
