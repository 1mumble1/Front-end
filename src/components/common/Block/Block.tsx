import { CSSProperties } from "react";
import { GraphicBlock, ImageBlock, TextBlock } from "../../../examples/types";
import Graphic from "../Graphic/Graphic";
import Image from "../Image/Image";
import Text from "../Text/Text";
import "./Block.css";

type BlockProps = {
  object: TextBlock | ImageBlock | GraphicBlock;
};

function isText(object: BlockProps["object"]): object is TextBlock {
  return (
    object.type === "text" &&
    typeof object.data === "object" &&
    object.data !== null
  );
}

function isImage(object: BlockProps["object"]): object is ImageBlock {
  return (
    object.type === "image" &&
    typeof object.data === "string" &&
    object.data !== null
  );
}

function isGraphic(object: BlockProps["object"]): object is GraphicBlock {
  return (
    object.type === "graphic" && object.form !== null && object.color !== null
  );
}

function Block(props: BlockProps) {
  const object = props.object;
  const style: CSSProperties = {
    width: object.size.width,
    height: object.size.height,
    top: object.position.y,
    left: object.position.x,
  };

  return (
    <div style={style} className="Block">
      {isText(object) && <Text text={object.data} />}
      {isImage(object) && (
        <Image
          src={object.data}
          width={object.size.width}
          height={object.size.height}
        />
      )}
      {isGraphic(object) && (
        <Graphic
          form={object.form}
          color={object.color}
          width={object.size.width}
          height={object.size.height}
        />
      )}
    </div>
  );
}

export default Block;
