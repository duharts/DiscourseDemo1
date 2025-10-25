import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { CheckCircle2, Circle, AlertCircle, Plus, Zap, CalendarDays, GitBranch, Trello } from "lucide-react";

interface Milestone {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "complete" | "progress" | "upcoming" | "overdue";
  category: string;
}

export function TimelineView() {
  const milestones: Milestone[] = [
    {
      id: "1",
      title: "Research Proposal Approved",
      description: "Submitted and approved by dissertation committee",
      date: "2024-06-15",
      status: "complete",
      category: "Milestone",
    },
    {
      id: "2",
      title: "Literature Review Complete",
      description: "Completed comprehensive review of 120+ sources",
      date: "2024-09-30",
      status: "complete",
      category: "Chapter",
    },
    {
      id: "3",
      title: "IRB Approval Obtained",
      description: "Ethics approval for human subjects research",
      date: "2024-10-10",
      status: "complete",
      category: "Administrative",
    },
    {
      id: "4",
      title: "Complete Methodology Chapter",
      description: "Finalize research design and methods section",
      date: "2024-12-01",
      status: "progress",
      category: "Chapter",
    },
    {
      id: "5",
      title: "Data Collection Phase",
      description: "Conduct surveys and interviews (n=500 + 30)",
      date: "2025-02-28",
      status: "upcoming",
      category: "Research",
    },
    {
      id: "6",
      title: "Data Analysis Complete",
      description: "Process and analyze all collected data",
      date: "2025-04-15",
      status: "upcoming",
      category: "Research",
    },
    {
      id: "7",
      title: "Results Chapter Draft",
      description: "Complete first draft of findings and results",
      date: "2025-05-30",
      status: "upcoming",
      category: "Chapter",
    },
    {
      id: "8",
      title: "Discussion Chapter Draft",
      description: "Write analysis and interpretation of results",
      date: "2025-06-30",
      status: "upcoming",
      category: "Chapter",
    },
    {
      id: "9",
      title: "Complete First Full Draft",
      description: "All chapters completed and compiled",
      date: "2025-07-31",
      status: "upcoming",
      category: "Milestone",
    },
    {
      id: "10",
      title: "Advisor Review & Revisions",
      description: "Incorporate feedback from dissertation advisor",
      date: "2025-09-15",
      status: "upcoming",
      category: "Review",
    },
    {
      id: "11",
      title: "Committee Review",
      description: "Full committee review of dissertation",
      date: "2025-10-15",
      status: "upcoming",
      category: "Review",
    },
    {
      id: "12",
      title: "Final Submission",
      description: "Submit final dissertation to graduate school",
      date: "2025-11-30",
      status: "upcoming",
      category: "Milestone",
    },
    {
      id: "13",
      title: "Defense Date",
      description: "Oral defense of dissertation",
      date: "2025-12-15",
      status: "upcoming",
      category: "Milestone",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle2 className="size-5 text-green-600" />;
      case "progress":
        return <AlertCircle className="size-5 text-blue-600" />;
      case "overdue":
        return <AlertCircle className="size-5 text-red-600" />;
      default:
        return <Circle className="size-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "complete":
        return (
          <Badge variant="outline" className="border-green-600 text-green-600">
            Complete
          </Badge>
        );
      case "progress":
        return (
          <Badge variant="outline" className="border-blue-600 text-blue-600">
            In Progress
          </Badge>
        );
      case "overdue":
        return (
          <Badge variant="outline" className="border-red-600 text-red-600">
            Overdue
          </Badge>
        );
      default:
        return <Badge variant="outline">Upcoming</Badge>;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Milestone":
        return "bg-purple-500";
      case "Chapter":
        return "bg-blue-500";
      case "Research":
        return "bg-green-500";
      case "Review":
        return "bg-orange-500";
      case "Administrative":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <TooltipProvider>
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1>Timeline & Milestones</h1>
            <p className="text-muted-foreground">
              Track dissertation journey with calendar sync and project management
            </p>
          </div>
          <Button>
            <Plus className="size-4 mr-2" />
            Add Milestone
          </Button>
        </div>

        {/* API Integration Status */}
        <Card className="p-4 bg-blue-50 dark:bg-blue-950/20 border-blue-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Zap className="size-4 text-blue-600" />
              <span>Active Integrations:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <CalendarDays className="size-3" />
                    Google Calendar
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Syncing {milestones.length} milestones to Google Calendar API</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <CalendarDays className="size-3" />
                    Outlook
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Microsoft Calendar API integration</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <Trello className="size-3" />
                    Notion
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notion API - Project management sync</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <GitBranch className="size-3" />
                    GitHub
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub API - Version tracking for drafts</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="p-6">
              <h3 className="mb-6">Dissertation Timeline</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={milestone.id} className="flex gap-4">
                    {/* Timeline connector */}
                    <div className="flex flex-col items-center">
                      {getStatusIcon(milestone.status)}
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full min-h-16 bg-border mt-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="mb-1">{milestone.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                        <div className={`w-2 h-2 rounded-full ${getCategoryColor(milestone.category)}`} />
                        <Badge variant="secondary">{milestone.category}</Badge>
                        <span className="text-sm text-muted-foreground">{milestone.date}</span>
                        {getStatusBadge(milestone.status)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar with stats and calendar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4">Progress Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Completed</span>
                  <span className="text-sm">
                    {milestones.filter((m) => m.status === "complete").length} /{" "}
                    {milestones.length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">In Progress</span>
                  <span className="text-sm">
                    {milestones.filter((m) => m.status === "progress").length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Upcoming</span>
                  <span className="text-sm">
                    {milestones.filter((m) => m.status === "upcoming").length}
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3>Key Dates</h3>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="outline" className="gap-1">
                      <CalendarDays className="size-3" />
                      Synced
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Calendar synced via Google Calendar API</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Calendar mode="single" className="rounded-md border" />
            </Card>

            <Card className="p-6">
              <h3 className="mb-4">Categories</h3>
              <div className="space-y-3">
                {["Milestone", "Chapter", "Research", "Review", "Administrative"].map(
                  (category) => (
                    <div key={category} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getCategoryColor(category)}`} />
                      <span className="text-sm">{category}</span>
                      <span className="text-sm text-muted-foreground ml-auto">
                        {milestones.filter((m) => m.category === category).length}
                      </span>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}