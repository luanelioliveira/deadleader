import { HStack, Link, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <HStack justify="center" py={6}>
      <footer>
        <Text fontWeight="light" color="gray.700">
          Developed by{" "}
          <Link href="https://www.linkedin.com/in/luanoliveira" isExternal>
            Luan Oliveira
          </Link>{" "}
          @ 2022
        </Text>
      </footer>
    </HStack>
  );
}
