import { useMemo, useState, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useSetting } from "@/middleware";

// Components
import { MotionBadge } from "./MotionBadge";

// Interfaces
interface CustomNotificationProps extends PropsWithChildren {}

export function CustomNotification({ children }: CustomNotificationProps) {
  const [count, setCount] = useState<number>(0);
  const { showController } = useSetting();

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
          y: (showController && 5) || 0,
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
