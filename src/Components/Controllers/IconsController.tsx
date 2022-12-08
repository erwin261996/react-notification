import { useEffect } from "react";
import { Box, Stack, useColorMode } from "@chakra-ui/react";

// Icons
import { HiEye, HiOutlineEyeOff } from "react-icons/hi";
import { BsSun, BsSunFill } from "react-icons/bs";
import { MdCode, MdCodeOff } from "react-icons/md"

// Middleware
import { useSetting } from "@/middleware";
import { Types } from "@/middleware/reducers"

export function IconsController() {
  const { state, dispatch } = useSetting();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (localStorage.getItem("chakra-ui-color-mode")) {
      dispatch({
        type: Types.sun,
        payload: (localStorage.getItem("chakra-ui-color-mode") === "light")
      })
    }
  }, []);

  const handleColorMode = () => {
    toggleColorMode();
    dispatch({
      type: Types.sun,
      payload: (colorMode === "dark") 
    })
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
        {(state.sun && <BsSunFill size={35} />) || <BsSun size={35} />}
      </Box>

      <Stack spacing={5} direction="row">
        <Box
          color="white"
          cursor="pointer"
          onClick={() => dispatch({
            type: Types.code,
            payload: !state.code
          })}
        >
          {(state.code && <MdCode size={35} />) || (
            <MdCodeOff size={35} />
          )}
        </Box>
        <Box
          color="white"
          cursor="pointer"
          onClick={() =>  dispatch({
            type: Types.showController,
            payload: !state.showController
          })}
        >
          {(state.showController && <HiEye size={35} />) || (
            <HiOutlineEyeOff size={35} />
          )}
        </Box>
      </Stack>

    </Box>
  );
}
