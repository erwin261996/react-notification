import { useEffect } from "react";
import { Badge } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

// Middleware
import { useSetting } from "@/middleware";

// Interfaces
import { styleMoveString } from "@/interfaces";

interface MotionBadgeProps {
  value: number;
  borderRadius: string;
}

export function MotionBadge({ value, borderRadius = "50%" }: MotionBadgeProps) {
  const { positionBadge } = useSetting();

  // FramerMotion
  const MotionBadge = motion(Badge);
  const controls = useAnimation();

  useEffect(() => {
    if (value == 100) {
      controls.start({
        borderRadius: (borderRadius == "50%" && []) || ["50%", "30%"],
      });
    }
  }, [value]);

  return (
    <MotionBadge
      animate={controls}
      bg="red.500"
      borderRadius={borderRadius}
      color="white"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      fontSize="1.5em"
      ml="1"
      padding={value < 10 ? "8px 20px" : "8px 13.3px"}
      position="absolute"
      shadow="lg"
      style={styleMoveString[positionBadge as keyof typeof styleMoveString]}
      transition={{ duration: 0.18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {value}
    </MotionBadge>
  );
}
