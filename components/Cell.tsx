import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100px;
  height: 100px;
  font-size: 80px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Cell({ turn, setTurn, idx, setMap, map }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setMap((prev) => {
      return {
        ...prev,
        [idx]: value,
      };
    });
  }, [value]);

  useEffect(() => {
    if (map.length == 0) {
      setValue("");
    }
  }, [map]);

  const handleMove = () => {
    if (value === "") {
      setValue(turn % 2 == 0 ? "X" : "O");
      setTurn(turn + 1);
    }
  };
  return <Container onClick={handleMove}>{value}</Container>;
}
