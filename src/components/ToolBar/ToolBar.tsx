import Button from "../common/Button/Button";
import styles from "./ToolBar.module.css";

function ToolBar() {
  return (
    <div className={styles.tool_bar}>
      <Button type="new-file" />
      <Button type="save" />
      <Button type="import" />
      <Button type="export" />
      <Button type="undo" />
      <Button type="redo" />
      <Button type="text" />
      <Button type="image" />
      <Button type="rectangle" />
      <Button type="ellipse" />
      <Button type="triangle" />
    </div>
  );
}
export default ToolBar;
