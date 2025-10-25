import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  CheckCircle2, 
  Circle, 
  Settings, 
  RefreshCw, 
  Database,
  FileText,
  Users,
  Shield,
  Cloud,
  Search,
  Zap
} from "lucide-react";

interface APIIntegration {
  id: string;
  name: string;
  category: string;
  description: string;
  status: "connected" | "available" | "requires-license";
  lastSync?: string;
  features: string[];
}

export function IntegrationsView() {
  const integrations: APIIntegration[] = [
    // Core Research
    {
      id: "openalex",
      name: "OpenAlex API",
      category: "research",
      description: "Free scholarly graph providing papers, authors, venues, and citations",
      status: "connected",
      lastSync: "2 hours ago",
      features: ["Paper discovery", "Citation graphs", "Author profiles"],
    },
    {
      id: "crossref",
      name: "Crossref REST API",
      category: "research",
      description: "Retrieves DOIs, metadata, and reference lists",
      status: "connected",
      lastSync: "1 hour ago",
      features: ["DOI lookup", "Metadata retrieval", "Reference linking"],
    },
    {
      id: "orcid",
      name: "ORCID API",
      category: "research",
      description: "Researcher identity and affiliation data",
      status: "connected",
      lastSync: "5 hours ago",
      features: ["Author verification", "Profile linking"],
    },
    {
      id: "pubmed",
      name: "PubMed/Entrez E-utilities",
      category: "research",
      description: "Biomedical literature search and metadata",
      status: "connected",
      lastSync: "3 hours ago",
      features: ["Medical literature", "Clinical trials", "Abstracts"],
    },
    {
      id: "arxiv",
      name: "arXiv API",
      category: "research",
      description: "Preprints in physics, math, and computer science",
      status: "connected",
      lastSync: "4 hours ago",
      features: ["Preprint access", "Latest research", "PDF downloads"],
    },
    {
      id: "semantic-scholar",
      name: "Semantic Scholar API",
      category: "research",
      description: "Paper metadata, references, and influence metrics",
      status: "connected",
      lastSync: "1 hour ago",
      features: ["Citation analysis", "Influence scores", "Recommendations"],
    },
    {
      id: "unpaywall",
      name: "Unpaywall API",
      category: "research",
      description: "Finds legal open-access versions of papers",
      status: "connected",
      lastSync: "6 hours ago",
      features: ["OA discovery", "Free PDFs", "Legal access"],
    },
    {
      id: "springer",
      name: "Springer Nature API",
      category: "research",
      description: "Commercial API for publisher content",
      status: "requires-license",
      features: ["Full-text access", "Advanced search"],
    },
    
    // Citation Management
    {
      id: "zotero",
      name: "Zotero Web API",
      category: "citations",
      description: "Synchronizes citation libraries and attachments",
      status: "connected",
      lastSync: "30 min ago",
      features: ["Library sync", "Citation export", "Attachment storage"],
    },
    {
      id: "csl",
      name: "CSL + citeproc",
      category: "citations",
      description: "Standardized citation and bibliography styles",
      status: "connected",
      lastSync: "Always",
      features: ["APA", "MLA", "Chicago", "IEEE", "1000+ styles"],
    },
    {
      id: "datacite",
      name: "Datacite API",
      category: "citations",
      description: "Registers or retrieves DOIs for datasets",
      status: "connected",
      lastSync: "12 hours ago",
      features: ["Dataset DOIs", "Data citation"],
    },
    
    // Writing & Collaboration
    {
      id: "google-drive",
      name: "Google Drive/Docs API",
      category: "writing",
      description: "Import and export documents",
      status: "connected",
      lastSync: "15 min ago",
      features: ["Doc import/export", "Cloud storage", "Version history"],
    },
    {
      id: "microsoft-graph",
      name: "Microsoft Graph API",
      category: "writing",
      description: "Word and OneDrive integrations",
      status: "connected",
      lastSync: "20 min ago",
      features: ["Word integration", "OneDrive sync", "Track changes"],
    },
    {
      id: "overleaf",
      name: "Overleaf (Git Bridge)",
      category: "writing",
      description: "LaTeX project integration via Git",
      status: "connected",
      lastSync: "1 hour ago",
      features: ["LaTeX editing", "Git sync", "Collaboration"],
    },
    {
      id: "languagetool",
      name: "LanguageTool API",
      category: "writing",
      description: "Grammar and style checking",
      status: "connected",
      lastSync: "Real-time",
      features: ["Grammar check", "Style suggestions", "25+ languages"],
    },
    {
      id: "grammarly",
      name: "Grammarly SDK",
      category: "writing",
      description: "Commercial grammar integration",
      status: "requires-license",
      features: ["Advanced grammar", "Tone detection", "Plagiarism"],
    },
    
    // AI Assistance
    {
      id: "openai",
      name: "OpenAI API",
      category: "ai",
      description: "Large language models, embeddings, and structured output",
      status: "connected",
      lastSync: "Real-time",
      features: ["GPT-4", "Embeddings", "Structured outputs"],
    },
    {
      id: "anthropic",
      name: "Anthropic Claude",
      category: "ai",
      description: "Advanced AI for analysis and writing",
      status: "connected",
      lastSync: "Real-time",
      features: ["Long context", "Analysis", "Citations"],
    },
    {
      id: "whisper",
      name: "Whisper API",
      category: "ai",
      description: "Transcribe spoken feedback and notes",
      status: "connected",
      lastSync: "Real-time",
      features: ["Speech-to-text", "Meeting transcription"],
    },
    
    // PDF & OCR
    {
      id: "grobid",
      name: "GROBID",
      category: "pdf",
      description: "Extracts structured metadata from research PDFs",
      status: "connected",
      lastSync: "Always",
      features: ["PDF parsing", "Metadata extraction", "References"],
    },
    {
      id: "aws-textract",
      name: "AWS Textract",
      category: "pdf",
      description: "OCR and layout recognition",
      status: "connected",
      lastSync: "On-demand",
      features: ["OCR", "Table extraction", "Form data"],
    },
    
    // Plagiarism
    {
      id: "turnitin",
      name: "Turnitin / iThenticate",
      category: "integrity",
      description: "Institutional-grade plagiarism detection",
      status: "requires-license",
      features: ["Similarity check", "Citation analysis", "Reports"],
    },
    {
      id: "copyleaks",
      name: "Copyleaks API",
      category: "integrity",
      description: "Developer-friendly plagiarism detection",
      status: "connected",
      lastSync: "On-demand",
      features: ["Plagiarism scan", "AI detection", "API access"],
    },
    
    // Research Data
    {
      id: "redcap",
      name: "REDCap API",
      category: "data",
      description: "Research data management and IRB workflows",
      status: "available",
      features: ["Data collection", "IRB compliance", "Survey tools"],
    },
    {
      id: "osf",
      name: "Open Science Framework API",
      category: "data",
      description: "Data and materials sharing for reproducibility",
      status: "connected",
      lastSync: "Daily",
      features: ["Data sharing", "Preregistration", "Collaboration"],
    },
    
    // Repositories
    {
      id: "sword",
      name: "SWORD v2",
      category: "repository",
      description: "Standard for depositing theses into repositories",
      status: "connected",
      lastSync: "As needed",
      features: ["ETD submission", "Institutional repos"],
    },
    {
      id: "proquest",
      name: "ProQuest ETD Administrator",
      category: "repository",
      description: "Institutional submission endpoint",
      status: "available",
      features: ["Thesis submission", "Publishing"],
    },
    
    // Storage
    {
      id: "aws-s3",
      name: "AWS S3",
      category: "storage",
      description: "Durable, encrypted document storage",
      status: "connected",
      lastSync: "Real-time",
      features: ["Cloud storage", "Encryption", "Backup"],
    },
    {
      id: "elasticsearch",
      name: "Elasticsearch",
      category: "storage",
      description: "Index and search across materials",
      status: "connected",
      lastSync: "Real-time",
      features: ["Full-text search", "Faceted search", "Analytics"],
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "research": return Database;
      case "citations": return FileText;
      case "writing": return FileText;
      case "ai": return Zap;
      case "pdf": return FileText;
      case "integrity": return Shield;
      case "data": return Database;
      case "repository": return Cloud;
      case "storage": return Cloud;
      default: return Settings;
    }
  };

  const categories = [
    { id: "all", label: "All Integrations" },
    { id: "research", label: "Research & Citations" },
    { id: "citations", label: "Citation Management" },
    { id: "writing", label: "Writing & Editing" },
    { id: "ai", label: "AI Assistance" },
    { id: "pdf", label: "PDF & OCR" },
    { id: "integrity", label: "Plagiarism & Integrity" },
    { id: "data", label: "Research Data" },
    { id: "repository", label: "Repository & Publishing" },
    { id: "storage", label: "Storage & Search" },
  ];

  const getFilteredIntegrations = (category: string) => {
    if (category === "all") return integrations;
    return integrations.filter(i => i.category === category);
  };

  const connectedCount = integrations.filter(i => i.status === "connected").length;
  const availableCount = integrations.filter(i => i.status === "available").length;
  const licenseCount = integrations.filter(i => i.status === "requires-license").length;

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>API Integrations</h1>
          <p className="text-muted-foreground">
            Connect and manage external services for your dissertation workflow
          </p>
        </div>
        <Button>
          <RefreshCw className="size-4 mr-2" />
          Sync All
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="size-8 text-green-600" />
            <div>
              <p className="text-3xl">{connectedCount}</p>
              <p className="text-sm text-muted-foreground">Connected Services</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <Circle className="size-8 text-muted-foreground" />
            <div>
              <p className="text-3xl">{availableCount}</p>
              <p className="text-sm text-muted-foreground">Available to Connect</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <Shield className="size-8 text-orange-600" />
            <div>
              <p className="text-3xl">{licenseCount}</p>
              <p className="text-sm text-muted-foreground">Requires License</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Integrations by Category */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="flex-wrap h-auto">
          {categories.map(cat => (
            <TabsTrigger key={cat.id} value={cat.id}>
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map(cat => (
          <TabsContent key={cat.id} value={cat.id} className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {getFilteredIntegrations(cat.id).map(integration => {
                const CategoryIcon = getCategoryIcon(integration.category);
                return (
                  <Card key={integration.id} className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <CategoryIcon className="size-5 text-muted-foreground mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3>{integration.name}</h3>
                              {integration.status === "connected" && (
                                <Badge variant="outline" className="text-green-600 border-green-600">
                                  <CheckCircle2 className="size-3 mr-1" />
                                  Connected
                                </Badge>
                              )}
                              {integration.status === "available" && (
                                <Badge variant="outline">Available</Badge>
                              )}
                              {integration.status === "requires-license" && (
                                <Badge variant="outline" className="text-orange-600 border-orange-600">
                                  License Required
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {integration.description}
                            </p>
                          </div>
                        </div>
                        <Switch 
                          checked={integration.status === "connected"} 
                          disabled={integration.status === "requires-license"}
                        />
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {integration.features.map(feature => (
                          <Badge key={feature} variant="secondary">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {integration.lastSync && (
                        <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                          <span>Last sync: {integration.lastSync}</span>
                          <Button variant="ghost" size="sm">
                            <Settings className="size-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
