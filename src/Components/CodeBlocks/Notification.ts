export const NotificationBadge = `// NotificationBadge.tsx
import { useMemo, useState, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Components
import { MotionBadge } from "./Badge";

// Interfaces
interface NotificationBadgeProps extends PropsWithChildren {}

export function NotificationBadge({ children }: NotificationBadgeProps) {
    const [count, setCount] = useState<number>(99);

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
            height="140px"
            justifyContent="center"
            onClick={() => setCount((prev) => prev + 1)}
            position="relative"
            animate={{
                y: 5,
            }}
            transition={{ duration: 0.3 }}
            width="130px"
        >
            {children}
        </MotionButton>

        {count > 0 && (
            <MotionBadge value={count} borderRadius={styleBadgeValue} />
        )}
    </Box>
    );
}`;
