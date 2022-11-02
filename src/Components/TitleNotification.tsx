import { Box } from "@chakra-ui/react";

// Interfaces
interface TitleNotificationProps {
  title: string;
}

export function TitleNotification({ title }: TitleNotificationProps) {
  return (
    <Box
      marginTop={"1.3rem"}
      textAlign={"center"}
      color={"white"}
      fontSize={"20px"}
    >
      {title}
    </Box>
  );
}
