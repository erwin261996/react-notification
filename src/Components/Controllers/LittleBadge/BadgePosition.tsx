import { Box, BoxProps } from "@chakra-ui/react";
import { styleMove, PositionTypes } from "@/interfaces";

interface BadgePositionProps extends BoxProps {
  move?: PositionTypes;
}

export default function BadgePosition({ move, ...rest }: BadgePositionProps) {
  return (
    <Box
      bg="red.500"
      borderRadius="50%"
      height="22px"
      position="absolute"
      width="22px"
      style={styleMove[move as keyof typeof styleMove]}
      {...rest}
    ></Box>
  );
}
