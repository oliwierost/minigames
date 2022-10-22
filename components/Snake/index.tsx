import { useState, useEffect } from "react"
import styled from "styled-components"
import { useKeypress } from "react-use-keypress"

const Cell = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
`

export function Snake() {
  const getRandomDirection = () => {
    const directions = ["top", "bottom", "left", "right"]
    return directions[Math.floor(Math.random() * directions.length)]
  }
  const [boardSize, setBoardSize] = useState(10)
  const [snake, setSnake] = useState({
    direction: getRandomDirection(),
    size: [],
  })
  const [food, setFood] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [isLost, setIsLost] = useState(false)

  const Grid = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(${boardSize}, 1fr);
  `

  useEffect(() => {
    setIsLost(false)
    setSnake({ direction: "top", size: [] })
    getStartingPosition()
  }, [isLost])

  useEffect(() => generateFood(), [snake.size.length])

  useEffect(() => {
    const interval = setInterval(() => {
      const { direction, size } = snake
      const newSize = size.map((bodyPart, idx) => {
        if (direction === "top" && idx === 0) {
          return bodyPart - boardSize
        }
        if (direction === "bottom" && idx === 0) {
          return bodyPart + boardSize
        }
        if (direction === "left" && idx === 0) {
          return bodyPart - 1
        }
        if (direction === "right" && idx === 0) {
          return bodyPart + 1
        }
        if (idx !== 0) {
          return size[idx - 1]
        }
      })
      if (food == newSize[0]) {
        newSize.push(size[size.length - 1])
      }
      setSnake({ ...snake, size: newSize })
      checkLose()
    }, Math.pow(0.9, snake.size.length) * 700)
    return () => clearInterval(interval)
  }, [snake])

  const board = Array.from(new Array(boardSize * boardSize), (field, idx) => {
    return idx
  })

  const getStartingPosition = () => {
    const start = Math.floor(Math.random() * boardSize * boardSize)
    return setSnake({ ...snake, size: [start] })
  }

  const handleKeyPress = (e) => {
    if (e.key === "ArrowUp" && snake.direction !== "bottom") {
      setSnake({ ...snake, direction: "top" })
    }
    if (e.key === "ArrowDown" && snake.direction !== "top") {
      setSnake({ ...snake, direction: "bottom" })
    }
    if (e.key === "ArrowLeft" && snake.direction !== "right") {
      setSnake({ ...snake, direction: "left" })
    }
    if (e.key === "ArrowRight" && snake.direction !== "left") {
      setSnake({ ...snake, direction: "right" })
    }
  }

  const generateFood = () => {
    const newFood = Math.floor(Math.random() * boardSize * boardSize)
    setFood(newFood)
  }

  const checkLose = () => {
    const { size } = snake
    const head = size[0]
    const body = size.slice(1)
    if (body.includes(head)) {
      setIsLost(true)
      if (size.length > highScore) {
        setHighScore(size.length)
      }
      alert("You lose!")
    }
  }

  return (
    <div>
      <label>Board size:</label>
      <input
        type="number"
        value={boardSize}
        onChange={(e) => setBoardSize(parseInt(e.target.value))}
      />
      <input onKeyDown={(e) => handleKeyPress(e)} />
      <div>your current score is {snake.size.length - 1}</div>
      <div>your high score is {highScore}</div>
      <Grid>
        {board.map((field, idx) => (
          <Cell
            style={{
              background: snake.size.includes(idx)
                ? "green"
                : idx == food
                ? "red"
                : "white",
            }}
          ></Cell>
        ))}
      </Grid>
    </div>
  )
}
