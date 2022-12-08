import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { SettingProvider } from "@/middleware";

import App from "@/App";
// import App from "@/Components/CodeView/App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SettingProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </SettingProvider>
  </React.StrictMode>
);
