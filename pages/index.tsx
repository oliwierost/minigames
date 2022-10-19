import styles from "../styles/Home.module.css"
import { TicTacToe } from "components/TicTacToe"
import { Snake } from "components/Snake"

export default function Home() {
  return (
    <div className={styles.container}>
      <Snake />
      <TicTacToe />
    </div>
  )
}
