import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageCircle, FileText, FileCheck, Target, LogOut, Users, Trophy, MapPin, BookOpen, Briefcase } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    { icon: MessageCircle, title: "Career Chatbot", description: "Get instant answers to your career questions", path: "/chatbot", color: "bg-blue-500" },
    { icon: FileText, title: "CV Generator", description: "Create professional CVs with AI assistance", path: "/cv-generator", color: "bg-green-500" },
    { icon: FileCheck, title: "Cover Letter Generator", description: "Generate personalized cover letters", path: "/cover-letter", color: "bg-purple-500" },
    { icon: Target, title: "Career Assessment", description: "Discover your ideal career path", path: "/career-assessment", color: "bg-orange-500" },
    { icon: MapPin, title: "Career Pathways", description: "Explore detailed career roadmaps", path: "/career-pathways", color: "bg-gradient-to-r from-blue-400 to-indigo-600" },
    { icon: BookOpen, title: "Mentorship", description: "Connect with industry experts", path: "/mentorship", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { icon: Briefcase, title: "Job Hub", description: "Find your dream job opportunities", path: "/job-hub", color: "bg-gradient-to-r from-green-400 to-teal-500" },
    { icon: Users, title: "Communities", description: "Join career-focused communities", path: "/communities", color: "bg-teal-500" },
    { icon: Trophy, title: "Rewards Hub", description: "Track your progress and earn rewards", path: "/rewards", color: "bg-indigo-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex scroll-smooth">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-md sticky top-0 h-screen hidden md:flex flex-col">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-indigo-600">Features</h2>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-3">
          {features.map((feature, i) => (
            <a
              key={i}
              href={`#${feature.title.replace(/\s+/g, "-").toLowerCase()}`}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-indigo-50 text-gray-700 transition-colors"
            >
              <feature.icon className="w-5 h-5 text-indigo-500" />
              <span>{feature.title}</span>
            </a>
          ))}
        </nav>
        <div className="p-4 border-t">
          <Button variant="outline" onClick={() => navigate("/")}>
            <LogOut className="w-4 h-4 mr-2" /> Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Text */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to Your Career Hub
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Explore AI-powered tools to accelerate your career growth
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              id={feature.title.replace(/\s+/g, "-").toLowerCase()} // anchor target
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

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: "10,000+", label: "CVs Generated", color: "text-indigo-500" },
            { value: "5,000+", label: "Career Assessments", color: "text-purple-500" },
            { value: "95%", label: "User Satisfaction", color: "text-green-500" }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className={`text-4xl font-extrabold mb-2 ${stat.color}`}>{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

  );
};

export default Dashboard;
