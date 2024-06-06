import styles from "./Button.module.css"

export default function Button(prop) {
    // console.log(prop);
    console.log(styles);
    const { onClick, text} = prop;
  return (
    
    <button className={styles.border} onClick={onClick}>{text}</button>
    
  )
}
