import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Star, 
  Calendar,
  MessageCircle,
  Video,
  Users,
  Award,
  CheckCircle
} from "lucide-react";

const Mentorship = () => {
  const navigate = useNavigate();

  const mentors = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior Software Engineer",
      company: "Google",
      location: "Cape Town, SA",
      rating: 4.9,
      sessions: 127,
      experience: "8 years",
      specialties: ["React", "System Design", "Career Growth", "Interview Prep"],
      price: "R450/hour",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Thabo Mthembu",
      title: "Marketing Director",
      company: "Takealot",
      location: "Johannesburg, SA",
      rating: 4.8,
      sessions: 89,
      experience: "12 years",
      specialties: ["Digital Marketing", "Brand Strategy", "E-commerce", "Team Leadership"],
      price: "R380/hour",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 3,
      name: "Dr. Amina Hassan",
      title: "Data Science Lead",
      company: "Standard Bank",
      location: "Remote",
      rating: 5.0,
      sessions: 156,
      experience: "10 years",
      specialties: ["Machine Learning", "Financial Analytics", "Python", "Career Transition"],
      price: "R520/hour",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 4,
      name: "James Wilson",
      title: "UX Design Manager",
      company: "Naspers",
      location: "Cape Town, SA",
      rating: 4.7,
      sessions: 73,
      experience: "7 years",
      specialties: ["User Research", "Design Systems", "Portfolio Review", "Figma"],
      price: "R420/hour",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    }
  ];

  const mentorshipPrograms = [
    {
      id: 1,
      title: "Tech Career Accelerator",
      duration: "3 months",
      price: "R2,400/month",
      description: "Intensive 1-on-1 mentorship for software developers",
      features: [
        "Weekly 1-hour sessions",
        "Code review & portfolio feedback",
        "Interview preparation",
        "Career roadmap planning",
        "Industry connections"
      ],
      mentors: 12,
      graduates: 156,
      successRate: "89%"
    },
    {
      id: 2,
      title: "Marketing Mastery Program",
      duration: "6 weeks",
      price: "R1,800/month",
      description: "Learn digital marketing from industry experts",
      features: [
        "Bi-weekly group sessions",
        "Real campaign projects",
        "Personal branding workshop",
        "Networking events",
        "Job placement support"
      ],
      mentors: 8,
      graduates: 94,
      successRate: "92%"
    },
    {
      id: 3,
      title: "Data Science Bootcamp",
      duration: "4 months",
      price: "R3,200/month",
      description: "Comprehensive data science mentorship program",
      features: [
        "Weekly technical sessions",
        "Portfolio project guidance",
        "Machine learning projects",
        "Industry case studies",
        "Job search strategy"
      ],
      mentors: 6,
      graduates: 67,
      successRate: "94%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => navigate("/dashboard")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-primary">Mentorship Hub</h1>
            </div>
            <Badge variant="secondary" className="text-sm">
              <Users className="w-4 h-4 mr-1" />
              50+ Expert Mentors
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Hero Text - TOP */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Accelerate Your Career with Expert Mentors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with industry professionals who've walked the path you want to take. 
            Get personalized guidance, insider knowledge, and career acceleration.
          </p>
        </div>

        {/* How Mentorship Works */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">How Mentorship Works</CardTitle>
            <CardDescription className="text-center text-lg">
              Simple steps to accelerate your career growth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-career-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">1. Find Your Mentor</h4>
                <p className="text-sm text-gray-600">Browse profiles and find mentors who match your career goals and interests.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-career-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">2. Schedule Sessions</h4>
                <p className="text-sm text-gray-600">Book flexible sessions that fit your schedule and learning preferences.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-career-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">3. Learn & Grow</h4>
                <p className="text-sm text-gray-600">Get personalized guidance, feedback, and industry insights from experts.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-career-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">4. Achieve Goals</h4>
                <p className="text-sm text-gray-600">Land your dream job, get promoted, or successfully transition careers.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Mentors */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Mentors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={mentor.avatar} alt={mentor.name} />
                    <AvatarFallback className="text-xl bg-career-gradient text-white">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{mentor.name}</CardTitle>
                  <CardDescription>
                    <div className="space-y-1">
                      <p className="font-medium">{mentor.title}</p>
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{mentor.rating}</span>
                        <span className="text-sm text-gray-500">({mentor.sessions} sessions)</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Experience</span>
                      <span className="font-medium">{mentor.experience}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Rate</span>
                      <span className="font-semibold text-career-green">{mentor.price}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {mentor.specialties.slice(0, 2).map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {mentor.specialties.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{mentor.specialties.length - 2} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 bg-career-gradient">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Message
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Video className="w-4 h-4 mr-1" />
                        Book
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

       
     
      </main>
    </div>
  );
};

export default Mentorship;
