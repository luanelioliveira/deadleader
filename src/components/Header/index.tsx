import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useSideBarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from 'react-icons/ri';


import { Logo } from "./Logo";
import { NotifiticationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";


export function Header() {
  const { onOpen } = useSideBarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex as="header" w="100%" maxWidth={1480} h={20} mx="auto" mt={2} px={6} align="center">
        { !isWideVersion && (
          <IconButton  
            aria-label="Open navigation" 
            icon={<Icon as={RiMenuLine} />} 
            fontSize={24} variant="unstyled" 
            onClick={onOpen} 
            mr={2} 
            justifyContent="center"
            display="flex"
            />
        ) }
        
        <Logo />

        { isWideVersion && <SearchBox /> }
        
        <Flex align="center" ml="auto">
          <NotifiticationNav />
          <Profile showProfileData={isWideVersion} />
        </Flex>
    </Flex>
  )
}