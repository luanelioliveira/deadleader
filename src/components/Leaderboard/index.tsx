import { useEffect, useState } from "react";

import { VStack } from "@chakra-ui/react";

import { RankingHeader } from "./RankingHeader";
import { RankingList } from "./RankingList";
import { Score } from "../../types/Score";

import { getEventById } from "../../services/events";
import {
  getOverallScoresByCategory,
  getScoresByWorkoutAndCategory,
} from "../../services/scores";

import { Event } from "../../types/Event";
import { RankingFilters } from "./RankingFilters";

export function Leaderboard() {
  const [category, setCategory] = useState("rx");
  const [workout, setWorkout] = useState("overall");

  const [event, setEvent] = useState({} as Event);
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    getEvent();
  }, []);

  useEffect(() => {
    getScores();
  }, [workout, category]);

  async function getEvent() {
    const event = await getEventById("5faa6a2b-fde9-462a-851e-d0d371a8efa8");
    setEvent(event);
  }

  async function getScores() {
    const allScores = isOverall()
      ? await getOverallScoresByCategory(category)
      : await getScoresByWorkoutAndCategory(workout, category);

    setScores(allScores);
  }

  function isOverall() {
    return workout === "overall";
  }

  function handleChangeCategory(category: string) {
    setCategory(category);
  }

  function handleChangeWorkout(workout: string) {
    setWorkout(workout);
  }

  return (
    <VStack align="stretch" mx="auto" spacing={4} maxWidth={900} px={[2, 12]}>
      <RankingHeader title={event?.name} logo={event?.logoUrl} />

      <RankingFilters
        categories={event?.categories}
        workouts={event?.workouts}
        categorySelected={category}
        onChangeCategory={handleChangeCategory}
        workoutSelected={workout}
        onChangeWorkout={handleChangeWorkout}
      />

      <RankingList isOverall={isOverall()} scores={scores} />
    </VStack>
  );
}
