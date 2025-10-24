import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  ChevronRight,
  ChevronDown,
  Plus,
  FileText,
  CheckCircle2,
  Clock,
  Zap,
  Languages,
  BarChart3,
  Cloud,
  RefreshCw,
  Sparkles,
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  wordCount: number;
  targetWords: number;
  status: "complete" | "progress" | "pending";
  notes: string;
  readabilityScore?: number;
  grammarIssues?: number;
  lastSynced?: string;
}

interface Chapter {
  id: string;
  title: string;
  sections: Section[];
  expanded: boolean;
}

export function ChaptersView() {
  const [chapters, setChapters] = useState<Chapter[]>([
    {
      id: "1",
      title: "Chapter 1: Introduction",
      expanded: true,
      sections: [
        {
          id: "1.1",
          title: "1.1 Background and Context",
          wordCount: 1200,
          targetWords: 1500,
          status: "progress",
          notes: "Need to add more context about the research problem",
          readabilityScore: 52,
          grammarIssues: 3,
          lastSynced: "2 min ago",
        },
        {
          id: "1.2",
          title: "1.2 Research Questions",
          wordCount: 800,
          targetWords: 800,
          status: "complete",
          notes: "",
          readabilityScore: 58,
          grammarIssues: 0,
          lastSynced: "5 min ago",
        },
        {
          id: "1.3",
          title: "1.3 Thesis Structure",
          wordCount: 600,
          targetWords: 600,
          status: "complete",
          notes: "",
          readabilityScore: 61,
          grammarIssues: 0,
          lastSynced: "10 min ago",
        },
      ],
    },
    {
      id: "2",
      title: "Chapter 2: Literature Review",
      expanded: false,
      sections: [
        {
          id: "2.1",
          title: "2.1 Theoretical Framework",
          wordCount: 3500,
          targetWords: 3500,
          status: "complete",
          notes: "",
          readabilityScore: 48,
          grammarIssues: 0,
          lastSynced: "1 hour ago",
        },
        {
          id: "2.2",
          title: "2.2 Current State of Research",
          wordCount: 4200,
          targetWords: 4000,
          status: "complete",
          notes: "",
          readabilityScore: 45,
          grammarIssues: 2,
          lastSynced: "1 hour ago",
        },
        {
          id: "2.3",
          title: "2.3 Research Gaps",
          wordCount: 1800,
          targetWords: 2000,
          status: "progress",
          notes: "Expand on gap analysis",
          readabilityScore: 50,
          grammarIssues: 1,
          lastSynced: "30 min ago",
        },
      ],
    },
    {
      id: "3",
      title: "Chapter 3: Methodology",
      expanded: false,
      sections: [
        {
          id: "3.1",
          title: "3.1 Research Design",
          wordCount: 2100,
          targetWords: 2500,
          status: "progress",
          notes: "",
          readabilityScore: 55,
          grammarIssues: 4,
          lastSynced: "15 min ago",
        },
        {
          id: "3.2",
          title: "3.2 Data Collection Methods",
          wordCount: 1800,
          targetWords: 2000,
          status: "progress",
          notes: "",
          readabilityScore: 53,
          grammarIssues: 2,
          lastSynced: "20 min ago",
        },
        {
          id: "3.3",
          title: "3.3 Analysis Approach",
          wordCount: 0,
          targetWords: 1500,
          status: "pending",
          notes: "To be completed",
          lastSynced: "Never",
        },
      ],
    },
    {
      id: "4",
      title: "Chapter 4: Results",
      expanded: false,
      sections: [
        {
          id: "4.1",
          title: "4.1 Findings Overview",
          wordCount: 0,
          targetWords: 3000,
          status: "pending",
          notes: "",
          lastSynced: "Never",
        },
      ],
    },
  ]);

  const toggleChapter = (chapterId: string) => {
    setChapters(
      chapters.map((ch) =>
        ch.id === chapterId ? { ...ch, expanded: !ch.expanded } : ch
      )
    );
  };

  const getTotalProgress = (chapter: Chapter) => {
    const totalWords = chapter.sections.reduce((sum, s) => sum + s.wordCount, 0);
    const totalTarget = chapter.sections.reduce((sum, s) => sum + s.targetWords, 0);
    return totalTarget > 0 ? (totalWords / totalTarget) * 100 : 0;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle2 className="size-4 text-green-600" />;
      case "progress":
        return <Clock className="size-4 text-blue-600" />;
      default:
        return <FileText className="size-4 text-muted-foreground" />;
    }
  };

  const getReadabilityColor = (score?: number) => {
    if (!score) return "text-muted-foreground";
    if (score >= 60) return "text-green-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <TooltipProvider>
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1>Chapters & Structure</h1>
            <p className="text-muted-foreground">
              Manage your dissertation structure with real-time grammar checking and cloud sync
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <RefreshCw className="size-4 mr-2" />
              Sync All
            </Button>
            <Button>
              <Plus className="size-4 mr-2" />
              Add Chapter
            </Button>
          </div>
        </div>

        {/* API Integration Status */}
        <Card className="p-4 bg-blue-50 dark:bg-blue-950/20 border-blue-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Zap className="size-4 text-blue-600" />
              <span>Active Integrations:</span>
            </div>
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <Cloud className="size-3" />
                    Google Docs
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Auto-syncing via Google Drive API</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <Cloud className="size-3" />
                    OneDrive
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Microsoft Graph API - Track changes enabled</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <Languages className="size-3" />
                    LanguageTool
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Real-time grammar & style checking</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <BarChart3 className="size-3" />
                    Readability
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Flesch-Kincaid readability analysis</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <Sparkles className="size-3" />
                    Git Bridge
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Overleaf LaTeX sync via Git</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          {chapters.map((chapter) => {
            const progress = getTotalProgress(chapter);
            const totalWords = chapter.sections.reduce((sum, s) => sum + s.wordCount, 0);
            const targetWords = chapter.sections.reduce((sum, s) => sum + s.targetWords, 0);

            return (
              <Card key={chapter.id} className="overflow-hidden">
                <div
                  className="p-6 cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleChapter(chapter.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      {chapter.expanded ? (
                        <ChevronDown className="size-5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="size-5 text-muted-foreground" />
                      )}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <h3>{chapter.title}</h3>
                          <Badge variant="outline">
                            {totalWords.toLocaleString()} / {targetWords.toLocaleString()} words
                          </Badge>
                          <Tooltip>
                            <TooltipTrigger>
                              <Badge variant="outline" className="gap-1">
                                <Cloud className="size-3 text-green-600" />
                                Synced
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Last synced via Microsoft Graph API</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <div className="flex items-center gap-4">
                          <Progress value={progress} className="h-2 w-64" />
                          <span className="text-sm text-muted-foreground">
                            {Math.round(progress)}% complete
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {chapter.expanded && (
                  <div className="border-t bg-muted/20">
                    <div className="p-6 space-y-4">
                      {chapter.sections.map((section) => (
                        <div key={section.id} className="bg-background rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(section.status)}
                              <h4>{section.title}</h4>
                            </div>
                            <div className="flex items-center gap-4">
                              <Input
                                type="number"
                                value={section.wordCount}
                                className="w-24 text-center"
                                readOnly
                              />
                              <span className="text-sm text-muted-foreground">
                                / {section.targetWords} words
                              </span>
                            </div>
                          </div>
                          <Progress
                            value={(section.wordCount / section.targetWords) * 100}
                            className="h-1.5"
                          />

                          {/* API-Powered Features */}
                          <div className="flex items-center gap-3 pt-2">
                            {section.readabilityScore && (
                              <Tooltip>
                                <TooltipTrigger>
                                  <div className="flex items-center gap-1.5 text-sm">
                                    <BarChart3 className="size-4 text-muted-foreground" />
                                    <span className={getReadabilityColor(section.readabilityScore)}>
                                      {section.readabilityScore} Readability
                                    </span>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Flesch-Kincaid Reading Ease Score</p>
                                  <p className="text-xs text-muted-foreground">
                                    60+ = Easy, 50-60 = Standard, &lt;50 = Difficult
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            )}

                            {section.grammarIssues !== undefined && (
                              <Tooltip>
                                <TooltipTrigger>
                                  <div className="flex items-center gap-1.5 text-sm">
                                    <Languages className="size-4 text-muted-foreground" />
                                    <span className={section.grammarIssues > 0 ? "text-orange-600" : "text-green-600"}>
                                      {section.grammarIssues} issues
                                    </span>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>LanguageTool API - Real-time grammar check</p>
                                </TooltipContent>
                              </Tooltip>
                            )}

                            {section.lastSynced && (
                              <Tooltip>
                                <TooltipTrigger>
                                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <Cloud className="size-4" />
                                    <span>{section.lastSynced}</span>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Google Drive API - Auto-save enabled</p>
                                </TooltipContent>
                              </Tooltip>
                            )}

                            <Button variant="ghost" size="sm" className="ml-auto">
                              <Sparkles className="size-4 mr-2" />
                              AI Improve
                            </Button>
                          </div>

                          {section.notes && (
                            <div className="pt-2">
                              <p className="text-sm text-muted-foreground mb-2">Notes:</p>
                              <Textarea
                                value={section.notes}
                                className="resize-none"
                                rows={2}
                                readOnly
                              />
                            </div>
                          )}
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="mt-2">
                        <Plus className="size-4 mr-2" />
                        Add Section
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </TooltipProvider>
  );
}