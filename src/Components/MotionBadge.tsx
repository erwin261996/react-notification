import { useEffect } from "react";
import { Badge } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

// Interfaces
interface MotionBadgeProps {
  value: number;
  borderRadius: string;
}

export function MotionBadge({ value, borderRadius = "50%" }: MotionBadgeProps) {
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
      ml="1"
      fontSize="1.5em"
      bg="red.500"
      color={"white"}
      position={"absolute"}
      top={"-12px"}
      right={"-17px"}
      padding={value < 10 ? "8px 20px" : "8px 13.3px"}
      borderRadius={borderRadius}
      shadow={"lg"}
      drag="x"
      animate={controls}
      transition={{ duration: 0.18 }}
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {value}
    </MotionBadge>
  );
}
