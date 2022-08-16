import { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Sidebar } from '../Sidebar';

interface LayoutContentProps {
  children: ReactNode;
}

export function LayoutContent({ children }: LayoutContentProps) {
  return (
    <Flex w="100%" mx="auto">
      <Sidebar />
      <Box w="100%" mx="auto">
        {children}
      </Box>
    </Flex>
  );
}
