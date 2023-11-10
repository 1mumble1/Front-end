import {
  Application as TApplication,
  Canvas as TCanvas,
} from "../../examples/types";
import Canvas from "../Canvas/Canvas";
import ToolBar from "../ToolBar/ToolBar";
import styles from "./Application.module.css";

type DocProps = {
  app: TApplication;
};

function Application(props: DocProps) {
  const canvas: TCanvas = props.app.page;
  return (
    <div className={styles.app}>
      <p className={styles.app_name}>{canvas.name}</p>
      <ToolBar />
      <Canvas page={canvas} />
    </div>
  );
}

export default Application;
