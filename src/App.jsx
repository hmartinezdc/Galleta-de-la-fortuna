import { useState } from "react";
import frases from "./assets/data.json";
import "./App.css";
import Card from "./components/Card/Card";
import Background from "./components/Background/Background";

function App() {
  let randon = Number((Math.random() * (frases.length - 1)).toFixed(0));

  const [indexVisibleFramework, setframeworkVisible] = useState(randon);
  const changeFramework = () => {
    const numRandon = Number((Math.random() * (frases.length - 1)).toFixed(0));
    setframeworkVisible(numRandon);
  };

  let randon2 = Number((Math.random() * 3).toFixed(0));
  const [firstImg, setfirstImg] = useState(randon2);
  // 1xr5MqN2JsE6dGXXOv8IDjSqIXxfSg3AC, 1GV6OgkiUouKPuZYttoW5mrMywY1UNLOH
  let pictures = [
    {
      img: "https://drive.google.com/uc?export=download&id=1xr5MqN2JsE6dGXXOv8IDjSqIXxfSg3AC",
    },
    {
      img: "https://drive.google.com/uc?export=download&id=1k_JxbN_4XdQGZkKXUSQN3061wKa8fNpq",
    },
    {
      img: "https://drive.google.com/uc?export=download&id=1YamZr7maKuDSj4ooOm9ffgDPWNS6kG_T",
    },
    {
      img: "https://drive.google.com/uc?export=download&id=1BnPZlyjoFZJfLCxdrEu7AzNfh2VSrfmA",
    },
  ];
  const changeBackgroundImg = () => {
    const numRandon2 = Number((Math.random() * 3).toFixed(0));
    setfirstImg(numRandon2);
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
