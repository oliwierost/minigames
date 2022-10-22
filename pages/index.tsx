import styles from "../styles/Home.module.css"
import { TicTacToe } from "components/TicTacToe"
import { Snake } from "components/Snake"
import Link from "next/link"
import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const GameLink = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`

export default function Home() {
  return (
    <div className={styles.container}>
      <Row>
        <Link href="/tictactoe">
          <GameLink>Play TicTacToe</GameLink>
        </Link>
        <Link href="/snake">
          <GameLink>Play Snake</GameLink>
        </Link>
      </Row>
    </div>
  )
}
