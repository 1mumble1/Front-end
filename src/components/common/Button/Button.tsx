import styles from "./Button.module.css";

type ButtonProps = {
  type: string;
};

function Button(props: ButtonProps) {
  const src = "./images/" + props.type + ".png";
  return (
    <button className={styles.button}>
      <img src={src} className={styles.icon} alt={props.type}></img>
    </button>
  );
}

export default Button;
