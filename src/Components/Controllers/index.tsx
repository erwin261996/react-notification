import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useSetting } from "@/middleware";

// Components
import { LittleBadge } from "./LittleBadge";

export function Controllers() {
  const ComponentBox = motion(Box);

  //Hooks
  const [active, setActive] = useState<boolean>(true);
  const { state } = useSetting();

  // Cancel effect in 1 second
  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        // We cancel the effect of 'FramerMotion' once the time is over.
        setActive(false);
      }, 1000);

      // We clean up the resources, before the component exists the screen.
      return () => clearTimeout(timer);
    }
  }, [state.showController]);

  return (
    <ComponentBox
      mt={5}
      display="flex"
      initial={active ? "hidden" : ""}
      animate={active ? "visible" : ""}
      variants={{
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <LittleBadge position="rightTop" />
      <LittleBadge position="rightBottom" />
      <LittleBadge position="leftTop" />
      <LittleBadge position="leftBottom" />
    </ComponentBox>
  );
}
