import { TicTacToe } from "components/TicTacToe"
import styles from "../styles/Home.module.css"

export default function tictactoe() {
  return (
    <div className={styles.container}>
      <TicTacToe />
    </div>
  )
}
