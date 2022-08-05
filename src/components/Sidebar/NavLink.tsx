import { ElementType } from "react";

import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react"

interface NavLinkProps extends ChakraLinkProps {
  label: string
  icon: ElementType
}

export function NavLink({ label, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center"{...rest}>
      <Icon as={icon} />
      <Text ml={4} fontWeight="medium">{label}</Text>
    </Link>
  )
}
