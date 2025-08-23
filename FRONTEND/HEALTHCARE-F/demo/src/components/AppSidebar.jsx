import { NavLink, useLocation } from "react-router-dom";
import { Avatar } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
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
  const { state, toggle } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const getNavCls = ({ isActive }) =>
    isActive
      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
      : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground";

  return (
    <Sidebar state={state} className="bg-sidebar-background text-sidebar-foreground">
      <SidebarHeader>
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 bg-primary text-primary-foreground">
            JD
          </Avatar>
          <div className="flex flex-col">
            <p className="font-semibold text-lg text-sidebar-foreground">
              Dr. John Doe
            </p>
            <p className="text-sm text-sidebar-foreground/50">
              Admin
            </p>
          </div>
        </div>
        <SidebarTrigger onClick={toggle} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup>
            <SidebarGroupLabel className="text-sidebar-foreground/50">Medical Dashboard</SidebarGroupLabel>
            <SidebarGroupContent>
              {menuItems.map((item) => (
                <SidebarMenuItem
                  as={NavLink}
                  to={item.url}
                  key={item.title}
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
