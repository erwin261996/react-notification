import { PropsWithChildren } from "react";
import { Box, Center } from "@chakra-ui/react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <Box
      alignItems="center"
      display="flex"
      height="100vh"
      justifyContent="center"
      position="relative"
      width="100%"
    >
      <Center
        bg="blue.900"
        borderRadius="20"
        flexDirection="column"
        height="430px"
        position="relative"
        width="400px"
      >
        {children}
      </Center>
    </Box>
  );
}
