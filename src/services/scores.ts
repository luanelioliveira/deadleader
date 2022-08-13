import scores from "../data/scores";
import { Score } from "../types/Score";


function orderByPoints(scores: Score[]) {
  return scores.sort((a, b) => (a.points < b.points ? -1 : 1));
}

function calculateScores(scores: Score[]) {
  const scoresCalculated = Object.values(
    scores.reduce((prev, next) => {
      const key = next.name + "-" + next.alias;

      if (!prev[key]) {
        prev[key] = { ...next, points: 0 };
      }

      if (!next.eliminated) {
        prev[key].points = prev[key].points + next.points;
      }

      return prev;
    }, [])
  ) as Score[];

  return scoresCalculated;
}

export async function getScoresByWorkoutAndCategory(workout: string, category: string) {
  const scoresFiltered = scores.filter((score) => score.workout === workout && score.category === category);
  const scoresOrdered = orderByPoints(scoresFiltered);
  return scoresOrdered;
}

export async function getOverallScoresByCategory(category: string) {
  const scoresFiltered = scores.filter((score) => score.category === category);
  const scoresCalculated = calculateScores(scoresFiltered);
  const scoresOrdered = orderByPoints(scoresCalculated);
  return scoresOrdered;
}

