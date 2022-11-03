import { Box, Center } from "@chakra-ui/react";
import { IoNotificationsOutline } from "react-icons/io5";

// Components
import { CustomNotification, Controllers, ShowController } from "@/Components";

// Middleware
import { useSetting } from "@/middleware";

function App() {
  const { showController } = useSetting();

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
        <ShowController />
        <CustomNotification>
          <IoNotificationsOutline color="#1a365d" size={70} />
        </CustomNotification>

        {showController && <Controllers />}
      </Center>
    </Box>
  );
}

export default App;
