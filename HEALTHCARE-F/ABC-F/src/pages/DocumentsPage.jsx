import { useState } from "react";
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
    // ...rest of your documents
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
        return Image;
      default:
        return FileText;
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
      case "MRI Scan":
        return "bg-secondary text-secondary-foreground";
      case "Surgery Notes":
        return "bg-primary text-primary-foreground";
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
    <div>
      <h1>Manage medical documents and files</h1>
      {/* ...rest of your JSX rendering */}
    </div>
  );
};

export default DocumentsPage;
