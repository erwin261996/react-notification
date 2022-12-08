import { useMemo, useState, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useSetting } from "@/middleware";

// Components
import { MotionBadge } from "./Motions/MotionBadge";

// Interfaces
interface NotificationBadgeProps extends PropsWithChildren {}

export function NotificationBadge({ children }: NotificationBadgeProps) {
  const [count, setCount] = useState<number>(90);
  const { state } = useSetting();

  const styleBadgeValue = useMemo(() => (count > 99 ? "20%" : "50%"), [count]);

  // Add Components Chakra (Box) to FramerMotion
  const MotionButton = motion(Box);

  return (
    <Box position="relative">
      <MotionButton
        alignItems="center"
        bg="white"
        borderRadius="20%"
        cursor="pointer"
        display="flex"
        height="150px"
        justifyContent="center"
        onClick={() => setCount((prev) => prev + 1)}
        position="relative"
        animate={{
          y: (state.showController && 5) || 0,
        }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.9 }}
        width="150px"
      >
        {children}
      </MotionButton>

      {count > 0 && (
        <MotionBadge value={count} borderRadius={styleBadgeValue} />
      )}
    </Box>
  );
}
