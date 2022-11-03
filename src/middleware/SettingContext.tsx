import { createContext, useState, PropsWithChildren } from "react";
import { PositionTypes } from "@/interfaces";

interface AppContextInterface {
  positionBadge: PositionTypes;
  setPositionBadge: (
    value: PositionTypes | ((prevVar: PositionTypes) => PositionTypes)
  ) => void;
  showController: boolean;
  setShowController: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const AppCtx = createContext<AppContextInterface>({} as AppContextInterface);

export function SettingProvider({ children }: PropsWithChildren) {
  const [positionBadge, setPositionBadge] = useState<PositionTypes>("rightTop");
  const [showController, setShowController] = useState<boolean>(false);

  return (
    <AppCtx.Provider
      value={{
        positionBadge,
        setPositionBadge,
        showController,
        setShowController,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
}

export const SettingCostumer = AppCtx.Consumer;

export default AppCtx;
