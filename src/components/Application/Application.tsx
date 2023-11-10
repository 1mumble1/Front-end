import {
  Application as TApplication,
  Canvas as TCanvas,
} from "../../examples/types";
import Canvas from "../Canvas/Canvas";
import "./Application.css";

type DocProps = {
  app: TApplication;
};

function Application(props: DocProps) {
  const canvas: TCanvas = props.app.page;
  return (
    <div className="App">
      <p className="App__name">{canvas.name}</p>
      <Canvas page={canvas} />
    </div>
  );
}

export default Application;
