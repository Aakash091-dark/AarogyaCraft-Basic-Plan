import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Clock, ClipboardCheck } from "lucide-react";

const DashboardStats = () => {
  const stats = [
    { title: "Patients Today", value: "24", change: "+3 from yesterday", icon: Users, variant: "medical" },
    { title: "Upcoming Appointments", value: "8", change: "Next: 2:30 PM", icon: Calendar, variant: "default" },
    { title: "Staff Present", value: "12/15", change: "80% attendance", icon: Clock, variant: "success" },
    { title: "Pending Tasks", value: "6", change: "2 urgent", icon: ClipboardCheck, variant: "warning" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {stats.map((stat, idx) => (
        <Card key={idx} className={`dashboard-stat dashboard-stat-${stat.variant}`}>
          <CardHeader className="flex flex-row items-center">
            <stat.icon className="w-6 h-6 mr-3" />
            <CardTitle>{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div>{stat.change}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
