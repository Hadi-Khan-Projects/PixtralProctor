import { Badge, Flex, Grid, GridProps, Group, Paper, useMantineTheme } from '@mantine/core';

interface UserGridProps extends GridProps { }

export default function UserVideoGrid(props: UserGridProps) {
  const videoSources = [
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
      userName: 'Xander Giles',
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
  ];

  const theme = useMantineTheme();

  return (
    <Grid gutter="md" {...props}>
      {videoSources.map((user, index) => (
        <Grid.Col span={6} key={index}>
          <Paper radius="8px" p="md" bg={user.cheatCurrently ? 'redLight' : 'grey1'} withBorder
            style={{
              border: `1px solid ${theme.colors.grey4[1]}`
            }}
          >
            {/* Flex container to arrange videos side by side */}
            <Flex
              direction="row"
              gap="md"
              style={{ width: '100%', boxSizing: 'border-box' }}
            >
              <video
                src={user.srcWebcam}
                autoPlay
                loop
                style={{
                  flex: 1,
                  minWidth: 0,
                  borderRadius: '8px',
                  objectFit: 'cover',
                  aspectRatio: '16/9',
                }}
              >
                <track
                  kind="captions"
                  srcLang="en"
                  src={user.srcWebcam}
                  label="English"
                  default
                />
              </video>
              <video
                src={user.srcScreen}
                autoPlay
                loop
                style={{
                  flex: 1,
                  minWidth: 0,
                  borderRadius: '8px',
                  objectFit: 'cover',
                  aspectRatio: '16/9',
                }}
              >
                <track
                  kind="captions"
                  srcLang="en"
                  src={user.srcScreen}
                  label="English"
                  default
                />
              </video>
            </Flex>
            <Flex direction="row" pt="sm" justify="space-between">
              <Badge size="lg" radius="8px" color="grey6">
                <span style={{ textTransform: 'none' }}>{user.userName}</span>
              </Badge>
              <Group>
                Potential Cheats:
                <Badge
                  size="lg"
                  radius="8px"
                  color={user.cheatCount > 5 ? 'red' : user.cheatCount > 0 ? 'yellow' : 'green'}
                >
                  {user.cheatCount}
                </Badge>
              </Group>
            </Flex>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
}
