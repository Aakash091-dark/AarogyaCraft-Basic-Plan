import React from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <p className="text-2xl md:text-3xl font-light text-muted-foreground mt-4">
          Oops! Page Not Found
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="medical" className="mt-8">
            <Home className="mr-2 h-4 w-4" />
            Go back to Dashboard
          </Button>
        </Link>
      </div>
      <div className="mt-12 text-sm text-muted-foreground">
        If you believe this is an error, please contact support.
      </div>
    </div>
  );
};

export default NotFoundPage;
