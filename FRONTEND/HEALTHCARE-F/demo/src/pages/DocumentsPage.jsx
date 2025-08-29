import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, Image, Download, Trash2, Search, Filter, Plus, Eye, Send } from "lucide-react";

const DocumentsPage = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    {
      id: 1,
      name: "Patient_Report_Johnson_2024.pdf",
      size: "2.4 MB",
      type: "PDF",
      uploadDate: "2024-01-22",
      patient: "John Johnson",
      category: "Medical Report",
      uploadedBy: "Dr. Sarah Wilson",
      tags: ["cardiology", "routine-checkup"],
    },
    {
      id: 2,
      name: "X-Ray_Jane_Smith_2024.jpg",
      size: "5.1 MB",
      type: "Image",
      uploadDate: "2024-01-21",
      patient: "Jane Smith",
      category: "X-Ray",
      uploadedBy: "Dr. James Chen",
      tags: ["chest", "pneumonia-follow-up"],
    },
    {
      id: 3,
      name: "Prescription_Mike_Davis_2024.pdf",
      size: "0.8 MB",
      type: "PDF",
      uploadDate: "2024-01-20",
      patient: "Mike Davis",
      category: "Prescription",
      uploadedBy: "Dr. Sarah Wilson",
      tags: ["medication", "hypertension"],
    },
    {
      id: 4,
      name: "Lab_Results_Emily_Brown_2024.pdf",
      size: "1.2 MB",
      type: "PDF",
      uploadDate: "2024-01-19",
      patient: "Emily Brown",
      category: "Lab Results",
      uploadedBy: "LabCorp",
      tags: ["blood-test", "thyroid"],
    },
  ];

  const handleFileUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "Image":
      case "DICOM":
        return <Image className="h-6 w-6 text-muted-foreground" />;
      default:
        return <FileText className="h-6 w-6 text-muted-foreground" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Medical Report":
        return "bg-primary text-primary-foreground";
      case "X-Ray":
        return "bg-accent text-accent-foreground";
      case "Prescription":
        return "bg-warning text-warning-foreground";
      case "Lab Results":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(documents.map((doc) => doc.category))];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Document Management</h1>
          <p className="text-muted-foreground">Upload, search, and manage medical documents</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="medical">
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload New Document</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="file">Select File</Label>
                <Input id="file" type="file" />
              </div>
              <div>
                <Label htmlFor="patient-name">Patient Name</Label>
                <Input id="patient-name" placeholder="Enter patient name" />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="report">Medical Report</SelectItem>
                    <SelectItem value="xray">X-Ray</SelectItem>
                    <SelectItem value="prescription">Prescription</SelectItem>
                    <SelectItem value="lab">Lab Results</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {isUploading && <Progress value={uploadProgress} />}
            </div>
            <div className="flex justify-end">
              <Button variant="medical" onClick={handleFileUpload} disabled={isUploading}>
                {isUploading ? "Uploading..." : "Upload"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {categories.map(category => (
          <Card key={category} className="bg-gradient-card shadow-soft border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{category}</p>
                  <p className="text-2xl font-bold">{documents.filter(d => d.category === category).length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filter */}
      <Card className="bg-gradient-card shadow-soft border-0">
        <CardContent className="p-4 flex items-center gap-4">
          <div className="flex-1 flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, patient, category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-0 bg-transparent focus-visible:ring-0"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </CardContent>
      </Card>

      {/* Documents List */}
      <Card className="bg-gradient-card shadow-soft border-0">
        <CardHeader>
          <CardTitle>All Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredDocuments.map(doc => (
              <div key={doc.id} className="flex items-center justify-between p-4 rounded-lg bg-background shadow-soft">
                <div className="flex items-center gap-4">
                  {getFileIcon(doc.type)}
                  <div>
                    <h3 className="font-semibold text-foreground">{doc.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {doc.patient} • {doc.uploadDate} • {doc.size}
                    </p>
                    <Badge className={getCategoryColor(doc.category)}>{doc.category}</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon"><Download className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon"><Send className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentsPage;
