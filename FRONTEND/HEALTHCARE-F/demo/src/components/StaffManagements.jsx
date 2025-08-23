import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

const StaffManagement = () => {
  const staff = [
    { id: 1, name: "Dr. Alice Smith", role: "Cardiologist", status: "On Duty" },
    { id: 2, name: "Nurse Bob Johnson", role: "RN", status: "On Duty" },
    { id: 3, name: "Dr. Carol White", role: "Pediatrician", status: "On Leave" },
    { id: 4, name: "Nurse David Green", role: "LPN", status: "On Duty" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Staff Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {staff.map((member) => (
            <div key={member.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3" />
                <div>
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
              <Badge variant={member.status === "On Duty" ? "success" : "destructive"}>
                {member.status}
              </Badge>
            </div>
          ))}
        </div>
        <Button className="mt-4">Manage Staff</Button>
      </CardContent>
    </Card>
  );
};

export default StaffManagement;
