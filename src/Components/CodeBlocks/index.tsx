import GlobalTheme from '@atlaskit/theme/components';
import CodeViewsBrowser from '../CodeViewsBrowser';

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar"

import {CodeView} from "./CodeView"
import {MotionBadge} from "./Badge"

export const CodeBlocks = () => {
  return (
  <>
    <PerfectScrollbar
      style={{
        maxWidth: "750px",
        maxHeight: "80vh",
      }}
      options={{ suppressScrollY: false }}
    >
      <GlobalTheme.Provider  value={() => ({ mode: "dark",  })}>
        {
          CodeView.map(({key, type, title, code}) => (
            <CodeViewsBrowser 
              key={key}
              language={type}
              title={title}
              textCode={code}
            />
          ))
        }
        <MotionBadge />
      </GlobalTheme.Provider>
    </PerfectScrollbar>

  </>
  )
}