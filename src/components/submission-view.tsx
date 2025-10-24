import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Checkbox } from "./ui/checkbox";
import { 
  FileText, 
  Download, 
  Upload,
  CheckCircle2,
  AlertCircle,
  FileType,
  Package,
  Send,
  Shield
} from "lucide-react";

export function SubmissionView() {
  const exportFormats = [
    {
      id: "pdf",
      name: "PDF (ETD Standard)",
      icon: FileType,
      description: "Fully compliant PDF/A format for institutional repositories",
      size: "2.4 MB",
      status: "ready",
      features: ["Embedded fonts", "PDF/A-1b compliant", "Searchable text", "Bookmarks"],
    },
    {
      id: "word",
      name: "Microsoft Word (.docx)",
      icon: FileType,
      description: "Original editable format with all formatting preserved",
      size: "1.8 MB",
      status: "ready",
      features: ["Track changes removed", "Comments removed", "Metadata cleaned"],
    },
    {
      id: "latex",
      name: "LaTeX Source",
      icon: FileType,
      description: "Complete LaTeX source files and assets",
      size: "5.2 MB",
      status: "ready",
      features: ["All .tex files", "Bibliography", "Figures", "Supplementary materials"],
    },
    {
      id: "html",
      name: "Web Version (HTML)",
      icon: FileType,
      description: "Accessible web version with navigation",
      size: "3.1 MB",
      status: "generating",
      features: ["Responsive design", "Section links", "Accessible"],
    },
  ];

  const submissionChecklist = [
    {
      id: "1",
      item: "Title page with all required elements",
      status: "complete",
      autoChecked: true,
    },
    {
      id: "2",
      item: "Abstract (max 350 words)",
      status: "complete",
      autoChecked: true,
    },
    {
      id: "3",
      item: "Copyright page",
      status: "complete",
      autoChecked: true,
    },
    {
      id: "4",
      item: "Acknowledgments",
      status: "complete",
      autoChecked: false,
    },
    {
      id: "5",
      item: "Table of Contents with page numbers",
      status: "complete",
      autoChecked: true,
    },
    {
      id: "6",
      item: "List of Figures (if applicable)",
      status: "complete",
      autoChecked: true,
    },
    {
      id: "7",
      item: "List of Tables (if applicable)",
      status: "complete",
      autoChecked: true,
    },
    {
      id: "8",
      item: "All chapters with proper pagination",
      status: "complete",
      autoChecked: true,
    },
    {
      id: "9",
      item: "Bibliography/References properly formatted",
      status: "complete",
      autoChecked: true,
    },
    {
      id: "10",
      item: "Appendices (if applicable)",
      status: "complete",
      autoChecked: true,
    },
    {
      id: "11",
      item: "IRB approval documentation",
      status: "warning",
      autoChecked: false,
    },
    {
      id: "12",
      item: "Committee approval signatures",
      status: "pending",
      autoChecked: false,
    },
  ];

  const repositories = [
    {
      id: "proquest",
      name: "ProQuest ETD Administrator",
      status: "configured",
      description: "Primary institutional repository",
      embargo: "None",
      accessLevel: "Open Access",
    },
    {
      id: "institutional",
      name: "Stanford Digital Repository",
      status: "configured",
      description: "University institutional repository",
      embargo: "None",
      accessLevel: "Open Access",
    },
    {
      id: "osf",
      name: "Open Science Framework",
      status: "configured",
      description: "Research data and materials",
      embargo: "None",
      accessLevel: "Open Access",
    },
    {
      id: "arxiv",
      name: "arXiv Preprint",
      status: "optional",
      description: "Optional preprint server",
      embargo: "N/A",
      accessLevel: "N/A",
    },
  ];

  const completeCount = submissionChecklist.filter(item => item.status === "complete").length;
  const totalItems = submissionChecklist.length;
  const readinessScore = Math.round((completeCount / totalItems) * 100);

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Submission & Export</h1>
          <p className="text-muted-foreground">
            Package and submit your dissertation to institutional repositories
          </p>
        </div>
        <Button size="lg">
          <Send className="size-4 mr-2" />
          Submit to Repository
        </Button>
      </div>

      {/* Submission Readiness */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3>Submission Readiness</h3>
          <Badge 
            variant={readinessScore === 100 ? "outline" : "secondary"}
            className={readinessScore === 100 ? "border-green-600 text-green-600" : ""}
          >
            {completeCount} of {totalItems} Complete
          </Badge>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Overall Readiness</span>
            <span className="text-2xl">{readinessScore}%</span>
          </div>
          <Progress value={readinessScore} className="h-2" />
        </div>
        {readinessScore === 100 ? (
          <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 rounded-lg">
            <CheckCircle2 className="size-5 text-green-600" />
            <span className="text-sm">Your dissertation is ready for submission!</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 rounded-lg">
            <AlertCircle className="size-5 text-orange-600" />
            <span className="text-sm">Complete remaining items before submission</span>
          </div>
        )}
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Submission Checklist */}
        <Card className="p-6">
          <h3 className="mb-4">Submission Checklist</h3>
          <div className="space-y-3">
            {submissionChecklist.map(item => (
              <div key={item.id} className="flex items-start gap-3">
                <div className="mt-1">
                  {item.status === "complete" && (
                    <CheckCircle2 className="size-5 text-green-600" />
                  )}
                  {item.status === "warning" && (
                    <AlertCircle className="size-5 text-yellow-600" />
                  )}
                  {item.status === "pending" && (
                    <Checkbox />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm">{item.item}</p>
                  {item.autoChecked && (
                    <p className="text-xs text-muted-foreground">Auto-verified</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Repository Destinations */}
        <Card className="p-6">
          <h3 className="mb-4">Repository Destinations</h3>
          <div className="space-y-4">
            {repositories.map(repo => (
              <div key={repo.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4>{repo.name}</h4>
                  <Badge 
                    variant={repo.status === "configured" ? "outline" : "secondary"}
                    className={repo.status === "configured" ? "border-green-600 text-green-600" : ""}
                  >
                    {repo.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{repo.description}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Embargo:</span>
                    <span className="ml-2">{repo.embargo}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Access:</span>
                    <span className="ml-2">{repo.accessLevel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Export Formats */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3>Export Formats</h3>
          <Button variant="outline">
            <Package className="size-4 mr-2" />
            Download All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exportFormats.map(format => {
            const Icon = format.icon;
            return (
              <Card key={format.id} className="p-6">
                <div className="flex items-start gap-4">
                  <Icon className="size-8 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4>{format.name}</h4>
                      {format.status === "ready" ? (
                        <Badge variant="outline" className="border-green-600 text-green-600">
                          Ready
                        </Badge>
                      ) : (
                        <Badge variant="secondary">Generating...</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{format.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {format.features.map(feature => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{format.size}</span>
                      <Button size="sm" disabled={format.status !== "ready"}>
                        <Download className="size-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Card>

      {/* Compliance Summary */}
      <Card className="p-6">
        <div className="flex items-start gap-3">
          <Shield className="size-6 text-green-600 mt-0.5" />
          <div className="flex-1">
            <h3 className="mb-2">Submission Package Includes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-600" />
                  <span>ETD-compliant PDF/A format</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-600" />
                  <span>All metadata embedded</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-600" />
                  <span>Plagiarism report attached</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-600" />
                  <span>Committee approval forms</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-600" />
                  <span>Copyright clearance documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-600" />
                  <span>Formatting compliance report</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-600" />
                  <span>Supplementary materials archive</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-600" />
                  <span>Data availability statement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Final Submission */}
      <Card className="p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200">
        <div className="flex items-start gap-3">
          <Upload className="size-6 text-blue-600 mt-0.5" />
          <div className="flex-1">
            <h3 className="mb-2">Ready to Submit?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your dissertation will be submitted to all configured repositories using the SWORD v2 protocol.
              You will receive confirmation emails from each repository upon successful submission.
            </p>
            <div className="flex gap-2">
              <Button size="lg">
                <Send className="size-4 mr-2" />
                Submit to All Repositories
              </Button>
              <Button variant="outline" size="lg">
                Preview Submission Package
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
