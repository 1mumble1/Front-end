import Button from "../common/Button/Button";

function ToolBar() {
  return (
    <div>
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
