import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Brain, 
  Sparkles, 
  BookOpen, 
  FileText, 
  Search,
  Lightbulb,
  CheckCircle2,
  Wand2,
  MessageSquare,
  Loader2
} from "lucide-react";

export function AIAssistantView() {
  const [selectedModel, setSelectedModel] = useState("gpt-4");
  const [isGenerating, setIsGenerating] = useState(false);

  const aiModels = [
    { id: "gpt-4", name: "GPT-4", provider: "OpenAI", best: "General writing & analysis" },
    { id: "claude", name: "Claude 3", provider: "Anthropic", best: "Long documents & citations" },
    { id: "gemini", name: "Gemini Pro", provider: "Google", best: "Research synthesis" },
  ];

  const suggestions = [
    {
      id: "1",
      type: "Literature Gap",
      title: "Potential Research Gap Identified",
      content: "Based on your literature review, there appears to be limited longitudinal research on AI interventions in clinical settings beyond 6 months. Consider highlighting this as a key contribution.",
      sources: ["Smith et al. 2024", "Johnson & Williams 2023"],
      confidence: "High",
    },
    {
      id: "2",
      type: "Citation Suggestion",
      title: "Missing Key Reference",
      content: "Your methodology section discusses mixed-methods approaches but doesn't cite Creswell's foundational work on research design. Consider adding: Creswell, J. W. (2014). Research Design: Qualitative, Quantitative, and Mixed Methods Approaches.",
      sources: ["Similar dissertations in your field"],
      confidence: "High",
    },
    {
      id: "3",
      type: "Writing Quality",
      title: "Improve Academic Tone",
      content: "Section 3.2 uses informal language ('a lot of', 'kind of'). Consider more formal alternatives to strengthen academic voice.",
      sources: ["Style guide analysis"],
      confidence: "Medium",
    },
  ];

  const recentGenerations = [
    {
      id: "1",
      type: "Literature Review",
      prompt: "Synthesize recent ML in healthcare papers",
      timestamp: "2 hours ago",
      wordCount: 450,
      sources: 12,
    },
    {
      id: "2",
      type: "Outline",
      prompt: "Generate methodology chapter outline",
      timestamp: "1 day ago",
      wordCount: 320,
      sources: 0,
    },
    {
      id: "3",
      type: "Abstract",
      prompt: "Draft abstract based on current chapters",
      timestamp: "2 days ago",
      wordCount: 250,
      sources: 0,
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>AI Writing Assistant</h1>
          <p className="text-muted-foreground">
            Evidence-based AI support for literature reviews, outlines, and writing
          </p>
        </div>
        <div className="flex gap-2">
          {aiModels.map(model => (
            <Button
              key={model.id}
              variant={selectedModel === model.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedModel(model.id)}
            >
              {model.name}
            </Button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="generate" className="space-y-6">
        <TabsList>
          <TabsTrigger value="generate">
            <Wand2 className="size-4 mr-2" />
            Generate Content
          </TabsTrigger>
          <TabsTrigger value="suggestions">
            <Lightbulb className="size-4 mr-2" />
            AI Suggestions
          </TabsTrigger>
          <TabsTrigger value="history">
            <FileText className="size-4 mr-2" />
            Generation History
          </TabsTrigger>
        </TabsList>

        {/* Generate Tab */}
        <TabsContent value="generate" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="p-6 cursor-pointer hover:border-primary transition-colors">
              <BookOpen className="size-8 text-blue-600 mb-3" />
              <h3 className="mb-2">Literature Review</h3>
              <p className="text-sm text-muted-foreground">
                Generate synthesis from your connected research sources with automatic citations
              </p>
            </Card>
            <Card className="p-6 cursor-pointer hover:border-primary transition-colors">
              <FileText className="size-8 text-green-600 mb-3" />
              <h3 className="mb-2">Chapter Outline</h3>
              <p className="text-sm text-muted-foreground">
                Create structured outlines based on your research questions and methodology
              </p>
            </Card>
            <Card className="p-6 cursor-pointer hover:border-primary transition-colors">
              <Search className="size-8 text-purple-600 mb-3" />
              <h3 className="mb-2">Research Gap Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Identify potential contributions by analyzing existing literature
              </p>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="mb-4">Generate Content with AI</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm mb-2 block">What would you like to generate?</label>
                <Textarea
                  placeholder="E.g., 'Synthesize recent literature on transformer models in healthcare from my connected sources' or 'Generate an outline for my results chapter based on my methodology'"
                  rows={4}
                  className="resize-none"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1 space-y-2">
                  <label className="text-sm">Options</label>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="cursor-pointer">
                      <CheckCircle2 className="size-3 mr-1" />
                      Include Citations
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer">
                      Use Zotero Library
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer">
                      Academic Tone
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1" disabled={isGenerating}>
                  {isGenerating ? (
                    <>
                      <Loader2 className="size-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="size-4 mr-2" />
                      Generate with {aiModels.find(m => m.id === selectedModel)?.name}
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200">
            <div className="flex gap-3">
              <Brain className="size-5 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <h4 className="mb-2">Evidence-Based Generation</h4>
                <p className="text-sm text-muted-foreground">
                  All AI-generated content is grounded in your connected research sources (OpenAlex, Semantic Scholar, PubMed, etc.). Citations are automatically included and verified against your Zotero library.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Suggestions Tab */}
        <TabsContent value="suggestions" className="space-y-4">
          <Card className="p-4 bg-muted/50">
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="size-4" />
              <span>AI is continuously analyzing your dissertation for improvements</span>
            </div>
          </Card>

          {suggestions.map(suggestion => (
            <Card key={suggestion.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>{suggestion.type}</Badge>
                    <Badge variant="outline" className={
                      suggestion.confidence === "High" 
                        ? "border-green-600 text-green-600" 
                        : "border-yellow-600 text-yellow-600"
                    }>
                      {suggestion.confidence} Confidence
                    </Badge>
                  </div>
                  <h3 className="mb-2">{suggestion.title}</h3>
                  <p className="text-sm text-muted-foreground">{suggestion.content}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="size-4" />
                  <span>Based on {suggestion.sources.join(", ")}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Dismiss</Button>
                  <Button size="sm">Apply Suggestion</Button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history" className="space-y-4">
          {recentGenerations.map(gen => (
            <Card key={gen.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>{gen.type}</Badge>
                    <span className="text-sm text-muted-foreground">{gen.timestamp}</span>
                  </div>
                  <p className="mb-2">{gen.prompt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{gen.wordCount} words</span>
                    {gen.sources > 0 && <span>{gen.sources} sources cited</span>}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">View</Button>
                  <Button variant="outline" size="sm">Reuse</Button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
