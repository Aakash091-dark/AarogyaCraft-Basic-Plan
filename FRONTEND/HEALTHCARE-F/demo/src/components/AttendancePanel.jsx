import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, XCircle, Calendar } from "lucide-react";

const AttendancePanel = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);

  const handleCheckIn = () => {
    const now = new Date();
    setCheckInTime(now.toLocaleTimeString());
    setIsCheckedIn(true);
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
    setCheckInTime(null);
  };

  const attendanceHistory = [
    { date: "2024-01-22", checkIn: "09:00 AM", checkOut: "05:30 PM", status: "Present" },
    { date: "2024-01-21", checkIn: "08:45 AM", checkOut: "05:15 PM", status: "Present" },
    { date: "2024-01-20", checkIn: "-", checkOut: "-", status: "Leave" },
    { date: "2024-01-19", checkIn: "09:15 AM", checkOut: "05:00 PM", status: "Late" },
  ];

  return (
    <div>
      {/* Check-in/out Card */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div>Current Status</div>
            {isCheckedIn ? (
              <>
                <CheckCircle className="text-green-500" />
                <span>Checked In</span>
                {checkInTime && (
                  <span> at {checkInTime}</span>
                )}
                <Button onClick={handleCheckOut}>Check Out</Button>
              </>
            ) : (
              <>
                <XCircle className="text-red-500" />
                <span>Checked Out</span>
                <Button onClick={handleCheckIn}>Check In</Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Attendance History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          {attendanceHistory.map((record, index) => (
            <div key={index} className="flex justify-between py-2">
              <div>{record.date}</div>
              <div>{record.checkIn} - {record.checkOut}</div>
              <Badge>{record.status}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendancePanel;
