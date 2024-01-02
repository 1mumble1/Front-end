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
import { Dispatch, SetStateAction, useState } from "react";
import FileMenu from "../FileMenu/FileMenu";
import TextMenu from "../TextMenu/TextMenu";

type DocProps = {
  app: TApplication;
};

function Application(props: DocProps) {
  const [canvas, setCanvas] = useState<TCanvas>(props.app.page);

  const addObject = (obj: TextBlock | ImageBlock | GraphicBlock) => {
    setNewObj(obj);
  };

  const [newObj, setNewObj] = useState<TextBlock | ImageBlock | GraphicBlock>(
    null!,
  );

  const [showTextMenu, setTextMenu] = useState<boolean>(false);

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
          <ToolBar add={addObject} setTextMenu={setTextMenu} />
        </div>
        {showTextMenu ? (
          <div className={styles.bar_section}>
            <p className={styles.bar_section_name}>Text</p>
            <TextMenu
              newObj={newObj as TextBlock}
              setNewObj={setNewObj as Dispatch<SetStateAction<TextBlock>>}
            />
          </div>
        ) : null}
      </div>
      <Canvas
        page={canvas}
        newObj={newObj}
        setNewObj={setNewObj}
        setCanvas={setCanvas}
        setTextMenu={setTextMenu}
      />
    </div>
  );
}

export default Application;
