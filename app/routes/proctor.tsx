import { Flex, Paper } from "@mantine/core";
import UserVideoGrid from "~/components/user-grid/user-grid";

export default function ProctorPage() {
  // Two Columns, Two Rows in each column
  // row1:row2 = 1:2
  // row1col1:row1col2 = 2:1
  // row2col1:row2col2 = 1:1

  return (
    <Flex style={{ height: '100vh' }} p="md">
      {/* Left */}
      <Flex
        direction="column"
        style={{
          flex: 2,
          // borderRight: `20px solid ${theme.colors.grey4[1]}`,
          minHeight: 0, // Allow flex items to shrink
        }}
      >
        {/* Top Left */}
        <Paper
          style={{
            flex: 1,
            // borderBottom: `20px solid ${theme.colors.grey4[1]}`,
            minHeight: 0,
          }}
          bg="grey1"
          radius="10px"
          m="sm"
          p="md"
        >
          Left Top
        </Paper>
        {/* Bottom Left */}
        <Paper
          style={{
            flex: 2,
            minHeight: 0,
            overflow: 'hidden', // Prevent content from affecting layout
          }}
          bg="grey4"
          radius="10px"
          m="sm"
          p="md"
        >
          <UserVideoGrid />
        </Paper>
      </Flex>

      {/* Right */}
      <Flex
        direction="column"
        style={{ flex: 1, minHeight: 0 }} // Allow flex items to shrink
      >
        {/* Top Right */}
        <Paper
          style={{
            flex: 1,
            // borderBottom: `20px solid ${theme.colors.grey4[1]}`,
            minHeight: 0,
          }}
          radius="10px"
          bg="redLight"
          m="sm"
          p="md"
        >
          Right Top
        </Paper>
        {/* Bottom Right */}
        <Paper
          style={{ flex: 1, minHeight: 0 }}
          radius="10px"
          bg="orangeLight"
          m="sm"
          p="md"
        >
          Right Bottom
        </Paper>
      </Flex>
    </Flex>
  );
}
