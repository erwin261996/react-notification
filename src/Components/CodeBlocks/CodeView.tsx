import {main} from "./main"
import {NotificationBadge} from "./Notification"
import {MotionBadge} from "./Badge"
import {App} from "./App"

// Interfaces
import { CodeString } from "./interfaces"

export const CodeView: CodeString[] = [
  {
    key: "dependency",
    type: "json",
    title: 'package.json',
    code: 
`"dependencies": {
  "@chakra-ui/react": "^2.3.6",
  "@chakra-ui/theme-tools": "^2.0.12",
  "@emotion/react": "^11.10.5",
  "@emotion/styled": "^11.10.5",
  "framer-motion": "^7.6.2",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-icons": "^4.6.0"
}`
  },
  {
    key: "main",
    type: "tsx",
    title: 'main.tsx',
    code: main,
  },
  {
    key: "app",
    type: "tsx",
    title: 'App.tsx',
    code: App,
  },
  {
    key: "notification",
    type: "tsx",
    title: 'NotificationBadge.tsx',
    code: NotificationBadge,
  },
]

