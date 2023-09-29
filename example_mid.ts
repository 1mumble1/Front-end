const char1: Char = {
  value: 'A',
  fontSize: 14,
  fontFamily: 'Times New Roman',
  color: '#fdbarc',
  bold: true,
  italic: false,
  underlined: false,
};

const pos1: Position = {
    x: 13,
    y: -5,
};

const size1: Size = {
  width: 13,
  height: 4,
};

const block1: Block = {
  id: 'id2',
  position: pos,
  size: size,
};
  
const text1: TextBlock = {
  ...block1,
  type: 'text',
  data: [],
};
  
const image1: ImageBlock = {
  ...block1,
  type: 'image',
  data: 'C:/img.png',
};

const form1: Form = 'ellipse';

const rect1: GraphicBlock = {
  ...block1,
  type: 'graphic',
  form: form,
  color: 'red',
};

const oper1: Operation = {
  id: 'oper2',
};

const hist1: HistoryOperations = [];

const filter1: Filter = null;

const canvas1: Canvas = {
  name: 'Card 2',
  background: '#aaaaaa',
  size: size1,
  filter: filter1,
  objects: [image1, rect1],
};

const doc1: Doc = {
  page: canvas1,
};