import { useMemo, useState, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Components
import { MotionBadge } from "../Components";

// Interfaces
interface CustomNotificationProps extends PropsWithChildren {}

export function CustomNotification({ children }: CustomNotificationProps) {
  const [count, setCount] = useState<number>(0);

  const styleBadgeValue = useMemo(() => (count > 99 ? "20%" : "50%"), [count]);

  //FramerMotion
  const MotionButton = motion(Box);

  return (
    <Box position={"relative"} onClick={() => setCount((prev) => prev + 1)}>
      <MotionButton
        borderRadius={"20%"}
        width={"150px"}
        height={"150px"}
        bg={"white"}
        position={"static"}
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </MotionButton>

      {count > 0 && (
        <MotionBadge value={count} borderRadius={styleBadgeValue} />
      )}
    </Box>
  );
}
