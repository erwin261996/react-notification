import { useContext } from "react";
import SettingContext from "./SettingContext";
export function useSetting() {
  const context = useContext(SettingContext);

  return context;
}
