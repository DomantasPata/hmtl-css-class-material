import styles from "./Input.module.css"
import classNames from "classnames"
export default function Input({label, id, onChange, type, bigFont}) {


  return (
    <div className={classNames(styles.border, bigFont && styles.fontsize)}>
        <label htmlFor={id}>{label}</label>
        <input type={type} onChange={onChange} id={id}/>
    </div>
  )
}
