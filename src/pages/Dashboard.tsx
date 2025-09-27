import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageCircle, FileText, Target, LogOut, Users, Trophy, MapPin, BookOpen, Briefcase } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    { icon: MessageCircle, title: "Career Chatbot", description: "Get instant answers to your career questions", path: "/chatbot", color: "bg-blue-500" },
    { icon: FileText, title: "CV Generator", description: "Create professional CVs and Cover Letters with AI assistance", path: "/cv-generator", color: "bg-green-500" },
    { icon: Target, title: "Career Assessment", description: "Explore our Career Assessment to get personalised guidance ", path: "/career-assessment", color: "bg-orange-500" },
    { icon: MapPin, title: "Career Pathways", description: "Explore detailed career roadmaps", path: "/career-pathways", color: "bg-gradient-to-r from-blue-400 to-indigo-600" },
    { icon: BookOpen, title: "Mentorship", description: "Connect with industry experts", path: "/mentorship", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { icon: Briefcase, title: "Job Hub", description: "Find your dream job opportunities", path: "/job-hub", color: "bg-gradient-to-r from-green-400 to-teal-500" },
    { icon: Users, title: "Communities ", description: "Join career-focused communities", path: "/communities", color: "bg-teal-500" },
    { icon: Trophy, title: "Rewards Hub", description: "Track your progress and earn rewards", path: "/rewards", color: "bg-indigo-500" }
  ];

  const quickStats = [
    { value: "150K+", label: "Active Users", change: "+12% this month", color: "text-indigo-500" },
    { value: "500+", label: "Expert Mentors", change: "+8% this month", color: "text-purple-500" },
    { value: "100+", label: "Communities", change: "+25% this month", color: "text-green-500" },
    { value: "98%", label: "Success Rate", change: "+2% improvement", color: "text-blue-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 scroll-smooth">
      {/* Header */}
      <header className="bg-white shadow-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-3xl font-extrabold text-primary tracking-wide">CareerNest</h1>
            <div className="flex items-center space-x-4">
              <Button variant="secondary" onClick={() => navigate("/apply-mentor")}>
                Apply to be a Mentor
              </Button>
              <Button variant="outline" onClick={() => navigate("/")}>
                <LogOut className="w-4 h-4 mr-2" /> Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Hero */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Welcome to CareerNest</h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Explore AI-powered tools and platform features to accelerate your career growth.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {quickStats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <h3 className={`text-4xl font-extrabold mb-1 ${stat.color}`}>{stat.value}</h3>
              <p className="text-gray-700">{stat.label}</p>
              <p className="text-gray-500 text-sm">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              onClick={() => navigate(feature.path)}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-xl flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 mb-4">{feature.description}</CardDescription>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-purple-500 hover:to-indigo-500">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
