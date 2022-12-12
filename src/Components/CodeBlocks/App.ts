export const App = `import {Box} from "@chakra-ui/react"
import { IoNotificationsOutline } from "react-icons/io5";

// Components
import {NotificationBadge} from "./Components/Notification"

function App() {
  return (
    <Box width="120px">
      {/* Button Notification Badge */}
      <NotificationBadge>
        <IoNotificationsOutline color="#1a365d" size={70} />
      </NotificationBadge>
    </Box>
  );
}

export default App;`;
