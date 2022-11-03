import { Box } from "@chakra-ui/react";
import BadgePosition from "./BadgePosition";

// types
import { PositionTypes } from "@/interfaces";
import { useSetting } from "@/middleware";

interface BadgeProps {
  position: PositionTypes;
}

export function LittleBadge({ position }: BadgeProps) {
  const { positionBadge, setPositionBadge } = useSetting();

  return (
    <Box
      alignItems="center"
      cursor="pointer"
      display="flex"
      height="50px"
      justifyContent="center"
      onClick={() => setPositionBadge(position)}
      position="relative"
      width="50px"
    >
      <Box
        bg={(positionBadge === position && "gray.400") || "gray.200"}
        borderRadius="20%"
        width="40px"
        height="40px"
      ></Box>

      <BadgePosition move={position} />
    </Box>
  );
}
