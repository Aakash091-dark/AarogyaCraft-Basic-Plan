import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, MessageCircle, Phone, Mail, Plus, Search, Filter, UserPlus } from "lucide-react";

const StaffPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const staffMembers = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      role: "Senior Doctor",
      department: "Cardiology",
      status: "Available",
      phone: "+1 234-567-8901",
      email: "sarah.wilson@clinic.com",
      avatar: "SW",
      experience: "15 years",
      shift: "Morning",
      joinDate: "2019-03-15",
    },
    // ...rest
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-accent text-accent-foreground";
      case "Busy":
        return "bg-warning text-warning-foreground";
      case "In Surgery":
        return "bg-destructive text-destructive-foreground";
      case "On Leave":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const filteredStaff = staffMembers.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const departments = [...new Set(staffMembers.map((staff) => staff.department))];

  return (
    <div>
      <h1>Manage medical staff and departments</h1>
      {/* ...rest of your JSX rendering */}
    </div>
  );
};

export default StaffPage;
