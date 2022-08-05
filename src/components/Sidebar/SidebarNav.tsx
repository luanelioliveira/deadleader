import { Stack } from "@chakra-ui/react"
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine  } from 'react-icons/ri';

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing={12} align="flex-start">
      <NavSection title="MAIN">
        <NavLink label="Dashboard" icon={RiDashboardLine} />    
        <NavLink label="Users" icon={RiContactsLine} />
      </NavSection>
      <NavSection title="AUTOMATION">     
        <NavLink label="Forms" icon={RiInputMethodLine} />    
        <NavLink label="Automation" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  );
}
