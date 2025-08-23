import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertTriangle, Info, CheckCircle, X } from "lucide-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "urgent",
      title: "Emergency Patient Arrived",
      message: "Patient with chest pain in ER, requires immediate attention",
      time: "2 minutes ago",
      unread: true
    },
    {
      id: 2,
      type: "info",
      title: "Schedule Update",
      message: "Dr. Wilson's 3 PM appointment has been rescheduled to 4 PM",
      time: "15 minutes ago",
      unread: true
    },
    {
      id: 3,
      type: "success",
      title: "Lab Results Ready",
      message: "Blood work results for patient Maria Garcia are now available",
      time: "1 hour ago",
      unread: false
    },
    {
      id: 4,
      type: "warning",
      title: "Medication Stock Low",
      message: "Ibuprofen inventory is running low (< 50 units remaining)",
      time: "2 hours ago",
      unread: false
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case "urgent":
        return AlertTriangle;
      case "success":
        return CheckCircle;
      case "warning":
        return AlertTriangle;
      default:
        return Info;
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case "urgent":
        return "text-destructive";
      case "success":
        return "text-accent";
      case "warning":
        return "text-warning";
      default:
        return "text-primary";
    }
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case "urgent":
        return "bg-destructive text-destructive-foreground";
      case "success":
        return "bg-accent text-accent-foreground";
      case "warning":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Notifications
          <Badge className="ml-2">
            {notifications.filter(n => n.unread).length} new
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {notifications.map((notification) => {
          const Icon = getNotificationIcon(notification.type);
          return (
            <div key={notification.id} className="flex items-center mb-4">
              <Icon className={"mr-2 " + getNotificationColor(notification.type)} />
              <div>
                <div className="font-semibold">{notification.title}</div>
                <div>{notification.message}</div>
                <div className="text-xs text-gray-500">{notification.time}</div>
              </div>
              {notification.unread && (
                <Badge className={"ml-auto " + getBadgeColor(notification.type)}>
                  {notification.type}
                </Badge>
              )}
            </div>
          );
        })}
        <Button variant="ghost">View All Notifications</Button>
      </CardContent>
    </Card>
  );
};

export default Notifications;
