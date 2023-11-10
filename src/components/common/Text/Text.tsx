import { Char as TChar } from "../../../examples/types";
import Char from "../Char/Char";

type TextProps = {
  text: Array<TChar>;
};

function Text(props: TextProps) {
  return (
    <span>
      {props.text.map((char) => (
        <Char
          key={char.id}
          value={char.value}
          fontSize={char.fontSize}
          fontFamily={char.fontFamily}
          color={char.color}
          bold={char.bold}
          italic={char.italic}
          underlined={char.underlined}
        />
      ))}
    </span>
  );
}

export default Text;
