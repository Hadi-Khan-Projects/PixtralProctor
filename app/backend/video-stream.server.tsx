import { VideoSource } from "~/types";

class VideoService 
{
  async getVideoSources(): Promise<typeof videoSources> {
    return Promise.resolve(videoSources); 
  }

  async getVideoSourceFormUserName(userName: string): Promise<VideoSource | undefined> {
    return Promise.resolve(videoSources.find((source) => source.userName === userName));
  }
}

export const videoService = new VideoService();

const videoSources: VideoSource[] = [
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Conrad Khakria',
    cheatCount: 0,
    cheatCurrently: false,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Anatoly Karazhnev',
    cheatCount: 2,
    cheatCurrently: false,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Diya Bilal',
    cheatCount: 0,
    cheatCurrently: false,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Karsyn Morton',
    cheatCount: 7,
    cheatCurrently: true,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Xander Giles',
    cheatCount: 0,
    cheatCurrently: false,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Harleigh Castro',
    cheatCount: 0,
    cheatCurrently: false,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Aliza O’Connor',
    cheatCount: 0,
    cheatCurrently: false,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Amayah Ayers',
    cheatCount: 0,
    cheatCurrently: false,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Jaxon Lee',
    cheatCount: 1,
    cheatCurrently: false,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Ava Smith',
    cheatCount: 3,
    cheatCurrently: true,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Liam Johnson',
    cheatCount: 0,
    cheatCurrently: false,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Emma Williams',
    cheatCount: 2,
    cheatCurrently: false,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Noah Brown',
    cheatCount: 5,
    cheatCurrently: true,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Olivia Jones',
    cheatCount: 0,
    cheatCurrently: false,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'William Garcia',
    cheatCount: 0,
    cheatCurrently: false,
  },
  {
    srcWebcam: 'https://www.w3schools.com/html/mov_bbb.mp4',
    srcScreen: 'https://www.w3schools.com/html/movie.mp4',
    userName: 'Sophia Martinez',
    cheatCount: 0,
    cheatCurrently: false,
  }
];