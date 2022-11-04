import { Box } from "@chakra-ui/react";
import BadgePosition from "./BadgePosition";

// Motions
import { motion } from "framer-motion";

// types
import { PositionTypes } from "@/interfaces";
import { useSetting } from "@/middleware";

interface BadgeProps {
  position: PositionTypes;
}

export function LittleBadge({ position }: BadgeProps) {
  const { positionBadge, setPositionBadge } = useSetting();

  const BoxMotion = motion(Box);

  return (
    <BoxMotion
      alignItems="center"
      cursor="pointer"
      display="flex"
      height="50px"
      justifyContent="center"
      onClick={() => setPositionBadge(position)}
      position="relative"
      width="50px"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
    >
      <Box
        bg={(positionBadge === position && "gray.400") || "gray.200"}
        borderRadius="20%"
        width="40px"
        height="40px"
      ></Box>

      <BadgePosition move={position} />
    </BoxMotion>
  );
}
