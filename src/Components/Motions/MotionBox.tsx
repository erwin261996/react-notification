import { PropsWithChildren } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface MotionBoxProps extends PropsWithChildren, BoxProps {}

export function MotionBox({ children, ...rest }: MotionBoxProps) {
  const ComponentBox = motion(Box);

  return <ComponentBox {...rest}>{children}</ComponentBox>;
}
