import {
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
} from "../examples/types";

const size2: Size = {
  width: 1500,
  height: 750,
};

const filter2: Filter = "green";

const imagePos: Position = {
  x: 45,
  y: 340,
};
const imageSize: Size = {
  width: 50,
  height: 45,
};
const imageBlock: Block = {
  id: "id1",
  position: imagePos,
  size: imageSize,
};
const image: ImageBlock = {
  ...imageBlock,
  type: "image",
  data: "https://w.forfun.com/fetch/4a/4ab4b2a2f3984e85c6b8325f972f65dc.jpeg",
};

const ch1: Char = {
  id: "id1",
  value: "a",
  fontSize: 38,
  fontFamily: "Arial",
  color: "#000000",
  bold: true,
  italic: false,
  underlined: false,
};
const ch2: Char = {
  id: "id2",
  value: "B",
  fontSize: 50,
  fontFamily: "Arial",
  color: "#000000",
  bold: false,
  italic: true,
  underlined: false,
};
const ch3: Char = {
  id: "id3",
  value: "c",
  fontSize: 25,
  fontFamily: "Arial",
  color: "#000000",
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
  id: "id2",
  position: textPos,
  size: textSize,
};
const text: TextBlock = {
  ...textBlock,
  type: "text",
  data: "[ch1, ch2, ch3]",
  fontSize: 20,
  fontFamily: "Arial",
  color: "black",
  bold: true,
  italic: false,
  underlined: true,
};

const ellipseForm: Form = "ellipse";
const ellipsePos: Position = {
  x: 700,
  y: 300,
};
const ellipseSize: Size = {
  width: 200,
  height: 40,
};
const ellipseBlock: Block = {
  id: "id3",
  position: ellipsePos,
  size: ellipseSize,
};
const ellipse: GraphicBlock = {
  ...ellipseBlock,
  type: "graphic",
  form: ellipseForm,
  color: "#123456",
};

const rectangleForm: Form = "rectangle";
const rectanglePos: Position = {
  x: 3,
  y: 20,
};
const rectangleSize: Size = {
  width: 50,
  height: 50,
};
const rectangleBlock: Block = {
  id: "id4",
  position: rectanglePos,
  size: rectangleSize,
};
const rectangle: GraphicBlock = {
  ...rectangleBlock,
  type: "graphic",
  form: rectangleForm,
  color: "#222222",
};

const triangleForm: Form = "triangle";
const trianglePos: Position = {
  x: 100,
  y: 40,
};
const triangleSize: Size = {
  width: 30,
  height: 50,
};
const triangleBlock: Block = {
  id: "id5",
  position: trianglePos,
  size: triangleSize,
};
const triangle: GraphicBlock = {
  ...triangleBlock,
  type: "graphic",
  form: triangleForm,
  color: "#ABCDEF",
};

const canvas21: Canvas = {
  name: "Card_3",
  background: "#ffffff",
  size: size2,
  filter: filter2,
  objects: [image],
};
const canvas22: Canvas = {
  name: "Card_3",
  background: "#aaaaaa",
  size: size2,
  filter: filter2,
  objects: [image, text],
};
const canvas23: Canvas = {
  name: "Card_3",
  background: "#aaaaaa",
  size: size2,
  filter: filter2,
  objects: [image, text, ellipse],
};
const canvas24: Canvas = {
  name: "Card_3",
  background: "#aaaaaa",
  size: size2,
  filter: filter2,
  objects: [image, text, ellipse, rectangle],
};
const canvas25: Canvas = {
  name: "Card_3",
  background: "#aaaaaa",
  size: size2,
  filter: filter2,
  objects: [image, text, ellipse, rectangle, triangle],
};

const hist1: HistoryCondition = {
  history: [canvas21, canvas22, canvas23, canvas24, canvas25],
  index: 4,
};

const app: Application = {
  page: hist1.history[hist1.index],
  history: hist1,
};

export default app;
