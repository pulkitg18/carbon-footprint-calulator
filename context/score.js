import React, { createContext, useContext, useState } from "react";

const ScoreContext = createContext();

export default function useScoreContext() {
  return useContext(ScoreContext);
}

export const ScoreContextProvider = ({ children }) => {
  const [totalScore, setScore] = useState({ prevScreen: null, score: 0 });

  const [screenScore, setScreenScore] = useState({
    Food: 0,
    Clothes: 0,
    Waste: 0,
  });

  const [sliderScore, setSliderScore] = useState(0);
  const [numberScore, setNumberScore] = useState(0);

  const value = {
    totalScore,
    setScore,
    screenScore,
    setScreenScore,
    sliderScore,
    setSliderScore,
    numberScore,
    setNumberScore,
  };

  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
};
