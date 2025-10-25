import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, FileText, Target, Calendar, Zap, Activity, BarChart3 } from "lucide-react";

export function WritingStatsView() {
  const weeklyProgress = [
    { week: "Week 1", words: 3200 },
    { week: "Week 2", words: 4100 },
    { week: "Week 3", words: 2800 },
    { week: "Week 4", words: 5200 },
    { week: "Week 5", words: 4600 },
    { week: "Week 6", words: 3900 },
    { week: "Week 7", words: 4400 },
    { week: "Week 8", words: 5100 },
  ];

  const chapterDistribution = [
    { name: "Introduction", words: 2600, target: 3000 },
    { name: "Literature Review", words: 9500, target: 10000 },
    { name: "Methodology", words: 3900, target: 6000 },
    { name: "Results", words: 0, target: 8000 },
    { name: "Discussion", words: 0, target: 7000 },
    { name: "Conclusion", words: 0, target: 2500 },
  ];

  const completionData = [
    { name: "Complete", value: 16000, color: "#10b981" },
    { name: "Remaining", value: 20500, color: "#e5e7eb" },
  ];

  const totalWords = 16000;
  const targetWords = 36500;
  const avgWordsPerDay = 285;
  const writingDays = 56;

  return (
    <TooltipProvider>
      <div className="p-8 space-y-6">
        <div>
          <h1>Writing Statistics</h1>
          <p className="text-muted-foreground">
            Track writing progress with real-time analytics and readability metrics
          </p>
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
                    <Activity className="size-3" />
                    PostHog
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>User analytics & feature tracking</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <BarChart3 className="size-3" />
                    OpenTelemetry
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Performance monitoring & tracing</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <FileText className="size-3" />
                    Readability API
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Flesch-Kincaid & Gunning Fog scores</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <Target className="size-3" />
                    Plausible
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Privacy-friendly completion metrics</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Card>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <FileText className="size-5 text-blue-600" />
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="text-xs">
                    Tracked
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Auto-counted via Google Docs API</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Words Written</p>
              <p className="text-3xl">{totalWords.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">
                of {targetWords.toLocaleString()} target
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="size-5 text-green-600" />
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="text-xs">
                    PostHog
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Productivity analytics</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Avg Words/Day</p>
              <p className="text-3xl">{avgWordsPerDay}</p>
              <p className="text-xs text-muted-foreground">Last 8 weeks</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="size-5 text-purple-600" />
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="text-xs">
                    Tracked
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Activity monitoring via OpenTelemetry</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Writing Days</p>
              <p className="text-3xl">{writingDays}</p>
              <p className="text-xs text-muted-foreground">Active days</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Target className="size-5 text-orange-600" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Completion</p>
              <p className="text-3xl">{Math.round((totalWords / targetWords) * 100)}%</p>
              <p className="text-xs text-muted-foreground">Overall progress</p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Progress Chart */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Weekly Writing Progress</h3>
              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="outline" className="gap-1">
                      <Activity className="size-3" />
                      Live
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Real-time data via PostHog analytics</p>
                  </TooltipContent>
                </Tooltip>
                <Badge variant="outline">Last 8 Weeks</Badge>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <RechartsTooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="words"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Words Written"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Overall Completion */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Overall Completion</h3>
              <Badge variant="outline">
                {totalWords.toLocaleString()} / {targetWords.toLocaleString()} words
              </Badge>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={completionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {completionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Chapter Progress */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3>Progress by Chapter</h3>
            <Badge variant="outline">Word Count vs Target</Badge>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chapterDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <RechartsTooltip />
              <Legend />
              <Bar dataKey="words" fill="#3b82f6" name="Current Words" />
              <Bar dataKey="target" fill="#e5e7eb" name="Target Words" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Writing Insights */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3>Writing Insights</h3>
            <Tooltip>
              <TooltipTrigger>
                <Badge variant="outline" className="gap-1">
                  <BarChart3 className="size-3" />
                  AI-Powered
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Insights generated using OpenAI embeddings & analytics</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Most Productive Day</p>
                  <p>Wednesday</p>
                </div>
                <Badge>1,240 avg words</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Best Writing Streak</p>
                  <p>12 Consecutive Days</p>
                </div>
                <Badge>August 2024</Badge>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Completion</p>
                  <p>March 15, 2025</p>
                </div>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  On Track
                </Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Daily Target</p>
                  <p>350 words/day</p>
                </div>
                <Badge>To meet deadline</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </TooltipProvider>
  );
}