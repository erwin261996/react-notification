import { Box } from "@chakra-ui/react";
import { HiEye, HiOutlineEyeOff } from "react-icons/hi";

// Middleware
import { useSetting } from "@/middleware";

export function ShowController() {
  const { showController, setShowController } = useSetting();
  return (
    <Box
      position="absolute"
      right="20px"
      top="20px"
      color="white"
      cursor="pointer"
      onClick={() => setShowController((prev) => !prev)}
    >
      {(showController && <HiEye size={35} />) || <HiOutlineEyeOff size={35} />}
    </Box>
  );
}
