import { useEffect } from "react";
import { Box, useColorMode } from "@chakra-ui/react";

// Icons
import { HiEye, HiOutlineEyeOff } from "react-icons/hi";
import { BsSun, BsSunFill } from "react-icons/bs";

// Middleware
import { useSetting } from "@/middleware";

export function IconsController() {
  const { showController, setShowController, sun, setSun } = useSetting();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (localStorage.getItem("chakra-ui-color-mode")) {
      setSun(localStorage.getItem("chakra-ui-color-mode") === "light");
    }
  }, []);

  const handleColorMode = () => {
    toggleColorMode();
    setSun(colorMode === "dark");
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      left="20px"
      position="absolute"
      right="20px"
      top="20px"
    >
      <Box color="white" cursor="pointer" onClick={() => handleColorMode()}>
        {(sun && <BsSunFill size={35} />) || <BsSun size={35} />}
      </Box>

      <Box
        color="white"
        cursor="pointer"
        onClick={() => setShowController((prev) => !prev)}
      >
        {(showController && <HiEye size={35} />) || (
          <HiOutlineEyeOff size={35} />
        )}
      </Box>
    </Box>
  );
}
