import { useState } from "react";
import Game from "./components/Game";
import "./index.scss";

function App() {
  let [counter, setCounter] = useState(0);
  let [correct, setCorrect] = useState(0);

  const onClickVariant = (index: number) => {
    setCounter(++counter);
  };

  return (
    <div className="App">
      <Game correct={correct} setCorrect={setCorrect} onClickVariant={onClickVariant} counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
