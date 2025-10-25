import { useState } from "react";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { DashboardView } from "./components/dashboard-view";
import { ChaptersView } from "./components/chapters-view";
import { ResearchView } from "./components/research-view";
import { ReferencesView } from "./components/references-view";
import { TimelineView } from "./components/timeline-view";
import { WritingStatsView } from "./components/writing-stats-view";
import { IntegrationsView } from "./components/integrations-view";
import { AIAssistantView } from "./components/ai-assistant-view";
import { ComplianceView } from "./components/compliance-view";
import { CollaborationView } from "./components/collaboration-view";
import { SubmissionView } from "./components/submission-view";

export default function App() {
  const [activeView, setActiveView] = useState("dashboard");

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardView />;
      case "chapters":
        return <ChaptersView />;
      case "research":
        return <ResearchView />;
      case "references":
        return <ReferencesView />;
      case "timeline":
        return <TimelineView />;
      case "stats":
        return <WritingStatsView />;
      case "integrations":
        return <IntegrationsView />;
      case "ai-assistant":
        return <AIAssistantView />;
      case "compliance":
        return <ComplianceView />;
      case "collaboration":
        return <CollaborationView />;
      case "submission":
        return <SubmissionView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar activeView={activeView} setActiveView={setActiveView} />
        <main className="flex-1 overflow-auto">
          {renderView()}
        </main>
      </div>
    </SidebarProvider>
  );
}