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

const ellipseForm: Form = 'ellipse';
const ellipsePos: Position = {
  x: 700,
  y: 300,
};
const ellipseSize: Size = {
  width: 200,
  height: 40,
};
const ellipseBlock: Block = {
  id: 'id3',
  position: ellipsePos,
  size: ellipseSize,
};
const ellipse: GraphicBlock = {
  ...ellipseBlock,
  type: 'graphic',
  form: ellipseForm,
  color: '#123456',
};

const rectangleForm: Form = 'ellipse';
const rectanglePos: Position = {
  x: 3,
  y: 20,
};
const rectangleSize: Size = {
  width: 50,
  height: 50,
};
const rectangleBlock: Block = {
  id: 'id4',
  position: rectanglePos,
  size: rectangleSize,
};
const rectangle: GraphicBlock = {
  ...rectangleBlock,
  type: 'graphic',
  form: rectangleForm,
  color: '#222222',
};

const triangleForm: Form = 'ellipse';
const trianglePos: Position = {
  x: 100,
  y: 40,
};
const triangleSize: Size = {
  width: 30,
  height: 50,
};
const triangleBlock: Block = {
  id: 'id5',
  position: trianglePos,
  size: triangleSize,
};
const triangle: GraphicBlock = {
  ...triangleBlock,
  type: 'graphic',
  form: triangleForm,
  color: '#ABCDEF',
};

const changeSizeCanvas: Operation = {
  id: 'id1',
};
const changeFilter: Operation = {
  id: 'id2',
};
const pasteImage: Operation = {
  id: 'id3',
};
const changeSizeImage: Operation = {
  id: 'id4',
};
const changePosImage: Operation = {
  id: 'id5',
};
const pasteText: Operation = {
  id: 'id6',
}
const changeBoldText: Operation = {
  id: 'id7',
}
const changeItalicText: Operation = {
  id: 'id8',
}
const changeUnderlinedText: Operation = {
  id: 'id9',
}
const changePosText: Operation = {
  id: 'id10',
}
const changeSizeText: Operation = {
  id: 'id11',
}
const pasteEllipse: Operation = {
  id: 'id12',
}
const changeColorEllipse: Operation = {
  id: 'id13',
}
const pasteRectangle: Operation = {
  id: 'id14',
}
const changeColorRectangle: Operation = {
  id: 'id15',
}
const pasteTringle: Operation = {
  id: 'id16',
}
const changeColorTringle: Operation = {
  id: 'id17',
}
const hist2: HistoryOperations = [
  changeSizeCanvas,
  changeFilter,
  pasteImage,
  changeSizeImage,
  changePosImage,
  pasteText,
  changeBoldText,
  changeItalicText,
  changeUnderlinedText,
  changePosText,
  changeSizeText,
  pasteEllipse,
  changeColorEllipse,
  pasteRectangle,
  changeColorRectangle,
  pasteTringle,
  changeColorTringle
]

const canvas2: Canvas = {
  name: 'Card_3',
  background: '#aaaaaa',
  size: size2,
  filter: filter2,
  objects: [image, text, ellipse, rectangle, triangle],
};

const doc2: Doc = {
  page: canvas2,
};
