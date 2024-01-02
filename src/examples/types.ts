type Char = {
  id: string;
  value: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
  italic: boolean;
  underlined: boolean;
};

type Canvas = {
  name: string;
  background: string;
  size: Size;
  filter: Filter;
  objects: Array<TextBlock | ImageBlock | GraphicBlock>;
};

type Position = {
  x: number;
  y: number;
};

type Size = {
  width: number;
  height: number;
};

type Block = {
  id: string;
  position: Position;
  size: Size;
};

// type TextBlock = Block & {
//   type: "text";
//   data: Array<Char>;
// };

type TextBlock = Block & {
  type: "text";
  data: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
  italic: boolean;
  underlined: boolean;
};

type ImageBlock = Block & {
  type: "image";
  data: string;
};

type GraphicBlock = Block & {
  type: "graphic";
  form: Form;
  color: string;
};

type Form = "ellipse" | "rectangle" | "triangle";

type HistoryCondition = {
  history: Array<Canvas>;
  index: number;
};

type Filter = "grey" | "red" | "blue" | "green" | null;

type Application = {
  page: Canvas;
  history: HistoryCondition;
};

export type {
  Char,
  Canvas,
  Position,
  Size,
  Block,
  TextBlock,
  ImageBlock,
  GraphicBlock,
  Form,
  HistoryCondition,
  Filter,
  Application,
};
