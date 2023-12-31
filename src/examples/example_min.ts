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
  Operation,
  HistoryOperations,
  Filter,
  Doc,
} from "../examples/types";

const size: Size = {
  width: 1152,
  height: 648,
};

const hist: HistoryOperations = [];

const filter: Filter = null;

const canvas: Canvas = {
  name: "Card_1",
  background: "#ffffff",
  size: size,
  filter: filter,
  objects: [],
};

const doc: Doc = {
  page: canvas,
};
