import React from "react";
import { useRecoilState } from "recoil";
import { resetAllState, resetState } from "../../atoms/reset";
import { showSuccessModalState } from "../../atoms/success";
import { instructionsStyle } from "../Game/GameStyle";
import { SuccessStyle } from "../Modal/SuccessModalStyle";



const SuccessModal = () => {

    const [cells, setCells] = useRecoilState(resetAllState)
    const [winner, setWinner] = useRecoilState(resetState)
    const [showModal, setShowModal] = useRecoilState(showSuccessModalState)

    const handleRestart = () => {
        setWinner(null)
        setCells(Array(9).fill(""))
        setShowModal(false)

      }

  return(
    showModal &&
    <SuccessStyle>
        <div className="modal">
            <h1 className="text"> Congratulations</h1>
            <div id="winnerArea" className="text" style={instructionsStyle}> <span>{winner ? `${winner} wins` : "None"}</span></div>
            <button className="btn" onClick={handleRestart}>Reset</button>
        </div>
    </SuccessStyle>
  )
}

export default SuccessModal;