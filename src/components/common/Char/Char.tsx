import { CSSProperties } from "react";

type CharProps = {
  key: string;
  value: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
  italic: boolean;
  underlined: boolean;
};

function Char(props: CharProps) {
  const style: CSSProperties = {
    fontFamily: props.fontFamily,
    fontSize: props.fontSize,
    color: props.color,
    fontStyle: props.italic ? "italic" : "normal",
    fontWeight: props.bold ? "bold" : "normal",
    textDecoration: props.underlined ? "underlined" : "none",
  };

  return <span style={style}>{props.value}</span>;
}

export default Char;
