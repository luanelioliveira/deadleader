import { Stack } from '@chakra-ui/react';
import { RiDashboardLine, RiPhoneFill } from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing={12} align="flex-start">
      <NavSection title="MAIN">
        <NavLink label="Home" icon={RiDashboardLine} href="/" />
        <NavLink
          label="Contact Us"
          icon={RiPhoneFill}
          href="https://www.linkedin.com/in/luanoliveira"
        />
      </NavSection>
    </Stack>
  );
}
