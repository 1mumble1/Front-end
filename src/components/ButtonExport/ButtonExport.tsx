import styles from "./ButtonExport.module.css";
import { Canvas } from "../../examples/types";

type ButtonProps = {
  type: string;
  action: Canvas;
};

function ButtonExport(props: ButtonProps) {
  const type = props.type;
  const canvas = props.action;
  const src = "./images/" + type + ".png";

  const file = new Blob([JSON.stringify(canvas)], {
    type: "application.json",
  });

  function downloadFile() {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "file.json";
    link.click();
  }

  return (
    <button className={styles.button} onClick={downloadFile}>
      <img src={src} className={styles.icon} alt={props.type} />
    </button>
  );
}

export default ButtonExport;
