import { useMemo, useState, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

// Components
import { MotionBadge } from "../Components";

interface CustomNotificationProps extends PropsWithChildren {}

export function CustomNotification({ children }: CustomNotificationProps) {
  const [count, setCount] = useState<number>(0);

  const styleBadgeValue = useMemo(() => (count > 99 ? "20%" : "50%"), [count]);

  return (
    <Box position={"relative"} onClick={() => setCount((prev) => prev + 1)}>
      <Box
        borderRadius={"20%"}
        width={"150px"}
        height={"150px"}
        bg={"white"}
        position={"static"}
      />
      <Box
        borderRadius={"20%"}
        width={"150px"}
        height={"150px"}
        bg="whiteAlpha.400"
        position={"absolute"}
        top={0}
        left={0}
        margin={"6px 0px 0px 6px"}
      />
      {children}
      {count > 0 && (
        <MotionBadge value={count} borderRadius={styleBadgeValue} />
      )}
    </Box>
  );
}
