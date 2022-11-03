export type PositionTypes =
  | "leftBottom"
  | "leftTop"
  | "rightBottom"
  | "rightTop";

export interface ValuePositionTypes {
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  top?: number | string;
}

export const styleMove: Readonly<Record<PositionTypes, ValuePositionTypes>> = {
  rightTop: {
    top: 0,
    right: 0,
  },
  rightBottom: {
    right: 0,
    bottom: 0,
  },
  leftTop: {
    left: 0,
    top: 0,
  },
  leftBottom: {
    bottom: 0,
    left: 0,
  },
};

export const styleMoveString: Readonly<
  Record<PositionTypes, ValuePositionTypes>
> = {
  rightTop: {
    right: "-17px",
    top: "-12px",
  },
  rightBottom: {
    right: "-17px",
    bottom: "-10px",
  },
  leftTop: {
    left: "-17px",
    top: "-12px",
  },
  leftBottom: {
    left: "-17px",
    bottom: "-10px",
  },
};
