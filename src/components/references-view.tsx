import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Plus, Search, Download, BookMarked, Copy, ExternalLink, Zap, CheckCircle2, Link, FileText } from "lucide-react";

interface Reference {
  id: string;
  authors: string;
  year: string;
  title: string;
  publication: string;
  type: string;
  cited: boolean;
  doi?: string;
  openAccess?: boolean;
  inZotero?: boolean;
}

export function ReferencesView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [citationStyle, setCitationStyle] = useState("APA 7th");
  const [references] = useState<Reference[]>([
    {
      id: "1",
      authors: "Smith, J., & Johnson, A.",
      year: "2024",
      title: "Machine Learning Applications in Modern Healthcare Systems",
      publication: "Journal of Medical Informatics, 45(3), 234-256",
      type: "Journal Article",
      cited: true,
      doi: "10.1000/jmi.2024.234",
      openAccess: true,
      inZotero: true,
    },
    {
      id: "2",
      authors: "Williams, R., Chen, L., & Brown, K.",
      year: "2023",
      title: "Ethical Frameworks for Artificial Intelligence Governance",
      publication: "AI & Society, 38(2), 145-168",
      type: "Journal Article",
      cited: true,
      doi: "10.1007/ais.2023.145",
      openAccess: false,
      inZotero: true,
    },
    {
      id: "3",
      authors: "Davis, M.",
      year: "2023",
      title: "Deep Learning: Theory and Practice",
      publication: "MIT Press",
      type: "Book",
      cited: false,
      inZotero: true,
    },
    {
      id: "4",
      authors: "Garcia, P., & Martinez, S.",
      year: "2024",
      title: "Neural Network Architectures for Medical Image Analysis",
      publication: "Proceedings of CVPR 2024, pp. 1234-1242",
      type: "Conference Paper",
      cited: true,
      doi: "10.1109/cvpr.2024.1234",
      openAccess: true,
      inZotero: true,
    },
    {
      id: "5",
      authors: "Lee, H., Kim, J., & Park, D.",
      year: "2023",
      title: "Transformer Models in Healthcare: A Systematic Review",
      publication: "Medical Image Computing Review, 12(4), 445-478",
      type: "Review Article",
      cited: false,
      doi: "10.1016/micr.2023.445",
      openAccess: true,
      inZotero: true,
    },
    {
      id: "6",
      authors: "Thompson, E.",
      year: "2022",
      title: "Research Methods in Computer Science",
      publication: "Springer",
      type: "Book",
      cited: true,
      inZotero: true,
    },
    {
      id: "7",
      authors: "Anderson, B., & White, C.",
      year: "2024",
      title: "Data Privacy in AI Systems: Challenges and Solutions",
      publication: "ACM Computing Surveys, 56(3), Article 89",
      type: "Journal Article",
      cited: false,
      doi: "10.1145/acs.2024.89",
      openAccess: false,
      inZotero: true,
    },
    {
      id: "8",
      authors: "Rodriguez, A., et al.",
      year: "2023",
      title: "Clinical Decision Support Systems: Current State and Future Directions",
      publication: "Healthcare Technology Letters, 10(5), 234-245",
      type: "Journal Article",
      cited: true,
      doi: "10.1049/htl.2023.234",
      openAccess: true,
      inZotero: true,
    },
  ]);

  const filteredReferences = references.filter(
    (ref) =>
      ref.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.publication.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const citedCount = references.filter((ref) => ref.cited).length;
  const openAccessCount = references.filter((ref) => ref.openAccess).length;
  const zoteroCount = references.filter((ref) => ref.inZotero).length;

  const citationStyles = ["APA 7th", "MLA 9th", "Chicago 17th", "IEEE", "Harvard", "Vancouver"];

  return (
    <TooltipProvider>
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1>References & Bibliography</h1>
            <p className="text-muted-foreground">
              Manage citations with Zotero sync and auto-formatting via CSL
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="size-4 mr-2" />
              Export BibTeX
            </Button>
            <Button>
              <Plus className="size-4 mr-2" />
              Add Reference
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
            <div className="flex gap-2 flex-wrap">
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <BookMarked className="size-3" />
                    Zotero API
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Syncing {zoteroCount} references from your Zotero library</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <FileText className="size-3" />
                    CSL + citeproc
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>10,000+ citation styles available</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <Link className="size-3" />
                    Crossref
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>DOI lookup & metadata verification</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <ExternalLink className="size-3" />
                    Unpaywall
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Finding legal open access versions</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="gap-1">
                    <Link className="size-3" />
                    Datacite
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Dataset DOI registration</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <BookMarked className="size-8 text-muted-foreground" />
              <div>
                <p className="text-2xl">{references.length}</p>
                <p className="text-sm text-muted-foreground">Total References</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <Copy className="size-8 text-muted-foreground" />
              <div>
                <p className="text-2xl">{citedCount}</p>
                <p className="text-sm text-muted-foreground">Cited in Text</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <ExternalLink className="size-8 text-green-600" />
              <div>
                <p className="text-2xl">{openAccessCount}</p>
                <p className="text-sm text-muted-foreground">Open Access</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-8 text-blue-600" />
              <div>
                <p className="text-2xl">{zoteroCount}</p>
                <p className="text-sm text-muted-foreground">In Zotero</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Citation Style Selector */}
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <FileText className="size-4 text-muted-foreground" />
              <span>Citation Style (CSL):</span>
            </div>
            <div className="flex gap-2">
              {citationStyles.map(style => (
                <Tooltip key={style}>
                  <TooltipTrigger>
                    <Button
                      variant={citationStyle === style ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCitationStyle(style)}
                    >
                      {style}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Format all citations in {style} style</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </Card>

        {/* Search */}
        <Card className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Search by author, title, or publication..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </Card>

        {/* References Table */}
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Authors</TableHead>
                <TableHead className="w-[80px]">Year</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="w-[150px]">Type</TableHead>
                <TableHead className="w-[120px]">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReferences.map((ref) => (
                <TableRow key={ref.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell>{ref.authors}</TableCell>
                  <TableCell>{ref.year}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="line-clamp-1">{ref.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {ref.publication}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        {ref.doi && (
                          <Tooltip>
                            <TooltipTrigger>
                              <Badge variant="outline" className="gap-1 text-xs">
                                <Link className="size-2" />
                                DOI
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Verified via Crossref API: {ref.doi}</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {ref.openAccess && (
                          <Tooltip>
                            <TooltipTrigger>
                              <Badge variant="outline" className="gap-1 text-xs text-green-600 border-green-600">
                                <ExternalLink className="size-2" />
                                OA
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Free PDF available via Unpaywall API</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {ref.inZotero && (
                          <Tooltip>
                            <TooltipTrigger>
                              <Badge variant="outline" className="gap-1 text-xs">
                                <BookMarked className="size-2" />
                                Zotero
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Synced from Zotero library</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{ref.type}</Badge>
                  </TableCell>
                  <TableCell>
                    {ref.cited ? (
                      <Badge variant="default" className="bg-green-600">
                        Cited
                      </Badge>
                    ) : (
                      <Badge variant="secondary">Not Cited</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {filteredReferences.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No references found matching your search.</p>
          </Card>
        )}
      </div>
    </TooltipProvider>
  );
}