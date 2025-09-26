import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageCircle, FileText, FileCheck, Target, LogOut, Users, Trophy } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: MessageCircle,
      title: "Career Chatbot",
      description: "Get instant answers to your career questions",
      path: "/chatbot",
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "CV Generator",
      description: "Create professional CVs with AI assistance",
      path: "/cv-generator",
      color: "bg-green-500"
    },
    {
      icon: FileCheck,
      title: "Cover Letter Generator",
      description: "Generate personalized cover letters",
      path: "/cover-letter",
      color: "bg-purple-500"
    },
    {
      icon: Target,
      title: "Career Assessment",
      description: "Discover your ideal career path",
      path: "/career-assessment",
      color: "bg-orange-500"
    },
    {
      icon: Users,
      title: "Communities",
      description: "Join career-focused communities",
      path: "/communities",
      color: "bg-teal-500"
    },
    {
      icon: Trophy,
      title: "Rewards Hub",
      description: "Track your progress and earn rewards",
      path: "/rewards",
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">CareerNest</h1>
            </div>
            <Button variant="outline" onClick={() => navigate("/")}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Your Career Hub</h2>
          <p className="text-lg text-gray-600">
            Explore AI-powered tools to accelerate your career growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(feature.path)}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${feature.color}`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {feature.description}
                </CardDescription>
                <Button className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-primary">10,000+</h3>
            <p className="text-gray-600">CVs Generated</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-primary">5,000+</h3>
            <p className="text-gray-600">Career Assessments</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-primary">95%</h3>
            <p className="text-gray-600">User Satisfaction</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;