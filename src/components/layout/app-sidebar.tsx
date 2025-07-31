"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { Home, BarChart3, Settings, Flame } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation'; // 1. Import useRouter

export default function AppSidebar() {
  const { state } = useSidebar();
  const pathname = usePathname();
  const router = useRouter(); // 2. Initialize the router

  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Flame className="w-8 h-8 text-primary" />
          {!isCollapsed && (
            <h1 className="text-xl font-bold tracking-wider font-headline">
              ADmyBRAND
            </h1>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* 3. Remove `as` and `href`, add `onClick` */}
            <SidebarMenuButton
              onClick={() => router.push('/')}
              isActive={pathname === '/'}
              tooltip="Dashboard"
            >
              <Home />
              {!isCollapsed && <span>Dashboard</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => router.push('/analytics')}
              isActive={pathname.startsWith('/analytics')}
              tooltip="Analytics"
            >
              <BarChart3 />
              {!isCollapsed && <span>Analytics</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => router.push('/settings')}
              isActive={pathname === '/settings'}
              tooltip="Settings"
            >
              <Settings />
              {!isCollapsed && <span>Settings</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}