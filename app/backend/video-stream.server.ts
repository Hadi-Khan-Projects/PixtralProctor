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
    srcWebcam: '/user-videos/conrad.mp4',
    srcScreen: '/user-videos/webcam1.mp4', // when I replace this with '/user-videos/webcam1.mp4' it messes upt he layout
    userName: 'Conrad Khakria',
    cheatCount: 0,
    cheats: {
      audio: false,
      webcam: false,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/Yousef.mp4',
    srcScreen: '/user-videos/webcam2.mp4',
    userName: 'Anatoly Karazhnev',
    cheatCount: 2,
    cheats: {
      audio: false,
      webcam: false,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/zach.mp4',
    srcScreen: '/user-videos/webcam3.mp4',
    userName: 'Zach',
    cheatCount: 0,
    cheats: {
      audio: false,
      webcam: false,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/Muath.mp4',
    srcScreen: '/user-videos/webcam2.mp4',
    userName: 'Karsyn Morton',
    cheatCount: 7,
    cheats: {
      audio: true,
      webcam: true,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/zhoulian.mp4',
    srcScreen: '/user-videos/webcam2.mp4',
    userName: 'Lian Zhou',
    cheatCount: 0,
    cheats: {
      audio: false,
      webcam: false,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/XiYin.mp4',
    srcScreen: '/user-videos/webcam2.mp4',
    userName: 'Yus Wang',
    cheatCount: 0,
    cheats: {
      audio: false,
      webcam: false,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/vahid.mp4',
    srcScreen: '/user-videos/webcam3.mp4',
    userName: 'Harleigh Castro',
    cheatCount: 0,
    cheats: {
      audio: false,
      webcam: false,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/bajajpak.mp4',
    srcScreen: '/user-videos/webcam2.mp4',
    userName: 'Diya Bilal',
    cheatCount: 0,
    cheats: {
      audio: false,
      webcam: false,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/Jourabloo.mp4',
    srcScreen: '/user-videos/webcam2.mp4',
    userName: 'Jaxon Lee',
    cheatCount: 1,
    cheats: {
      audio: true,
      webcam: false,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/dhingra5.mp4',
    srcScreen: '/user-videos/webcam1.mp4',
    userName: 'Ava Smith',
    cheatCount: 3,
    cheats: {
      audio: false,
      webcam: false,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/makiluke.mp4',
    srcScreen: '/user-videos/webcam2.mp4',
    userName: 'Liam Johnson',
    cheatCount: 0,
    cheats: {
      audio: false,
      webcam: false,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/chuangy6.mp4',
    srcScreen: '/user-videos/webcam2.mp4',
    userName: 'Emma Williams',
    cheatCount: 0,
    cheats: {
      audio: false,
      webcam: false,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/meowseph.mp4',
    srcScreen: '/user-videos/webcam2.mp4',
    userName: 'Noah Brown',
    cheatCount: 5,
    cheats: {
      audio: false,
      webcam: false,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/wangyus1.mp4',
    srcScreen: '/user-videos/webcam1.mp4',
    userName: 'Olivia Jones',
    cheatCount: 2,
    cheats: {
      audio: true,
      webcam: true,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/yarub.mp4',
    srcScreen: '/user-videos/webcam2.mp4',
    userName: 'William Garcia',
    cheatCount: 0,
    cheats: {
      audio: false,
      webcam: false,
      screen: false
    }
  },
  {
    srcWebcam: '/user-videos/mustaffa.mp4',
    srcScreen: '/user-videos/webcam1.mp4',
    userName: 'Mustafa Al-Obaidi',
    cheatCount: 0,
    cheats: {
      audio: false,
      webcam: false,
      screen: false
    }
  }
];
