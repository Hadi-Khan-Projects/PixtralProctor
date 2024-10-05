import { Flex, Box, useMantineTheme } from "@mantine/core";
import UserVideoGrid from "~/components/user-grid/user-grid";

export default function ProctorPage() {
  const theme = useMantineTheme();

  return (
    <Flex style={{ height: '100vh' }}>
      {/* Left */}
      <Flex direction="column" style={{ flex: 2, borderRight: `1px solid ${theme.colors.grey4[1]}` }}>
        {/* Top Left */}
        <Box style={{ flex: 1, borderBottom: `1px solid ${theme.colors.grey4[1]}` }}>
          Left Top
        </Box>
        {/* Bottom Left */}
        <Box style={{ flex: 2 }}>
          <UserVideoGrid p="lg" />
        </Box>
      </Flex>

      {/* Right */}
      <Flex direction="column" style={{ flex: 1 }}>
        {/* Top Right */}
        <Box style={{ flex: 1, borderBottom: `1px solid ${theme.colors.grey4[1]}` }}>
          Right Top
        </Box>
        {/* Bottom Right */}
        <Box style={{ flex: 1 }}>
          Right Bottom
        </Box>
      </Flex>
    </Flex>
  );
}
