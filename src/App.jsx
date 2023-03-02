import { useState } from "react";
import frases from "./assets/data.json";
import pictures from "./assets/pictures.json";
import Card from "./components/Card/Card";
import Background from "./components/Background/Background";
import "./App.css";

function App() {
  let numRandomBackground = Math.round(Math.random() * (pictures.length - 1));
  let numRandomFrases = Math.round(Math.random() * (frases.length - 1));

  const [indexPhrases, setIndexPhrases] = useState(numRandomFrases);
  const [indexImg, setIndexImg] = useState(numRandomBackground);
  
  const changeIndexBackground = () => {
    let numRandonBg = Math.round(Math.random() * (pictures.length - 1));
    while(numRandonBg === indexImg) {
      numRandonBg = Math.round(Math.random() * (pictures.length - 1));
    }
    setIndexImg(numRandonBg);
  };
  const changeIndexPhrases = () => {
    let numRandom = Math.round(Math.random() * (frases.length - 1));
    while(indexPhrases === numRandom) {
      numRandom = Math.round(Math.random() * (frases.length - 1));
    }
    setIndexPhrases(numRandom);
  };


  return (
    <div className="App">
      <Background background={pictures[indexImg]} />
      <h1>Galleta de la Fortuna</h1>
      <Card
        framework={frases[indexPhrases]}
        changePhrases={changeIndexPhrases}
        changeBackGround={changeIndexBackground}
      />
    </div>
  );
}

export default App;
