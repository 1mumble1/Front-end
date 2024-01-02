import styles from "./Button.module.css";

type ButtonProps = {
  type: string;
  onclick: () => void;
};

function Button(props: ButtonProps) {
  const type = props.type;
  const src = "./images/" + type + ".png";
  const action = props.onclick;

  return (
    <button className={styles.button} onClick={action}>
      <img src={src} className={styles.icon} alt={props.type} />
    </button>
  );
}

export default Button;
