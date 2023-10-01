const size2: Size = {
  width: 1500,
  height: 750,
};

const filter2: Filter = 'green';

const imagePos: Position = {
  x: 45,
  y: 340,
};
const imageSize: Size = {
  width: 50,
  height: 45,
};
const imageBlock: Block = {
  id: 'id1',
  position: imagePos,
  size: imageSize,
};
const image: ImageBlock = {
  ...imageBlock,
  type: 'image',
  data: 'C:/img.png',
};

const ch1: Char = {
  value: 'a',
  fontSize: 14,
  fontFamily: 'Arial',
  color: '#000000',
  bold: true,
  italic: false,
  underlined: false,
};
const ch2: Char = {
  value: 'B',
  fontSize: 14,
  fontFamily: 'Arial',
  color: '#000000',
  bold: false,
  italic: true,
  underlined: false,
};
const ch3: Char = {
  value: 'c',
  fontSize: 14,
  fontFamily: 'Arial',
  color: '#000000',
  bold: false,
  italic: false,
  underlined: true,
};
const textPos: Position = {
  x: 500,
  y: 40,
};
const textSize: Size = {
  width: 100,
  height: 25,
};
const textBlock: Block = {
  id: 'id2',
  position: textPos,
  size: textSize,
};
const text: TextBlock = {
  ...textBlock,
  type: 'text',
  data: [ch1, ch2, ch3],
};

const form: Form = 'ellipse';
const graphPos: Position = {
  x: 700,
  y: 300,
};
const graphSize: Size = {
  width: 200,
  height: 40,
};
const graphBlock: Block = {
  id: 'id3',
  position: graphPos,
  size: graphSize,
};
const graph: GraphicBlock = {
  ...graphBlock,
  type: 'graphic',
  form: form,
  color: '#123456',
};

const op1: Operation = {
  id: 'id1',
};
const op2: Operation = {
  id: 'id2',
};
const op3: Operation = {
  id: 'id3',
};
const hist2: HistoryOperations = [op1, op2, op3]

const canvas2: Canvas = {
  name: 'Card_3',
  background: '#aaaaaa',
  size: size2,
  filter: filter2,
  objects: [image, text, graph],
};

const doc2: Doc = {
  page: canvas2,
};
