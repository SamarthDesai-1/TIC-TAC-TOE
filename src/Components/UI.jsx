import Block from "./Block";
import styles from "./UI.module.css";
import { useState } from "react";

export default function UI() {

  const [state, setState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(0);

  const checkWinner = () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [x, y, z] = win[i];
      if (state[x] !== null && state[x] === state[y] && state[x] === state[z]) {
        return true;
      }
    }
    return false;
  };

  const handleClick = (blockIdx) => {
    /** Check if someone has won */

    const winner = checkWinner();
    if (winner) {
      alert(`${(turn - 1) % 2 === 0 ? "X" : "O"} WINS`);
      return;
    }

    if (turn % 2 == 0) {
      if (state[blockIdx] !== null) return;
      setTurn(turn + 1);
      setState(state.map((item, index) => index === blockIdx ? "X" : item));
    }
    else {
      if (state[blockIdx] !== null) return;
      setTurn(turn + 1);
      setState(state.map((item, index) => index === blockIdx ? "O" : item));
    }
  };

  const handleRestart = () => {
    setState(Array(9).fill(null));
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Tic Tac Toe</h1>

        <div className={styles.board}>
          <div className={styles.row}>
            <Block item={state[0]} handlecClick={() => handleClick(0)}></Block>
            <Block item={state[1]} handlecClick={() => handleClick(1)}></Block>
            <Block item={state[2]} handlecClick={() => handleClick(2)}></Block>
          </div>
          <div className={styles.row}>
            <Block item={state[3]} handlecClick={() => handleClick(3)}></Block>
            <Block item={state[4]} handlecClick={() => handleClick(4)}></Block>
            <Block item={state[5]} handlecClick={() => handleClick(5)}></Block>
          </div>
          <div className={styles.row}>
            <Block item={state[6]} handlecClick={() => handleClick(6)}></Block>
            <Block item={state[7]} handlecClick={() => handleClick(7)}></Block>
            <Block item={state[8]} handlecClick={() => handleClick(8)}></Block>
          </div>
        </div>

        <div className={styles.message}><button className={styles.btn} onClick={handleRestart}>Restart</button></div>
      </div>
    </>
  );
};