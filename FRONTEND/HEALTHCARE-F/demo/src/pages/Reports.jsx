import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, Users, Calendar, FileText, Clock, Download, Filter } from "lucide-react";

const ReportsPage = () => {
  const attendanceData = [
    { month: "Jan", present: 85, absent: 15, late: 5 },
    { month: "Feb", present: 90, absent: 10, late: 3 },
    { month: "Mar", present: 88, absent: 12, late: 4 },
    { month: "Apr", present: 92, absent: 8, late: 2 },
  ];

  const patientData = [
    { month: "Jan", patients: 145, appointments: 230 },
    { month: "Feb", patients: 160, appointments: 250 },
    { month: "Mar", patients: 155, appointments: 240 },
    { month: "Apr", patients: 170, appointments: 260 },
  ];

  const departmentData = [
    { name: "Cardiology", value: 35, color: "hsl(210, 88%, 48%)" },
    { name: "Neurology", value: 25, color: "hsl(140, 88%, 48%)" },
    { name: "Surgery", value: 20, color: "hsl(340, 88%, 48%)" },
    { name: "Pediatrics", value: 20, color: "hsl(40, 88%, 48%)" },
  ];

  const revenueData = [
    { month: "Jan", revenue: 45000, expenses: 32000 },
    { month: "Feb", revenue: 52000, expenses: 35000 },
    { month: "Mar", revenue: 48000, expenses: 33000 },
    { month: "Apr", revenue: 55000, expenses: 38000 },
  ];

  const performanceMetrics = [
    { title: "Patient Satisfaction", value: "94.2%", change: "+2.1%", trend: "up", icon: Users, description: "Based on 450 patient surveys this month" },
    { title: "Avg. Wait Time", value: "12.5 min", change: "-3.2%", trend: "down", icon: Clock, description: "Reduced from 15.7 min last month" },
    { title: "Appointment No-shows", value: "5.8%", change: "+0.5%", trend: "up", icon: Calendar, description: "Slight increase in missed appointments" },
    { title: "Billing Accuracy", value: "99.1%", change: "+0.2%", trend: "up", icon: FileText, description: "Improved from 98.9% last quarter" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics & Reports</h1>
          <p className="text-muted-foreground">Healthcare performance insights and data analysis</p>
        </div>
        <div className="flex gap-3">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="medical">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {performanceMetrics.map((metric, index) => (
          <Card key={index} className="bg-gradient-card shadow-soft border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {metric.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="attendance">
        <TabsList>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="patients">Patient Stats</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>
        <TabsContent value="attendance">
          <Card className="bg-gradient-card shadow-soft border-0">
            <CardHeader>
              <CardTitle>Staff Attendance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="present" fill="hsl(140, 88%, 48%)" />
                  <Bar dataKey="absent" fill="hsl(340, 88%, 48%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="patients">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-card shadow-soft border-0">
              <CardHeader>
                <CardTitle>New Patients & Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={patientData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="patients" stroke="hsl(210, 88%, 48%)" />
                    <Line type="monotone" dataKey="appointments" stroke="hsl(40, 88%, 48%)" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card shadow-soft border-0">
              <CardHeader>
                <CardTitle>Patient Distribution by Department</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={departmentData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                      {departmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="revenue">
          <Card className="bg-gradient-card shadow-soft border-0">
            <CardHeader>
              <CardTitle>Revenue vs. Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="hsl(140, 88%, 48%)" />
                  <Bar dataKey="expenses" fill="hsl(340, 88%, 48%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportsPage;
