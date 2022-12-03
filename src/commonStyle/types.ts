type Mt = Array<number | string> | string;

export type Boxes = {
  background?: string;
  color?: string;
  space?: number | string;
  layout?: string;
  flexbox?: string;
  grid?: string | number;
  position?: string;
  border?: string | number;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  mt?: Mt;
  width?: string;
  flexDirection?: string;
  gridGap?: Mt;
  px?: Mt;
  borderRadius?: string;
  py?: Mt;
};
