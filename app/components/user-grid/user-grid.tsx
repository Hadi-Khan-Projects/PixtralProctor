/* eslint-disable jsx-a11y/media-has-caption */
import { Badge, Flex, Grid, GridProps, Group, Paper, ScrollArea, useMantineTheme, Text, Button } from '@mantine/core';
import classes from './user-grid.module.css';

type UserGridProps = {
  selectedUserName?: string;
  onUserSelect: (userName: string) => void;
} & GridProps;

export default function UserVideoGrid({ selectedUserName, onUserSelect, ...props }: UserGridProps) {
  const theme = useMantineTheme();

  return (
    <ScrollArea scrollbars="y" style={{ height: '100%', minHeight: 0 }}>
      <Grid gutter="md" {...props} style={{ height: '100%', minHeight: 0 }}>
        {videoSources.map((user, index) => (
          <Grid.Col span={4} key={index} style={{ height: '100%', minHeight: 0 }}>
            <Paper
              radius="8px"
              p="xs"
              bg={user.cheatCurrently ? 'redLight' : 'white'}
              withBorder
              style={{
                border: `1px solid ${theme.colors.grey4[1]}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0,
                boxShadow: user.userName === selectedUserName ? '0 0 0 2px blue' : 'none',
              }}
            >
              {/* Flex container to arrange videos side by side */}
              <Flex
                direction="row"
                gap="xs"
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  flex: 1,
                  minHeight: 0,
                }}
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
                />
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
                />
              </Flex>
              <Flex direction="row" pt="0.4em" justify="space-between">
                <Button
                  size="xs"
                  radius="8px"
                  color={user.userName === selectedUserName ? 'blue' : 'grey6'}
                  onClick={() => onUserSelect(user.userName)}
                  classNames={{
                    root: classes.root,
                  }}
                >
                {user.userName.length > 16 ? `${user.userName.slice(0, 12)}...` : user.userName}
              </Button>
              <Group gap="xs">
                <Text size="sm">Potential Cheats:</Text>
                <Badge
                  size="md"
                  radius="8px"
                  color={
                    user.cheatCount > 4 ? 'red' : user.cheatCount > 0 ? 'yellow' : 'green'
                  }
                >
                  {user.cheatCount}
                </Badge>
              </Group>
            </Flex>
          </Paper>
          </Grid.Col>
        ))}
    </Grid>
    </ScrollArea >
  );
}

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
    cheatCount: 5,
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