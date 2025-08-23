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
        <div>
          <Button onClick={handleFileUpload} disabled={isUploading}>
            <Upload className="mr-2" />
            {isUploading ? "Uploading..." : "Upload File"}
          </Button>
          <div>Support for PDF, JPG, PNG files up to 1GB</div>
          {isUploading && <Progress value={uploadProgress} />}
        </div>
        <div>
          <h4 className="mt-4 mb-2">Recent Files</h4>
          {recentFiles.map((file) => {
            const Icon = getFileIcon(file.type);
            return (
              <div key={file.id} className="flex justify-between items-center py-2">
                <Icon className="w-5 h-5 mr-3" />
                <div>
                  {file.name} ({file.size})
                  <Badge className={getCategoryColor(file.category)}>{file.category}</Badge>
                </div>
                <div>{file.uploadDate}</div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default FileUpload;
