import { Stack } from "@chakra-ui/react"
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine  } from 'react-icons/ri';

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing={12} align="flex-start">
      <NavSection title="MAIN">
        <NavLink label="Dashboard" icon={RiDashboardLine} href="/dashboard" />    
        <NavLink label="Users" icon={RiContactsLine} href="/users" />
      </NavSection>
      <NavSection title="AUTOMATION">     
        <NavLink label="Forms" icon={RiInputMethodLine} href="/" />    
        <NavLink label="Automation" icon={RiGitMergeLine} href="/" />
      </NavSection>
    </Stack>
  );
}
