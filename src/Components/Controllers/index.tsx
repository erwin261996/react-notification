import { Box } from "@chakra-ui/react";

// Components
import { LittleBadge } from "./LittleBadge";

export function Controllers() {
  return (
    <Box mt={5} display="flex">
      <LittleBadge position="rightTop" />
      <LittleBadge position="rightBottom" />
      <LittleBadge position="leftTop" />
      <LittleBadge position="leftBottom" />
    </Box>
  );
}
