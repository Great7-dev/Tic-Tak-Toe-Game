import React, { useEffect, useState } from 'react';
import { boardStyle, buttonStyle, containerStyle, instructionsStyle, rowStyle, squareStyle } from './GameStyle';
import background from "../../assets/GAMING PATTERNS 3D.jpg"
import { useRecoilState } from 'recoil';
import { showSuccessModalState } from '../../atoms/success';
import SuccessModal from '../Modal/SuccessModal';
import { resetAllState, resetState } from '../../atoms/reset';


function Square({num, handleClick, cells}) {
 
  return (
    <div onClick={()=> handleClick(num)}
      className="square"
      style={squareStyle}>
      {cells[num]}
    </div>
  );
}

function Board() {
  const [turn, setTurn] = useState("X")
  const [cells, setCells] = useRecoilState(resetAllState)
  const [winner, setWinner] = useRecoilState(resetState)
  const [showModal, setShowModal] = useRecoilState(showSuccessModalState)

  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6]
      ]
    }

    for(let combo in combos) {
      combos[combo].forEach((pattern) => {
       
        if(squares[pattern[0]] === "" || squares[pattern[1]] === "" || squares[pattern[2]] === "") {
        
        } else if (squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]) {
          setWinner(squares[pattern[0]]);
          setShowModal(true)
        }
      })
    }

  }

  const handleClick = (num) => {
    if(winner) {
      return
    }
    if(cells[num] !== "") {
      return
    }
    let squares = [...cells];
    if(turn ==="X") {
      squares[num] = "X"
      setTurn("O")
    } else {
      squares[num] = "O"
      setTurn("X")
    }
    
    checkForWinner(squares)
    setCells(squares);
  }

  useEffect(() => {
    if(winner) {
      setShowModal(true)
    }
  }, [winner])



  return (
    <>
      <div style={containerStyle}>

        <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{turn}</span></div>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square num={0} handleClick={handleClick} cells={cells}/>
            <Square num={1} handleClick={handleClick} cells={cells}/>
            <Square num={2} handleClick={handleClick} cells={cells}/>
          </div>
          <div className="board-row" style={rowStyle}>
            <Square num={3} handleClick={handleClick} cells={cells}/>
            <Square num={4} handleClick={handleClick} cells={cells}/>
            <Square num={5} handleClick={handleClick} cells={cells}/>
          </div>
          <div className="board-row" style={rowStyle}>
            <Square num={6} handleClick={handleClick} cells={cells}/>
            <Square num={7} handleClick={handleClick} cells={cells}/>
            <Square num={8} handleClick={handleClick} cells={cells}/>
          </div>
        </div>
      </div>
    {showModal && <SuccessModal /> }
    </>
  );
}

export default Board;