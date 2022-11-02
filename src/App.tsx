import { Box, Center } from "@chakra-ui/react";
import { IoNotificationsOutline } from "react-icons/io5";

// Components
import { CustomNotification } from "./Components";

// Css
import "./index.css";

function App() {
  return (
    <Box
      position={"relative"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100vh"}
    >
      <Center
        width={"400px"}
        height={"430px"}
        bg={"blue.900"}
        borderRadius={"20"}
      >
        <Box>
          <CustomNotification>
            <IoNotificationsOutline
              color={"#1a365d"}
              size={70}
              style={{
                position: "absolute",
                top: 40,
                left: 40,
              }}
            />
          </CustomNotification>
        </Box>
      </Center>
    </Box>
  );
}

export default App;
