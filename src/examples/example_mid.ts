import {
  Canvas,
  Position,
  Size,
  Block,
  GraphicBlock,
  Form,
  HistoryCondition,
  Filter,
  Application,
} from "../examples/types";

const size1: Size = {
  width: 1500,
  height: 750,
};

const filter1: Filter = null;

const form1: Form = "triangle";
const graphPos1: Position = {
  x: 700,
  y: 300,
};
const graphSize1: Size = {
  width: 200,
  height: 40,
};
const graphBlock1: Block = {
  id: "id1",
  position: graphPos1,
  size: graphSize1,
};
const graph1: GraphicBlock = {
  ...graphBlock1,
  type: "graphic",
  form: form1,
  color: "#123456",
};

const canvas1: Canvas = {
  name: "Card_2",
  background: "#ffffff",
  size: size1,
  filter: filter1,
  objects: [],
};
const canvas2: Canvas = {
  name: "Card_2",
  background: "#dddddd",
  size: size1,
  filter: filter1,
  objects: [graph1],
};

const hist: HistoryCondition = {
  history: [canvas1, canvas2],
  index: 1,
};

const app: Application = {
  page: hist.history[hist.index],
  history: hist,
};

export default app;
