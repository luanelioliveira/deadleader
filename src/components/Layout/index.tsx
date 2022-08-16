import { ReactNode } from 'react';
import { VStack } from '@chakra-ui/react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <VStack mx="auto">
      <Header />
      {children}
      <Footer />
    </VStack>
  );
}
