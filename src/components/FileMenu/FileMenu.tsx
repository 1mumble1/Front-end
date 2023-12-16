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
      <Button type="new-file" />
      <Button type="save" />
      <ButtonImport type="import" action={props.import} />
      <ButtonExport type="export" action={props.export} />
    </div>
  );
}
export default FileMenu;
