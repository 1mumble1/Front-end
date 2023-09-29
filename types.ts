type Char = {
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

type TextBlock = Block & {
  type: 'text';
  data: Array<Char>;
};

type ImageBlock = Block & {
  type: 'image';
  data: string;
};

type GraphicBlock = Block & {
  type: 'graphic';
  form: Form;
  color: string;
};

type Form = 'ellipse' | 'rectangle' | 'triangle';

type Operation = {
  id: string;
};

type HistoryOperations = Array<Operation>;

type Filter = 'grey' | 'red' | 'blue' | 'green' | null;

type Doc = {
  page: Canvas;
};