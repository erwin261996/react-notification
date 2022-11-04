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
  const { showController } = useSetting();

  // Cancelar el efecto en 1 segundo determinado
  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        // Cancelamos el efecto de FramerMotion una ves terminado el tiempo de espera.
        setActive(false);
      }, 1000);

      // Limipiamos los recursos antes que el componente salga de la pantalla.
      return () => clearTimeout(timer);
    }
  }, [showController]);

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
