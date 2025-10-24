import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  MessageSquare, 
  CheckCircle2, 
  Clock,
  AlertCircle,
  Users,
  FileText,
  Send,
  ThumbsUp,
  ThumbsDown,
  Eye
} from "lucide-react";

interface Comment {
  id: string;
  author: string;
  role: string;
  chapter: string;
  section: string;
  comment: string;
  timestamp: string;
  status: "open" | "resolved" | "acknowledged";
  replies: number;
}

interface Approval {
  id: string;
  chapter: string;
  reviewer: string;
  role: string;
  status: "approved" | "changes-requested" | "pending";
  date: string;
  feedback?: string;
}

export function CollaborationView() {
  const committee = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      role: "Primary Advisor",
      initials: "SJ",
      status: "active",
      lastActive: "2 hours ago",
      chaptersReviewed: 5,
      comments: 23,
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      role: "Committee Member",
      initials: "MC",
      status: "active",
      lastActive: "1 day ago",
      chaptersReviewed: 3,
      comments: 12,
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      role: "Committee Member",
      initials: "ER",
      status: "active",
      lastActive: "3 days ago",
      chaptersReviewed: 3,
      comments: 8,
    },
    {
      id: "4",
      name: "Dr. James Williams",
      role: "External Examiner",
      initials: "JW",
      status: "invited",
      lastActive: "Never",
      chaptersReviewed: 0,
      comments: 0,
    },
  ];

  const comments: Comment[] = [
    {
      id: "1",
      author: "Dr. Sarah Johnson",
      role: "Primary Advisor",
      chapter: "Chapter 3: Methodology",
      section: "3.2 Data Collection",
      comment: "Consider expanding on your sampling strategy. Why was n=500 chosen? Include a power analysis to justify sample size.",
      timestamp: "2 hours ago",
      status: "open",
      replies: 0,
    },
    {
      id: "2",
      author: "Dr. Michael Chen",
      role: "Committee Member",
      chapter: "Chapter 2: Literature Review",
      section: "2.3 Research Gaps",
      comment: "Excellent analysis of the gaps. You might also want to reference the 2024 systematic review by Park et al. on this topic.",
      timestamp: "1 day ago",
      status: "acknowledged",
      replies: 1,
    },
    {
      id: "3",
      author: "Dr. Emily Rodriguez",
      role: "Committee Member",
      chapter: "Chapter 1: Introduction",
      section: "1.1 Background",
      comment: "The motivation is clear, but consider adding more context about the practical implications of this work for practitioners.",
      timestamp: "2 days ago",
      status: "resolved",
      replies: 2,
    },
    {
      id: "4",
      author: "Dr. Sarah Johnson",
      role: "Primary Advisor",
      chapter: "Chapter 3: Methodology",
      section: "3.3 Analysis Approach",
      comment: "Have you considered using a mixed-effects model instead of standard regression? Given your nested data structure, it might be more appropriate.",
      timestamp: "3 days ago",
      status: "open",
      replies: 3,
    },
  ];

  const approvals: Approval[] = [
    {
      id: "1",
      chapter: "Chapter 1: Introduction",
      reviewer: "Dr. Sarah Johnson",
      role: "Primary Advisor",
      status: "approved",
      date: "2024-10-15",
    },
    {
      id: "2",
      chapter: "Chapter 1: Introduction",
      reviewer: "Dr. Michael Chen",
      role: "Committee Member",
      status: "approved",
      date: "2024-10-16",
    },
    {
      id: "3",
      chapter: "Chapter 2: Literature Review",
      reviewer: "Dr. Sarah Johnson",
      role: "Primary Advisor",
      status: "approved",
      date: "2024-10-20",
    },
    {
      id: "4",
      chapter: "Chapter 2: Literature Review",
      reviewer: "Dr. Emily Rodriguez",
      role: "Committee Member",
      status: "changes-requested",
      date: "2024-10-21",
      feedback: "Please add more recent citations from 2024",
    },
    {
      id: "5",
      chapter: "Chapter 3: Methodology",
      reviewer: "Dr. Sarah Johnson",
      role: "Primary Advisor",
      status: "pending",
      date: "Pending",
    },
  ];

  const revisions = [
    {
      id: "1",
      chapter: "Chapter 3: Methodology",
      author: "You",
      change: "Added power analysis justification for sample size",
      timestamp: "1 hour ago",
      reviewer: "Dr. Sarah Johnson",
      status: "Awaiting review",
    },
    {
      id: "2",
      chapter: "Chapter 2: Literature Review",
      author: "You",
      change: "Incorporated Park et al. (2024) reference",
      timestamp: "1 day ago",
      reviewer: "Dr. Michael Chen",
      status: "Approved",
    },
    {
      id: "3",
      chapter: "Chapter 1: Introduction",
      author: "You",
      change: "Expanded practical implications section",
      timestamp: "2 days ago",
      reviewer: "Dr. Emily Rodriguez",
      status: "Approved",
    },
  ];

  const openComments = comments.filter(c => c.status === "open").length;
  const resolvedComments = comments.filter(c => c.status === "resolved").length;
  const pendingApprovals = approvals.filter(a => a.status === "pending").length;

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Committee Collaboration</h1>
          <p className="text-muted-foreground">
            Track feedback, comments, and approvals from your dissertation committee
          </p>
        </div>
        <Button>
          <Send className="size-4 mr-2" />
          Request Review
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <MessageSquare className="size-8 text-blue-600" />
            <div>
              <p className="text-3xl">{openComments}</p>
              <p className="text-sm text-muted-foreground">Open Comments</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="size-8 text-green-600" />
            <div>
              <p className="text-3xl">{resolvedComments}</p>
              <p className="text-sm text-muted-foreground">Resolved</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <Clock className="size-8 text-orange-600" />
            <div>
              <p className="text-3xl">{pendingApprovals}</p>
              <p className="text-sm text-muted-foreground">Pending Approvals</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <Users className="size-8 text-purple-600" />
            <div>
              <p className="text-3xl">{committee.length}</p>
              <p className="text-sm text-muted-foreground">Committee Members</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Committee Members */}
      <Card className="p-6">
        <h3 className="mb-4">Committee Members</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {committee.map(member => (
            <div key={member.id} className="flex items-center gap-4 p-4 border rounded-lg">
              <Avatar className="size-12">
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p>{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <div className="flex gap-3 mt-2 text-sm text-muted-foreground">
                  <span>{member.chaptersReviewed} chapters reviewed</span>
                  <span>•</span>
                  <span>{member.comments} comments</span>
                </div>
              </div>
              <Badge variant={member.status === "active" ? "default" : "outline"}>
                {member.status}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      <Tabs defaultValue="comments" className="space-y-6">
        <TabsList>
          <TabsTrigger value="comments">
            <MessageSquare className="size-4 mr-2" />
            Comments & Feedback
          </TabsTrigger>
          <TabsTrigger value="approvals">
            <CheckCircle2 className="size-4 mr-2" />
            Chapter Approvals
          </TabsTrigger>
          <TabsTrigger value="revisions">
            <FileText className="size-4 mr-2" />
            Tracked Revisions
          </TabsTrigger>
        </TabsList>

        {/* Comments Tab */}
        <TabsContent value="comments" className="space-y-4">
          {comments.map(comment => (
            <Card key={comment.id} className="p-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarFallback>
                    {comment.author.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p>{comment.author}</p>
                      <p className="text-sm text-muted-foreground">{comment.role}</p>
                    </div>
                    <Badge
                      variant={
                        comment.status === "open" 
                          ? "default" 
                          : comment.status === "resolved" 
                          ? "outline" 
                          : "secondary"
                      }
                    >
                      {comment.status}
                    </Badge>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <FileText className="size-4" />
                      <span>{comment.chapter}</span>
                      <span>•</span>
                      <span>{comment.section}</span>
                    </div>
                    <p className="text-sm">{comment.comment}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
                    <div className="flex gap-2">
                      {comment.replies > 0 && (
                        <Button variant="ghost" size="sm">
                          {comment.replies} {comment.replies === 1 ? "reply" : "replies"}
                        </Button>
                      )}
                      <Button variant="outline" size="sm">Reply</Button>
                      {comment.status === "open" && (
                        <Button size="sm">Mark Resolved</Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* Approvals Tab */}
        <TabsContent value="approvals" className="space-y-4">
          {approvals.map(approval => (
            <Card key={approval.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    {approval.status === "approved" && (
                      <ThumbsUp className="size-6 text-green-600" />
                    )}
                    {approval.status === "changes-requested" && (
                      <ThumbsDown className="size-6 text-orange-600" />
                    )}
                    {approval.status === "pending" && (
                      <Eye className="size-6 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <p>{approval.chapter}</p>
                    <p className="text-sm text-muted-foreground">
                      {approval.reviewer} • {approval.role}
                    </p>
                    {approval.feedback && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Feedback: {approval.feedback}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      approval.status === "approved"
                        ? "outline"
                        : approval.status === "changes-requested"
                        ? "outline"
                        : "secondary"
                    }
                    className={
                      approval.status === "approved"
                        ? "border-green-600 text-green-600"
                        : approval.status === "changes-requested"
                        ? "border-orange-600 text-orange-600"
                        : ""
                    }
                  >
                    {approval.status === "approved" && "Approved"}
                    {approval.status === "changes-requested" && "Changes Requested"}
                    {approval.status === "pending" && "Pending Review"}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">{approval.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* Revisions Tab */}
        <TabsContent value="revisions" className="space-y-4">
          {revisions.map(revision => (
            <Card key={revision.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="size-4 text-muted-foreground" />
                    <span>{revision.chapter}</span>
                  </div>
                  <p className="mb-2">{revision.change}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{revision.author}</span>
                    <span>•</span>
                    <span>{revision.timestamp}</span>
                    <span>•</span>
                    <span>Reviewer: {revision.reviewer}</span>
                  </div>
                </div>
                <Badge
                  variant={revision.status === "Approved" ? "outline" : "secondary"}
                  className={revision.status === "Approved" ? "border-green-600 text-green-600" : ""}
                >
                  {revision.status}
                </Badge>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
