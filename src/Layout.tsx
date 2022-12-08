import { PropsWithChildren } from "react";
import { Box, Center, Stack } from "@chakra-ui/react";

// middleware
import {useSetting} from "@/middleware"

// Custom Components
import {CodeBlocks} from "./Components/CodeBlocks"

// Styles
import "./layout.css"

export function Layout({ children }: PropsWithChildren) {
  const {state} = useSetting()

  return (
    <Box
      alignItems="center"
      display="flex"
      height="100vh"
      justifyContent="center"
      position="relative"
      width="100%"
    >
    <Stack spacing={8} direction='row'>
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
      <Center
        display={state.code ? "block" : "none" }
        flexDirection="column"
        position="relative"
        marginLeft="5rem"
      >
        <CodeBlocks />
      </Center>
    </Stack>
    </Box>
  );
}
