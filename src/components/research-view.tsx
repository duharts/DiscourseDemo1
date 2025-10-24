import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Plus, Search, Tag, FileText, Calendar, Database, Zap, ExternalLink, Sparkles } from "lucide-react";

interface ResearchNote {
  id: string;
  title: string;
  content: string;
  tags: string[];
  date: string;
  source: string;
  apiSource?: string;
  doi?: string;
  citations?: number;
}

export function ResearchView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [notes] = useState<ResearchNote[]>([
    {
      id: "1",
      title: "Machine Learning in Healthcare - Key Findings",
      content:
        "Recent studies show significant improvements in diagnostic accuracy using deep learning models. The CNN-based approach achieved 94% accuracy in detecting early-stage diseases. Important to note the dataset size requirements and computational costs involved.",
      tags: ["machine-learning", "healthcare", "methodology"],
      date: "2024-10-20",
      source: "Smith et al., 2024",
      apiSource: "Semantic Scholar",
      doi: "10.1000/example.123",
      citations: 45,
    },
    {
      id: "2",
      title: "Ethical Considerations in AI Systems",
      content:
        "Key ethical frameworks discussed: transparency, accountability, fairness, and privacy. The paper proposes a multi-stakeholder approach to AI governance. Particularly relevant for Chapter 2 literature review section.",
      tags: ["ethics", "AI", "literature-review"],
      date: "2024-10-18",
      source: "Johnson & Williams, 2023",
      apiSource: "OpenAlex",
      doi: "10.1000/example.456",
      citations: 127,
    },
    {
      id: "3",
      title: "Data Collection Methodology Notes",
      content:
        "Decided on mixed-methods approach: quantitative survey (n=500) + qualitative interviews (n=30). Survey will use 5-point Likert scale. IRB approval obtained. Timeline: data collection Dec 2024 - Feb 2025.",
      tags: ["methodology", "data-collection", "planning"],
      date: "2024-10-15",
      source: "Personal Notes",
    },
    {
      id: "4",
      title: "Related Work: Neural Network Architectures",
      content:
        "Compared transformer-based vs CNN-based approaches. Transformers show better performance on sequential data but require more computational resources. ResNet and EfficientNet are current state-of-the-art for image tasks.",
      tags: ["neural-networks", "literature-review", "technical"],
      date: "2024-10-12",
      source: "Multiple sources",
      apiSource: "arXiv",
      citations: 89,
    },
    {
      id: "5",
      title: "Research Gap Analysis",
      content:
        "Identified key gap: lack of longitudinal studies examining long-term impacts of AI interventions in clinical settings. Most studies are cross-sectional with < 6 months follow-up. This could be a unique contribution of our work.",
      tags: ["research-gap", "contribution", "literature-review"],
      date: "2024-10-10",
      source: "Personal Analysis",
    },
    {
      id: "6",
      title: "Clinical Trial Data - Biomedical Context",
      content:
        "Found relevant clinical trials using AI for diagnostic support. N=3 studies with significant results (p<0.05). All showed improved accuracy over traditional methods. Consider including in literature review.",
      tags: ["clinical-trials", "biomedical", "evidence"],
      date: "2024-10-08",
      source: "ClinicalTrials.gov",
      apiSource: "PubMed",
      doi: "10.1000/example.789",
      citations: 34,
    },
  ]);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const allTags = Array.from(new Set(notes.flatMap((note) => note.tags)));

  const getAPIIcon = (apiSource?: string) => {
    if (!apiSource) return null;
    return (
      <Tooltip>
        <TooltipTrigger>
          <Badge variant="outline" className="gap-1">
            <Database className="size-3" />
            {apiSource}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>Imported via {apiSource} API</p>
        </TooltipContent>
      </Tooltip>
    );
  };

  return (
    <TooltipProvider>
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1>Research Notes</h1>
            <p className="text-muted-foreground">
              Organize research findings with AI-powered discovery and indexing
            </p>
          </div>
          <Button>
            <Plus className="size-4 mr-2" />
            New Note
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
                    <Database className="size-3" />
                    OpenAlex
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Scholarly graph with 250M+ papers</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <Database className="size-3" />
                    Semantic Scholar
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>AI-powered paper discovery & citations</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <Database className="size-3" />
                    PubMed
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>35M+ biomedical citations via Entrez</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <Database className="size-3" />
                    arXiv
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>2M+ preprints in CS, physics, math</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <Search className="size-3" />
                    Elasticsearch
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Full-text search across all notes</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <Sparkles className="size-3" />
                    AI Embeddings
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>OpenAI embeddings for semantic search</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Card>

        {/* Search and Filters */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Search notes, tags, or content... (powered by Elasticsearch)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline">
                  <Sparkles className="size-4 mr-2" />
                  Semantic Search
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>AI-powered semantic search using OpenAI embeddings</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <Tag className="size-4 text-muted-foreground" />
            {allTags.slice(0, 8).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer hover:bg-muted"
                onClick={() => setSearchQuery(tag)}
              >
                {tag}
              </Badge>
            ))}
            {allTags.length > 8 && (
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                +{allTags.length - 8} more
              </Badge>
            )}
          </div>
        </Card>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredNotes.map((note) => (
            <Card key={note.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="space-y-4">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="flex-1">{note.title}</h3>
                    {note.apiSource && getAPIIcon(note.apiSource)}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">{note.content}</p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {note.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* API Metadata */}
                {(note.doi || note.citations !== undefined) && (
                  <div className="flex items-center gap-3 pt-2 border-t text-sm">
                    {note.doi && (
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center gap-1 text-muted-foreground hover:text-foreground cursor-pointer">
                            <ExternalLink className="size-3" />
                            <span className="text-xs">DOI: {note.doi.split('/').pop()}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Verified via Crossref API</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                    {note.citations !== undefined && (
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <FileText className="size-3" />
                            <span className="text-xs">{note.citations} citations</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Citation count from {note.apiSource}</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                  <div className="flex items-center gap-2">
                    <FileText className="size-4" />
                    <span>{note.source}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    <span>{note.date}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No notes found matching your search.</p>
          </Card>
        )}
      </div>
    </TooltipProvider>
  );
}