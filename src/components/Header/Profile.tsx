import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Luan Eli Oliveira</Text>
          <Text color="gray.300" fontSize="small">luannn@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Luan Oliveira" src="https://github.com/luanelioliveira.png" />
    </Flex>
  )
}
