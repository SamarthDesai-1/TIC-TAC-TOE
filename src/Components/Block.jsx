import styles from "./UI.module.css";

export default function Block({ item, handlecClick }) {
  return <div className={styles.cell} onClick={handlecClick}>{item}</div>
};