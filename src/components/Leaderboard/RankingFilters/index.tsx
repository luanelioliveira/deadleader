import { Box, Button, Select, Stack, VStack } from "@chakra-ui/react";

export function RankingFilters({
  workouts,
  categories,
  categorySelected,
  onChangeCategory,
  workoutSelected,
  onChangeWorkout,
}) {
  return (
    <VStack spacing={6} py={4}>
      <Box>
        <Stack direction="row" spacing={4}>
          {categories?.map((category) => {
            return (
              <Button
                key={category.id}
                colorScheme="purple"
                variant={categorySelected === category.id ? "solid" : "outline"}
                onClick={() => {
                  onChangeCategory(category.id);
                }}
              >
                {category.name}
              </Button>
            );
          })}
        </Stack>
      </Box>

      <Box w={["80%", "60%"]}>
        <Select
          bg="whiteAlpha.100"
          value={workoutSelected}
          onChange={(e) => {
            onChangeWorkout(e.target.value);
          }}
        >
          {workouts?.map((workout) => (
            <option key={workout.id} value={workout.id}>
              {workout.name}
            </option>
          ))}
        </Select>
      </Box>
    </VStack>
  );
}
