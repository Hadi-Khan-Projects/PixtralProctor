/* eslint-disable jsx-a11y/media-has-caption */
import { Badge, Flex, Grid, GridProps, Group, Paper, ScrollArea, useMantineTheme, Text, Button } from '@mantine/core';
import classes from './user-grid.module.css';
import { VideoSource } from '~/types';

type UserGridProps = {
  selectedUserName?: string;
  onUserSelect: (userName: string) => void;
  videoSources: VideoSource[];
} & GridProps;

export default function UserVideoGrid({ selectedUserName, onUserSelect, videoSources, ...props }: UserGridProps) {
  const theme = useMantineTheme();

  return (
    <ScrollArea scrollbars="y" style={{ height: '100%', minHeight: 0 }}>
      <Grid gutter="md" {...props} style={{ height: '100%', minHeight: 0 }}>
        {videoSources.map((user, index) => (
          <Grid.Col span={4} key={index} style={{ height: '100%', minHeight: 0 }}>
            <Paper
              radius="8px"
              p="xs"
              bg={(user.cheats.audio || user.cheats.screen || user.cheats.webcam) ? 'redLight' : 'grey1'}
              withBorder
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0,
                border: user.userName === selectedUserName ? `3px solid ${theme.colors.blue[1]}` : `1px solid ${theme.colors.grey4[1]}`,
              }}
              shadow='xl'
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