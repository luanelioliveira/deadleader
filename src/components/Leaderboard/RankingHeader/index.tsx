import { useState } from "react";

import { Avatar, Box, Text, VStack } from "@chakra-ui/react";

export function RankingHeader({ title, logo }) {
  return (
    <VStack>
      <Box>
        <Avatar size="2xl" src={logo} />
      </Box>
      <Box>
        <Text fontSize="4xl" fontWeight="bold" letterSpacing="tight">
          {title}
        </Text>
      </Box>
    </VStack>
  );
}
