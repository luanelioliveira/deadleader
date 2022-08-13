import { Category } from "./Category";
import { Workout } from "./Workout";

export interface Event {
  id: string;
  name: string;
  logoUrl: string;
  categories: Category[];
  workouts: Workout[];
}
