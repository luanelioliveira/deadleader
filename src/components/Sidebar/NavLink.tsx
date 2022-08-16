import { ElementType } from 'react';

import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import Link from 'next/link';

interface NavLinkProps extends ChakraLinkProps {
  label: string;
  icon: ElementType;
  href: string;
}

export function NavLink({ label, icon, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href}>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} />
        <Text ml={4} fontWeight="medium">
          {label}
        </Text>
      </ChakraLink>
    </Link>
  );
}
