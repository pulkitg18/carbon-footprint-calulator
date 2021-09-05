import caluclate from "../json/calculation";

export const calculateMCQ = (type, option, setScore, screenScore) => {
  if (type === "Transport") return;

  const score = caluclate.mcq[type][option].score;

  setScore((prevScore) => {
    if (!prevScore.prevScreen || prevScore.prevScreen !== type) {
      return { prevScreen: type, score: prevScore.score + score };
    }

    return {
      prevScreen: type,
      score: screenScore.Food + screenScore.Clothes + screenScore.Waste + score,
    };
  });
};
