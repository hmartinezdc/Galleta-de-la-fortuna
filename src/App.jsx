import { useState } from "react";
import frases from "./assets/data.json";
import "./App.css";
import Card from "./components/Card/Card";
import Background from "./components/Background/Background";
import pictures from "./assets/pictures.json";

function App() {
  let numRandomFrases = Number((Math.random() * (frases.length - 1)).toFixed(0));

  const [indexVisibleFramework, setframeworkVisible] = useState(numRandomFrases);

  const changeFramework = () => {
    let numRandon = Number((Math.random() * (frases.length - 1)).toFixed(0));

    while(numRandon === indexVisibleFramework) {
      numRandon = Number((Math.random() * (frases.length - 1)).toFixed(0));
    }
    setframeworkVisible(numRandon);
  };

  let numRandomBackground = Number((Math.random() * 3).toFixed(0));
  const [firstImg, setfirstImg] = useState(numRandomBackground);

  const changeBackgroundImg = () => {
    let numRandon = Number((Math.random() * 3).toFixed(0));
    while(numRandon === firstImg) {
      numRandon = Number((Math.random() * 3).toFixed(0));
    }
    setfirstImg(numRandon);
  };

  return (
    <div className="App">
      <Background background={pictures[firstImg]} />
      <h1>Galleta de la Fortuna</h1>
      <Card
        framework={frases[indexVisibleFramework]}
        changeFramework={changeFramework}
        changeBackGround={changeBackgroundImg}
      />
    </div>
  );
}

export default App;
