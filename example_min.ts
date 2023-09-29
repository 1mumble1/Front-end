const char: Char = {
  value: 'z',
  fontSize: 14,
  fontFamily: 'Times New Roman',
  color: '#fdbarc',
  bold: false,
  italic: false,
  underlined: false,
};

const pos: Position = {
    x: 13,
    y: -5,
};

const size: Size = {
  width: 13,
  height: 4,
};

const block: Block = {
  id: 'id1',
  position: pos,
  size: size,
};
  
const text: TextBlock = {
  ...block,
  type: 'text',
  data: [],
};
  
const image: ImageBlock = {
  ...block,
  type: 'image',
  data: '',
};

const form: Form = 'ellipse';

const rect: GraphicBlock = {
  ...block,
  type: 'graphic',
  form: form,
  color: 'red',
};

const oper: Operation = {
  id: 'oper1',
};

const hist: HistoryOperations = [];

const filter: Filter = null;

const canvas: Canvas = {
  name: 'Card 1',
  background: '#aaaaaa',
  size: size,
  filter: filter,
  objects: [],
};

const doc: Doc = {
  page: canvas,
};