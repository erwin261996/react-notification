import { Layout } from "./Layout";
import { IoNotificationsOutline } from "react-icons/io5";

// Components
import { CustomNotification, Controllers, ShowController } from "@/Components";

// Middleware
import { useSetting } from "@/middleware";

function App() {
  const { showController } = useSetting();

  return (
    <Layout>
      {/* We show the icon (eye) for Controller Badge */}
      <ShowController />

      {/* Button Notification */}
      <CustomNotification>
        <IoNotificationsOutline color="#1a365d" size={70} />
      </CustomNotification>

      {/* We show Controller Badge to position the badge in the Button Notification */}
      {showController && <Controllers />}
    </Layout>
  );
}

export default App;
