import { Reducer } from "react"
import { PositionTypes } from "@/interfaces";

export type ContextType = {
  positionBadge: PositionTypes;
  showController: boolean;
  sun: boolean;
  code: boolean;
};

export type ContantsTypes =
  | "POSITION_BADGE"
  | "SHOW_CONTROLLER"
  | "SUN"
  | "CODE"
  | "DEFAULT";

export const Types: Record<keyof ContextType, ContantsTypes> = {
  positionBadge: "POSITION_BADGE",
  showController: "SHOW_CONTROLLER",
  sun: "SUN",
  code: "CODE",
};

export interface ContextActions {
  type: ContantsTypes;
  payload: any;
}

const reducer: Reducer<ContextType, ContextActions> = (state, { type, payload }) => {
  switch (type) {
    case Types.positionBadge:
      return {...state, positionBadge: payload}

    case Types.showController:
      return {...state, showController: payload}

    case Types.sun:
      return {...state, sun: payload}

    case Types.code:
      return {...state, code: payload}

    default:
      return state;
  }
};

export default reducer;
