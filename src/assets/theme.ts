import {} from "@chakra-ui/react";
import { StyleConfig } from "@chakra-ui/theme-tools";

export const styles: Record<string, StyleConfig> = {
  CustomBadge: {
    baseStyle: ({ colorMode }) => ({
      bg: colorMode === "dark" ? "red.200" : "red.500",
      color: colorMode === "dark" ? "white" : "white",
      fontSize: "1.5rem",
      ml: "1",
      shadow: "lg",
      userSelect: "none",
    }),
  },
};
