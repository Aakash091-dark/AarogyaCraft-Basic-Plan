import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Image, Download, Trash2 } from "lucide-react";

const FileUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const recentFiles = [
    { id: 1, name: "Patient_Report_Johnson_2024.pdf", size: "2.4 MB", type: "PDF", uploadDate: "2024-01-22", patient: "John Johnson", category: "Report" },
    { id: 2, name: "X-Ray_Smith_Chest.jpg", size: "1.8 MB", type: "Image", uploadDate: "2024-01-22", patient: "Jane Smith", category: "X-Ray" },
    { id: 3, name: "Prescription_Davis_Cardio.pdf", size: "0.5 MB", type: "PDF", uploadDate: "2024-01-21", patient: "Mike Davis", category: "Prescription" }
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
    return type === "Image" ? Image : FileText;
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Report":
        return "bg-primary text-primary-foreground";
      case "X-Ray":
        return "bg-accent text-accent-foreground";
      case "Prescription":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>File Upload</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center mb-6">
          <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="mt-4 text-muted-foreground">Drag & drop files here, or click to select files</p>
          <Button onClick={handleFileUpload} disabled={isUploading} className="mt-4">
            {isUploading ? "Uploading..." : "Select Files"}
          </Button>
          <p className="text-xs text-muted-foreground mt-2">Support for PDF, JPG, PNG files up to 1GB</p>
          {isUploading && <Progress value={uploadProgress} className="mt-4" />}
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Recent Files</h4>
          <div className="space-y-4">
            {recentFiles.map((file) => {
              const Icon = getFileIcon(file.type);
              return (
                <div key={file.id} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center flex-1 min-w-0 mr-4">
                    <Icon className="w-6 h-6 mr-4 text-primary flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{file.name}</div>
                      <div className="text-sm text-muted-foreground truncate">
                        {file.patient} - {file.size}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge className={`${getCategoryColor(file.category)}`}>{file.category}</Badge>
                    <div className="text-sm text-muted-foreground">{file.uploadDate}</div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FileUpload;
