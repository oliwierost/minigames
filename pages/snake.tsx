import { Snake } from "components/Snake"
import styles from "../styles/Home.module.css"

export default function tictactoe() {
  return (
    <div className={styles.container}>
      <Snake />
    </div>
  )
}
