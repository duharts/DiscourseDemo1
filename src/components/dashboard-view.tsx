import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Calendar, FileText, BookMarked, CheckCircle2, AlertCircle } from "lucide-react";

export function DashboardView() {
  const stats = [
    { label: "Total Words", value: "42,350", target: "80,000", icon: FileText },
    { label: "Chapters Complete", value: "3", target: "7", icon: BookMarked },
    { label: "References", value: "127", target: "150+", icon: BookMarked },
    { label: "Days to Defense", value: "156", target: "Target", icon: Calendar },
  ];

  const recentActivity = [
    { type: "Chapter 4: Methodology", action: "Updated", time: "2 hours ago", status: "progress" },
    { type: "Literature Review", action: "Completed draft", time: "1 day ago", status: "complete" },
    { type: "Research Notes", action: "Added 5 new entries", time: "2 days ago", status: "progress" },
    { type: "Bibliography", action: "Added 12 references", time: "3 days ago", status: "progress" },
  ];

  const milestones = [
    { title: "Complete Literature Review", due: "Nov 15, 2024", status: "complete" },
    { title: "Finish Methodology Chapter", due: "Dec 1, 2024", status: "progress" },
    { title: "Complete Data Analysis", due: "Jan 15, 2025", status: "pending" },
    { title: "First Draft Complete", due: "Mar 1, 2025", status: "pending" },
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1>Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your dissertation progress.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Icon className="size-5 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl">{stat.value}</p>
                <p className="text-xs text-muted-foreground">of {stat.target}</p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Overall Progress */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3>Overall Progress</h3>
              <p className="text-sm text-muted-foreground">Based on chapters, word count, and milestones</p>
            </div>
            <Badge variant="outline">53% Complete</Badge>
          </div>
          <Progress value={53} className="h-2" />
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                {activity.status === "complete" ? (
                  <CheckCircle2 className="size-5 text-green-600 mt-0.5" />
                ) : (
                  <AlertCircle className="size-5 text-blue-600 mt-0.5" />
                )}
                <div className="flex-1 space-y-1">
                  <p>{activity.type}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Milestones */}
        <Card className="p-6">
          <h3 className="mb-4">Milestones</h3>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p>{milestone.title}</p>
                    {milestone.status === "complete" && (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Complete
                      </Badge>
                    )}
                    {milestone.status === "progress" && (
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        In Progress
                      </Badge>
                    )}
                    {milestone.status === "pending" && (
                      <Badge variant="outline">Pending</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">Due: {milestone.due}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
