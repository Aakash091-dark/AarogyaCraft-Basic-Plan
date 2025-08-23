import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import DashboardStats from "@/components/DashboardStats";
import AttendancePanel from "@/components/AttendancePanel";
import StaffManagement from "@/components/StaffManagements";
import FileUpload from "@/components/FileUpload";
import Notifications from "@/components/Notifications";
import heroImage from "@/assets/medical-dashboard-hero.jpg";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background text-foreground">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div
              className="relative bg-cover bg-center rounded-lg p-8 mb-6 text-white"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-4xl font-bold">Welcome back, Dr. Smith</h1>
                    <p className="text-lg mt-2">
                      Monitor your practice, manage staff, and stay updated with patient care.
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl">Today: January 22, 2024</p>
                    <p className="text-lg">Current Time: 2:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <DashboardStats />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <div className="lg:col-span-2">
                <AttendancePanel />
              </div>
              <div className="space-y-6">
                <Notifications />
                <FileUpload />
              </div>
            </div>
            <div className="mt-6">
              <StaffManagement />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
