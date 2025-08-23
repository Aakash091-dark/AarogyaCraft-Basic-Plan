import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  Clock,
  Users,
  FileText,
  Settings,
  Activity,
  Calendar
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Attendance", url: "/attendance", icon: Clock },
  { title: "Staff Management", url: "/staff", icon: Users },
  { title: "Documents", url: "/documents", icon: FileText },
  { title: "Appointments", url: "/appointments", icon: Calendar },
  { title: "Reports", url: "/reports", icon: Activity },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;
  const getNavCls = ({ isActive }) =>
    isActive
      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
      : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground";

  return (
    <Sidebar state={state}>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup>
            <SidebarGroupLabel>Medical Dashboard</SidebarGroupLabel>
            <SidebarGroupContent>
              {menuItems.map((item) => (
                <SidebarMenuItem as={NavLink} to={item.url} key={item.title}
                  className={getNavCls}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.title}
                </SidebarMenuItem>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
