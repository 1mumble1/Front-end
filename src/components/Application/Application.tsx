import {
  Application as TApplication,
  Canvas as TCanvas,
  TextBlock,
  ImageBlock,
  GraphicBlock,
} from "../../examples/types";
import Canvas from "../Canvas/Canvas";
import ToolBar from "../ToolBar/ToolBar";
import styles from "./Application.module.css";
import { useState } from "react";
import FileMenu from "../FileMenu/FileMenu";

type DocProps = {
  app: TApplication;
};

function Application(props: DocProps) {
  const [canvas, setCanvas] = useState<TCanvas>(props.app.page);

  const addObject = (obj: TextBlock | ImageBlock | GraphicBlock) => {
    setCanvas((canvas: TCanvas) => ({
      ...canvas,
      objects: [...canvas.objects, obj],
    }));
  };

  return (
    <div className={styles.app}>
      <p className={styles.app_name}>{canvas.name}</p>
      <div className={styles.menu_bar}>
        <div className={styles.bar_section}>
          <p className={styles.bar_section_name}>File</p>
          <FileMenu export={canvas} import={setCanvas} />
        </div>
        <div className={styles.bar_section}>
          <p className={styles.bar_section_name}>Tools</p>
          <ToolBar />
        </div>
      </div>
      <Canvas page={canvas} />
    </div>
  );
}

export default Application;
