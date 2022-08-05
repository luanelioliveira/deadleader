import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { RiSearch2Line, RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr={4} textAlign="right">
        <Text>Luan Eli Oliveira</Text>
        <Text color="gray.300" fontSize="small">luannn@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Luan Oliveira" src="https://github.com/luanelioliveira.png" />
    </Flex>
  )
}
