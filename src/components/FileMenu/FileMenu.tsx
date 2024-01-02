import Button from "../common/Button/Button";
import { Canvas } from "../../examples/types";
import ButtonImport from "../ButtonImport/ButtonImport";
import ButtonExport from "../ButtonExport/ButtonExport";

type FileMenuProps = {
  export: Canvas;
  import: (canvas: Canvas) => void;
};

function FileMenu(props: FileMenuProps) {
  return (
    <div>
      <Button type="new-file" onclick={() => console.log("new")} />
      <Button type="save" onclick={() => console.log("save")} />
      <ButtonImport type="import" action={props.import} />
      <ButtonExport type="export" action={props.export} />
    </div>
  );
}
export default FileMenu;
