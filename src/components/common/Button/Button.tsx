import styles from "./Button.module.css";

type ButtonProps = {
  type: string;
};

function Button(props: ButtonProps) {
  const type = props.type;
  const src = "./images/" + type + ".png";

  return (
    <button className={styles.button}>
      <img src={src} className={styles.icon} alt={props.type} />
    </button>
  );
}

export default Button;
