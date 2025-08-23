import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Textarea } from "./components/ui/textarea";
import { Calendar, Clock, Phone, Mail, Plus, Search, Filter, Edit, CheckCircle, XCircle } from "lucide-react";

const AppointmentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const appointments = [
    {
      id: 1,
      patient: "John Johnson",
      doctor: "Dr. Sarah Wilson",
      date: "2024-01-22",
      time: "09:00 AM",
      duration: "30 min",
      type: "Routine Checkup",
      status: "Scheduled",
      phone: "+1 234-567-8901",
      email: "john.johnson@email.com",
      notes: "Annual physical examination"
    },
    {
      id: 2,
      patient: "Jane Smith",
      doctor: "Dr. James Chen",
      date: "2024-01-22",
      time: "10:30 AM",
      duration: "45 min",
      type: "Consultation",
      status: "In Progress",
      phone: "+1 234-567-8902",
      email: "jane.smith@email.com",
      notes: "Follow-up on chest pain symptoms"
    },
    {
      id: 3,
      patient: "Mike Davis",
      doctor: "Dr. Sarah Wilson",
      date: "2024-01-22",
      time: "02:30 PM",
      duration: "30 min",
      type: "Follow-up",
      status: "Scheduled",
      phone: "+1 234-567-8903",
      email: "mike.davis@email.com",
      notes: "Cardiology follow-up appointment"
    },
    {
      id: 4,
      patient: "Emily Brown",
      doctor: "Dr. Robert Kim",
      date: "2024-01-22",
      time: "03:15 PM",
      duration: "60 min",
      type: "Surgery Consultation",
      status: "Scheduled",
      phone: "+1 234-567-8904",
      email: "emily.brown@email.com",
      notes: "Pre-surgery consultation for knee procedure"
    },
    {
      id: 5,
      patient: "Robert Wilson",
      doctor: "Dr. James Chen",
      date: "2024-01-22",
      time: "04:00 PM",
      duration: "30 min",
      type: "Test Results",
      status: "Completed",
      phone: "+1 234-567-8905",
      email: "robert.wilson@email.com",
      notes: "Discuss MRI scan results"
    },
    {
      id: 6,
      patient: "Lisa Garcia",
      doctor: "Dr. Sarah Wilson",
      date: "2024-01-23",
      time: "09:30 AM",
      duration: "30 min",
      type: "Routine Checkup",
      status: "Scheduled",
      phone: "+1 234-567-8906",
      email: "lisa.garcia@email.com",
      notes: "Quarterly health checkup"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Scheduled":
        return "bg-primary text-primary-foreground";
      case "In Progress":
        return "bg-warning text-warning-foreground";
      case "Completed":
        return "bg-accent text-accent-foreground";
      case "Cancelled":
        return "bg-destructive text-destructive-foreground";
      case "No Show":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Routine Checkup":
        return "bg-accent-light text-accent-foreground";
      case "Consultation":
        return "bg-primary/10 text-primary";
      case "Follow-up":
        return "bg-warning/10 text-warning";
      case "Surgery Consultation":
        return "bg-destructive/10 text-destructive";
      case "Test Results":
        return "bg-secondary/50 text-secondary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const filteredAppointments = appointments.filter(apt =>
    apt.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    apt.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    apt.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const todaysAppointments = appointments.filter(apt => apt.date === "2024-01-22");
  const upcomingAppointments = appointments.filter(apt => apt.date > "2024-01-22");

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
          <p className="text-muted-foreground">Manage patient appointments and schedules</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="medical">
                <Plus className="h-4 w-4 mr-2" />
                New Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Schedule New Appointment</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="patient">Patient Name</Label>
                    <Input id="patient" placeholder="Enter patient name" />
                  </div>
                  <div>
                    <Label htmlFor="doctor">Doctor</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dr-wilson">Dr. Sarah Wilson</SelectItem>
                        <SelectItem value="dr-chen">Dr. James Chen</SelectItem>
                        <SelectItem value="dr-kim">Dr. Robert Kim</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="duration">Duration</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="90">1.5 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="type">Appointment Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="routine">Routine Checkup</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="followup">Follow-up</SelectItem>
                        <SelectItem value="surgery">Surgery Consultation</SelectItem>
                        <SelectItem value="results">Test Results</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" placeholder="Additional notes or instructions" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+1 234-567-8900" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="patient@email.com" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button variant="medical">Schedule Appointment</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card shadow-soft border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Today's Appointments</p>
                <p className="text-2xl font-bold">{todaysAppointments.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card shadow-soft border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-warning" />
              <div>
                <p className="text-sm text-muted-foreground">In Progress</p>
                <p className="text-2xl font-bold">{appointments.filter(a => a.status === "In Progress").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card shadow-soft border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">{appointments.filter(a => a.status === "Completed").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card shadow-soft border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <XCircle className="h-8 w-8 text-destructive" />
              <div>
                <p className="text-sm text-muted-foreground">Cancelled</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card className="bg-gradient-card shadow-soft border-0">
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search appointments by patient, doctor, or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-0 bg-transparent focus-visible:ring-0"
            />
          </div>
        </CardContent>
      </Card>

      {/* Appointments List */}
      <Card className="bg-gradient-card shadow-soft border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Appointment Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="today" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="all">All Appointments</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            
            <TabsContent value="today" className="mt-6">
              <div className="space-y-4">
                {todaysAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 rounded-lg bg-background shadow-soft">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{appointment.time}</div>
                        <div className="text-xs text-muted-foreground">{appointment.duration}</div>
                      </div>
                      <div className="h-8 w-px bg-border"></div>
                      <div>
                        <h3 className="font-semibold text-foreground">{appointment.patient}</h3>
                        <p className="text-sm text-muted-foreground">{appointment.doctor}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getStatusColor(appointment.status)} variant="secondary">
                            {appointment.status}
                          </Badge>
                          <Badge className={getTypeColor(appointment.type)} variant="outline">
                            {appointment.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" title="Call Patient">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Email Patient">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Edit Appointment">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="medical" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="mt-6">
              <div className="space-y-4">
                {filteredAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 rounded-lg bg-background shadow-soft">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-sm font-medium text-primary">{appointment.date}</div>
                        <div className="text-lg font-bold text-foreground">{appointment.time}</div>
                        <div className="text-xs text-muted-foreground">{appointment.duration}</div>
                      </div>
                      <div className="h-12 w-px bg-border"></div>
                      <div>
                        <h3 className="font-semibold text-foreground">{appointment.patient}</h3>
                        <p className="text-sm text-muted-foreground">{appointment.doctor}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getStatusColor(appointment.status)} variant="secondary">
                            {appointment.status}
                          </Badge>
                          <Badge className={getTypeColor(appointment.type)} variant="outline">
                            {appointment.type}
                          </Badge>
                        </div>
                        {appointment.notes && (
                          <p className="text-xs text-muted-foreground mt-1">{appointment.notes}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" title="Call Patient">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Email Patient">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Edit Appointment">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="medical" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentsPage;
