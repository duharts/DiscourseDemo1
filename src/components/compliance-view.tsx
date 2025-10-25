import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  CheckCircle2, 
  AlertCircle, 
  XCircle,
  FileText,
  Shield,
  Ruler,
  BookOpen,
  RefreshCw,
  Download,
  AlertTriangle
} from "lucide-react";

interface ComplianceCheck {
  id: string;
  category: string;
  item: string;
  status: "pass" | "warning" | "fail";
  details: string;
  autoFix?: boolean;
}

export function ComplianceView() {
  const formattingChecks: ComplianceCheck[] = [
    {
      id: "1",
      category: "Margins",
      item: "Left Margin",
      status: "pass",
      details: "1.5 inches (required: 1.5 inches)",
    },
    {
      id: "2",
      category: "Margins",
      item: "Right Margin",
      status: "pass",
      details: "1.0 inches (required: 1.0 inches)",
    },
    {
      id: "3",
      category: "Spacing",
      item: "Line Spacing",
      status: "warning",
      details: "Some paragraphs use 1.5 spacing (required: double spacing)",
      autoFix: true,
    },
    {
      id: "4",
      category: "Font",
      item: "Font Family",
      status: "pass",
      details: "Times New Roman throughout (approved font)",
    },
    {
      id: "5",
      category: "Font",
      item: "Font Size",
      status: "pass",
      details: "12pt for body text (required: 12pt)",
    },
    {
      id: "6",
      category: "Pagination",
      item: "Page Numbers",
      status: "pass",
      details: "Continuous numbering with correct placement",
    },
    {
      id: "7",
      category: "Sections",
      item: "Title Page",
      status: "pass",
      details: "Contains all required elements",
    },
    {
      id: "8",
      category: "Sections",
      item: "Abstract",
      status: "warning",
      details: "350 words (recommended max: 350 words)",
      autoFix: false,
    },
    {
      id: "9",
      category: "Sections",
      item: "Table of Contents",
      status: "fail",
      details: "Missing page numbers for Appendices",
      autoFix: true,
    },
    {
      id: "10",
      category: "Citations",
      item: "Citation Format",
      status: "warning",
      details: "3 citations not following APA 7th edition format",
      autoFix: true,
    },
    {
      id: "11",
      category: "Citations",
      item: "Bibliography",
      status: "pass",
      details: "All 127 references properly formatted",
    },
  ];

  const integrityChecks = [
    {
      id: "1",
      name: "Plagiarism Scan",
      status: "pass",
      provider: "Copyleaks API",
      lastRun: "2 hours ago",
      details: "2% similarity (institutional threshold: 15%)",
      breakdown: "1.5% proper citations, 0.5% common phrases",
    },
    {
      id: "2",
      name: "AI Content Detection",
      status: "pass",
      provider: "Copyleaks API",
      lastRun: "2 hours ago",
      details: "5% AI probability (acceptable range: <20%)",
      breakdown: "Likely from grammar tools and paraphrasing",
    },
    {
      id: "3",
      name: "Self-Plagiarism Check",
      status: "warning",
      provider: "Turnitin",
      lastRun: "1 day ago",
      details: "12% match with your previous publications",
      breakdown: "Properly cited in 8%, consider rephrasing 4%",
    },
    {
      id: "4",
      name: "Citation Verification",
      status: "pass",
      provider: "Crossref API",
      lastRun: "3 hours ago",
      details: "All 127 citations verified with DOIs",
      breakdown: "100% match rate with source metadata",
    },
  ];

  const templateCompliance = {
    university: "Stanford University",
    department: "Computer Science",
    degreeType: "PhD Dissertation",
    lastUpdated: "October 2024",
    templateVersion: "2024.2",
  };

  const passCount = formattingChecks.filter(c => c.status === "pass").length;
  const warningCount = formattingChecks.filter(c => c.status === "warning").length;
  const failCount = formattingChecks.filter(c => c.status === "fail").length;
  const totalChecks = formattingChecks.length;
  const complianceScore = Math.round((passCount / totalChecks) * 100);

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Compliance & Formatting Checker</h1>
          <p className="text-muted-foreground">
            Continuous validation against university requirements and academic integrity
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="size-4 mr-2" />
            Compliance Report
          </Button>
          <Button>
            <RefreshCw className="size-4 mr-2" />
            Run All Checks
          </Button>
        </div>
      </div>

      {/* Template Info */}
      <Card className="p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200">
        <div className="flex items-start gap-3">
          <BookOpen className="size-5 text-blue-600 mt-0.5" />
          <div className="flex-1">
            <h3 className="mb-2">University Template Applied</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">University:</span>
                <span className="ml-2">{templateCompliance.university}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Department:</span>
                <span className="ml-2">{templateCompliance.department}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Degree Type:</span>
                <span className="ml-2">{templateCompliance.degreeType}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Template Version:</span>
                <span className="ml-2">{templateCompliance.templateVersion}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Overall Score */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3>Overall Compliance Score</h3>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-green-600 border-green-600">
              {passCount} Passed
            </Badge>
            <Badge variant="outline" className="text-yellow-600 border-yellow-600">
              {warningCount} Warnings
            </Badge>
            <Badge variant="outline" className="text-red-600 border-red-600">
              {failCount} Failed
            </Badge>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {passCount} of {totalChecks} checks passing
            </span>
            <span className="text-2xl">{complianceScore}%</span>
          </div>
          <Progress value={complianceScore} className="h-2" />
        </div>
      </Card>

      <Tabs defaultValue="formatting" className="space-y-6">
        <TabsList>
          <TabsTrigger value="formatting">
            <Ruler className="size-4 mr-2" />
            Formatting Rules
          </TabsTrigger>
          <TabsTrigger value="integrity">
            <Shield className="size-4 mr-2" />
            Academic Integrity
          </TabsTrigger>
        </TabsList>

        {/* Formatting Tab */}
        <TabsContent value="formatting" className="space-y-4">
          {["Margins", "Spacing", "Font", "Pagination", "Sections", "Citations"].map(category => {
            const categoryChecks = formattingChecks.filter(c => c.category === category);
            return (
              <Card key={category} className="p-6">
                <h3 className="mb-4">{category}</h3>
                <div className="space-y-3">
                  {categoryChecks.map(check => (
                    <div key={check.id} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                      <div className="mt-0.5">
                        {check.status === "pass" && (
                          <CheckCircle2 className="size-5 text-green-600" />
                        )}
                        {check.status === "warning" && (
                          <AlertCircle className="size-5 text-yellow-600" />
                        )}
                        {check.status === "fail" && (
                          <XCircle className="size-5 text-red-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p>{check.item}</p>
                          {check.autoFix && (
                            <Badge variant="outline" className="text-blue-600 border-blue-600">
                              Auto-fixable
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{check.details}</p>
                      </div>
                      {check.autoFix && (
                        <Button variant="outline" size="sm">
                          Fix Now
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </TabsContent>

        {/* Integrity Tab */}
        <TabsContent value="integrity" className="space-y-4">
          <Card className="p-4 bg-muted/50">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="size-4" />
              <span>
                Integrated with Turnitin, iThenticate, and Copyleaks for comprehensive integrity checking
              </span>
            </div>
          </Card>

          {integrityChecks.map(check => (
            <Card key={check.id} className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {check.status === "pass" && (
                    <CheckCircle2 className="size-6 text-green-600" />
                  )}
                  {check.status === "warning" && (
                    <AlertTriangle className="size-6 text-yellow-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3>{check.name}</h3>
                    <Badge variant="outline">{check.provider}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Last run: {check.lastRun}
                  </p>
                  <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Result:</span>
                      <span className="text-sm">{check.details}</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="text-sm">Breakdown:</span>
                      <span className="text-sm text-muted-foreground text-right max-w-md">
                        {check.breakdown}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">View Full Report</Button>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="size-4 mr-2" />
                      Re-scan
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
