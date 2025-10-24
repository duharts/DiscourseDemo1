import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
} from "./ui/sidebar";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  BookMarked,
  Calendar,
  BarChart3,
  GraduationCap,
  Zap,
  Brain,
  CheckSquare,
  Users,
  Upload,
  Plug,
} from "lucide-react";

interface AppSidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export function AppSidebar({ activeView, setActiveView }: AppSidebarProps) {
  const coreMenuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "chapters", label: "Chapters", icon: BookOpen },
    { id: "research", label: "Research Notes", icon: FileText },
    { id: "references", label: "References", icon: BookMarked },
    { id: "timeline", label: "Timeline", icon: Calendar },
    { id: "stats", label: "Writing Stats", icon: BarChart3 },
  ];

  const advancedMenuItems = [
    { id: "integrations", label: "API Integrations", icon: Plug },
    { id: "ai-assistant", label: "AI Writing", icon: Brain },
    { id: "compliance", label: "Compliance Checker", icon: CheckSquare },
    { id: "collaboration", label: "Committee", icon: Users },
    { id: "submission", label: "Submission", icon: Upload },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="size-6" />
          <div>
            <h2>Dissertation Hub</h2>
            <p className="text-sm text-muted-foreground">Your Research Workspace</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Core Features</SidebarGroupLabel>
          <SidebarMenu>
            {coreMenuItems.map((item) => {
              const Icon = item.icon;
              return (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveView(item.id)}
                    isActive={activeView === item.id}
                  >
                    <Icon className="size-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Advanced Tools</SidebarGroupLabel>
          <SidebarMenu>
            {advancedMenuItems.map((item) => {
              const Icon = item.icon;
              return (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveView(item.id)}
                    isActive={activeView === item.id}
                  >
                    <Icon className="size-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <p className="text-xs text-muted-foreground">
          PhD in Computer Science • 2025
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}