import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize={['xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w={64}
    >
      deadleader
      <Text as="span" ml={1} color="pink.500">
        .
      </Text>
    </Text>
  );
}
