import { useState } from "react";
import { getNumRandom } from "./utils/getNumRandom";
import pictures from "./assets/pictures.json";
import phrases from "./assets/data.json";
import Background from "./components/Background/Background";
import Card from "./components/Card/Card";
import "./App.css";

function App() {

  const getBackgroundPhrases = () => pictures[getNumRandom(pictures.length - 1)];
  const getRandomPhrase = () => phrases[getNumRandom(phrases.length - 1)];
  
  const [backgroundPhrases, setBackgroundPhrases] = useState(getBackgroundPhrases());
  const [phraseObject, setPhraseObject] = useState(getRandomPhrase());

  const changeBackground = () => {
    let currentBackground = getBackgroundPhrases();
    while (currentBackground.img === backgroundPhrases.img) {
      currentBackground = getBackgroundPhrases();
    }
    setBackgroundPhrases(currentBackground);
  };

  const changePhrases = () => {
    let currentPhrase = getRandomPhrase();
    while (phraseObject.phrase === currentPhrase.phrase) {
      currentPhrase = getRandomPhrase();
    }
    setPhraseObject(currentPhrase);
  };
  const handleClick = () => {
    changeBackground();
    changePhrases();
  };

  return (
    <div className="App">
      <Background background={backgroundPhrases} />
      <Card
        phraseObject={phraseObject}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
