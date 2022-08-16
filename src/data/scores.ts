import { Score } from '../types/Score';

import workout1 from './scores.workout1';
import workout2 from './scores.workout2';
import workout3 from './scores.workout3';
import workout4 from './scores.workout4';
import workout5 from './scores.workout5';

export default [
  ...workout1,
  ...workout2,
  ...workout3,
  ...workout4,
  ...workout5,
] as Score[];
