import { createContext, useReducer, PropsWithChildren, Dispatch } from "react";
import reducer, {ContextType} from "./reducers"

const AppCtx = createContext<{
  state: ContextType,
  dispatch: Dispatch<any>,
}>({
  state: {
    positionBadge: "rightTop",
    showController: false,
    sun: false,
    code: false
  },
  dispatch: () => null
});

const initialState: ContextType = {
  positionBadge: "rightTop",
  showController: false,
  sun: false,
  code: false,
};

export function SettingProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppCtx.Provider
      value={{ state, dispatch }}
    >
      {children}
    </AppCtx.Provider>
  );
}

export const SettingCostumer = AppCtx.Consumer;

export default AppCtx;
