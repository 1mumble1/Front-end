import {
  Canvas,
  Size,
  HistoryCondition,
  Filter,
  Application,
} from "../examples/types";

const size: Size = {
  width: 1152,
  height: 648,
};

const filter: Filter = null;

const canvas: Canvas = {
  name: "Card_1",
  background: "#ffffff",
  size: size,
  filter: filter,
  objects: [],
};

const hist: HistoryCondition = {
  history: [canvas],
  index: 0,
};

const app: Application = {
  page: hist.history[hist.index],
  history: hist,
};

export default app;
