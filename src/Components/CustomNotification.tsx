import { useMemo, useState, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Components
import { MotionBadge } from "./MotionBadge";

// Interfaces
interface CustomNotificationProps extends PropsWithChildren {}

export function CustomNotification({ children }: CustomNotificationProps) {
  const [count, setCount] = useState<number>(0);

  const styleBadgeValue = useMemo(() => (count > 99 ? "20%" : "50%"), [count]);

  //FramerMotion
  const MotionButton = motion(Box);

  return (
    <Box
      cursor="pointer"
      onClick={() => setCount((prev) => prev + 1)}
      position="relative"
    >
      <MotionButton
        alignItems="center"
        bg="white"
        borderRadius="20%"
        display="flex"
        dragConstraints={{ left: -100, right: 100 }}
        height="150px"
        justifyContent="center"
        position="relative"
        whileHover={{ scale: 1 }}
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
