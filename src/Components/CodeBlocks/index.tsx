import GlobalTheme from '@atlaskit/theme/components';
import { CodeBlock } from '@atlaskit/code';

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar"

import {CodeView} from "./CodeView"

export const CodeBlocks = () => {
  return (
  <>
    <PerfectScrollbar
      style={{
        maxWidth: "750px",
        maxHeight: "80vh"
      }}
      options={{ suppressScrollY: false }}
    >
      <GlobalTheme.Provider  value={() => ({ mode: "dark",  })}>
        {
          CodeView.map(({key, type, code}) => (
            <CodeBlock 
              key={key}
              language={type}
              showLineNumbers={true}
              text={code}
            />
          ))
        }
      </GlobalTheme.Provider>
    </PerfectScrollbar>
  </>
  )
}