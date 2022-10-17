import { Cell } from "./Cell";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const ResetButton = styled.button`
  width: 50%;
  height: 100px;
  font-size: 40px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
`;

export function Canvas() {
  const [turn, setTurn] = useState(0);
  const [map, setMap] = useState([]);
  const [history, setHistory] = useState([]);

  const checkWinner = () => {
    const winningCombos = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    if (turn < 9) {
      for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (map[a] && map[a] === map[b] && map[a] === map[c]) {
          alert(map[a] + " wins");
          setHistory((prev) => {
            return [...prev, `${map[a]} won`];
          });
        }
      }
    } else {
      alert("Draw");
      setHistory((prev) => {
        return [...prev, "Draw"];
      });
    }
    return null;
  };

  const handleReset = () => {
    setTurn(0);
    setMap([]);
  };

  useEffect(() => {
    checkWinner();
  }, [map]);

  return (
    <div>
      <Row>
        <Cell turn={turn} setTurn={setTurn} idx={1} map={map} setMap={setMap} />
        <Cell turn={turn} setTurn={setTurn} idx={2} map={map} setMap={setMap} />
        <Cell turn={turn} setTurn={setTurn} idx={3} map={map} setMap={setMap} />
      </Row>
      <Row>
        <Cell turn={turn} setTurn={setTurn} idx={4} map={map} setMap={setMap} />
        <Cell turn={turn} setTurn={setTurn} idx={5} map={map} setMap={setMap} />
        <Cell turn={turn} setTurn={setTurn} idx={6} map={map} setMap={setMap} />
      </Row>
      <Row>
        <Cell turn={turn} setTurn={setTurn} idx={7} map={map} setMap={setMap} />
        <Cell turn={turn} setTurn={setTurn} idx={8} map={map} setMap={setMap} />
        <Cell turn={turn} setTurn={setTurn} idx={9} map={map} setMap={setMap} />
      </Row>
      <ResetButton onClick={handleReset}>PLAY AGAIN</ResetButton>
      <div>
        {history.map((item, idx) => {
          return <div key={idx}>{item}</div>;
        })}
      </div>
    </div>
  );
}
