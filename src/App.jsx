import './App.css';
import Board from './components/Game/Game';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SuccessModal from './components/Modal/SuccessModal';


function App() {
    return (
      <>
      <Routes>
      <Route path="/" element={ <Board />} />
      </Routes>
      </>
    );
}

export default App;
