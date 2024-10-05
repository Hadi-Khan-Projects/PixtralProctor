import type { MetaFunction } from "@remix-run/node";
import { Button, Title, Flex } from "@mantine/core";
import { useNavigate } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Pixtral Proctor" },
    { name: "description", content: "Welcome to Pixtral Proctor!" },
  ];
};

export default function Index() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate("/user");
  };

  const handleProctorClick = () => {
    navigate("/proctor");
  };

  return (
    <Flex direction="column" style={{ height: '100vh' }}>
      <Flex direction="column" justify="center" align="center" style={{ flex: 3 }}>
        <Title order={1}>Welcome to PixtralProctor</Title>
      </Flex>
      <Flex justify="center" align="center" style={{ flex: 1 }}>
        <Button size="xl" onClick={handleUserClick} style={{ marginRight: '10px' }}>User</Button>
        <Button size="xl" onClick={handleProctorClick}>Proctor</Button>
      </Flex>
      <Flex style={{ flex: 2 }}></Flex>
    </Flex>
  );
}