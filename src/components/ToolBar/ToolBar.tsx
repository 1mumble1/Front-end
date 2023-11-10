import Button from "../common/Button/Button";
import styles from "./ToolBar.module.css";

function ToolBar() {
  return (
    <div className={styles.tool_bar}>
      <Button type="undo" />
    </div>
  );
}
export default ToolBar;
