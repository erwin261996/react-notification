import { Layout } from "./Layout";
import { IoNotificationsOutline } from "react-icons/io5";

// Components
import { NotificationBadge, Controllers, IconsController } from "@/Components";

// Middleware
import { useSetting } from "@/middleware";

function App() {
  const { state } = useSetting();

  return (
    <Layout>
      {/* We show the icon (eye) for Controller Badge */}
      <IconsController />

      {/* Button Notification Badge */}
      <NotificationBadge>
        <IoNotificationsOutline color="#1a365d" size={70} />
      </NotificationBadge>

      {/* We show Controller Badge to position the badge in the Button Notification */}
      {state.showController && <Controllers />}
    </Layout>
  );
}

export default App;
