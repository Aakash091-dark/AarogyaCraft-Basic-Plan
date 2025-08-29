import React, { useState } from "react";
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
    },
    {
      id: 2,
      name: "Dr. James Chen",
      role: "Neurologist",
      department: "Neurology",
      status: "Busy",
      phone: "+1 234-567-8902",
      email: "james.chen@clinic.com",
      avatar: "JC",
    },
    {
      id: 3,
      name: "Nurse Emily Brown",
      role: "Head Nurse",
      department: "General",
      status: "On Leave",
      phone: "+1 234-567-8903",
      email: "emily.brown@clinic.com",
      avatar: "EB",
    },
    {
      id: 4,
      name: "Dr. Robert Kim",
      role: "Surgeon",
      department: "Surgery",
      status: "In Surgery",
      phone: "+1 234-567-8904",
      email: "robert.kim@clinic.com",
      avatar: "RK",
    },
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Staff Directory</h1>
          <p className="text-muted-foreground">Manage medical staff and departments</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="medical">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Staff
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Staff Member</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Input placeholder="Full Name" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Phone" />
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select Department" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="surgery">Surgery</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Role" />
              </div>
              <div className="flex justify-end">
                <Button variant="medical">Save Member</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card className="bg-gradient-card shadow-soft border-0">
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, department, or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-0 bg-transparent focus-visible:ring-0"
            />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          {departments.map(dept => (
            <TabsTrigger key={dept} value={dept.toLowerCase()}>{dept}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStaff.map(staff => (
              <Card key={staff.id} className="bg-gradient-card shadow-soft border-0">
                <CardHeader className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{staff.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{staff.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{staff.role}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{staff.department}</p>
                  <Badge className={getStatusColor(staff.status)}>{staff.status}</Badge>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="icon"><Phone className="h-4 w-4" /></Button>
                    <Button variant="outline" size="icon"><Mail className="h-4 w-4" /></Button>
                    <Button variant="outline" size="icon"><MessageCircle className="h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StaffPage;
