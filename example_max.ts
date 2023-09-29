const char2: Char = {
  value: 'A',
  fontSize: 14,
  fontFamily: 'Times New Roman',
  color: '#fdbarc',
  bold: true,
  italic: false,
  underlined: false,
};

const pos2: Position = {
    x: 13,
    y: -5,
};

const size2: Size = {
  width: 13,
  height: 4,
};

const block2: Block = {
  id: 'id3',
  position: pos,
  size: size,
};
  
const text2: TextBlock = {
  ...block2,
  type: 'text',
  data: [char, char1, char2],
};
  
const image2: ImageBlock = {
  ...block2,
  type: 'image',
  data: 'C:/img.png',
};

const form2: Form = 'ellipse';

const rect2: GraphicBlock = {
  ...block2,
  type: 'graphic',
  form: form,
  color: 'red',
};

const oper2: Operation = {
  id: 'oper3',
};

const hist2: HistoryOperations = [oper];

const filter2: Filter = 'red';

const canvas2: Canvas = {
  name: 'Card 3',
  background: '#aaaaaa',
  size: size2,
  filter: filter2,
  objects: [image2, rect2, text2],
};

const doc2: Doc = {
  page: canvas2,
};