import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";

const dict = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const App = () => {
  const [txt, setTxt] = useState("");
  const [sugTxt, setSugTxt] = useState("");

  const handleInpChg = (e) => {
    const t = e.target.value;
    setTxt(t);

    const words = t.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = dict[word.toLowerCase()];
      return correctedWord || word;
    });

    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setSugTxt(firstCorrection || "");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={txt}
        onChange={handleInpChg}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {sugTxt && (
        <p>
          Did you mean: <strong>{sugTxt}</strong>?
        </p>
      )}
    </div>
  );
};

export default App;
