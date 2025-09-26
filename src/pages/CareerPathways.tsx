import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  BookOpen,
  Award,
  Users,
  MapPin,
  Star,
  CheckCircle
} from "lucide-react";

const CareerPathways = () => {
  const navigate = useNavigate();

  const careerPaths = [
    {
      id: 1,
      title: "Software Developer",
      description: "Build applications, websites, and digital solutions",
      salaryRange: "R25,000 - R80,000/month",
      demand: "Very High",
      growth: 85,
      timeToEntry: "6-18 months",
      education: ["Bachelor's in Computer Science", "Coding Bootcamp", "Self-taught + Portfolio"],
      skills: ["JavaScript", "React", "Python", "Git", "Problem Solving"],
      icon: "💻",
      color: "career-blue",
      pathways: [
        {
          type: "University Degree",
          duration: "4 years",
          cost: "R200,000 - R400,000",
          pros: ["Comprehensive foundation", "Research opportunities", "Alumni network"],
          cons: ["High cost", "Long duration", "Less practical focus"]
        },
        {
          type: "Coding Bootcamp",
          duration: "3-6 months",
          cost: "R50,000 - R120,000",
          pros: ["Intensive practical training", "Job placement support", "Fast track"],
          cons: ["Limited theory", "Competitive", "Requires dedication"]
        },
        {
          type: "Self-Learning",
          duration: "6-18 months",
          cost: "R5,000 - R20,000",
          pros: ["Flexible schedule", "Low cost", "Learn at your pace"],
          cons: ["Requires discipline", "No formal recognition", "Limited networking"]
        }
      ]
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      description: "Drive online growth through strategic marketing campaigns",
      salaryRange: "R18,000 - R60,000/month",
      demand: "High",
      growth: 75,
      timeToEntry: "3-12 months",
      education: ["Marketing Diploma", "Digital Marketing Certification", "Business Degree"],
      skills: ["Google Analytics", "Social Media", "SEO", "Content Creation", "Data Analysis"],
      icon: "📱",
      color: "career-green",
      pathways: [
        {
          type: "Marketing Diploma",
          duration: "1-2 years",
          cost: "R80,000 - R150,000",
          pros: ["Industry-focused", "Practical projects", "Affordable"],
          cons: ["Less prestige", "Limited theory", "Competitive job market"]
        },
        {
          type: "Online Certifications",
          duration: "3-6 months",
          cost: "R10,000 - R30,000",
          pros: ["Industry-recognized", "Flexible", "Up-to-date content"],
          cons: ["Self-directed", "No degree", "Requires portfolio building"]
        }
      ]
    },
    {
      id: 3,
      title: "Data Scientist",
      description: "Extract insights from data to drive business decisions",
      salaryRange: "R35,000 - R120,000/month",
      demand: "Very High",
      growth: 95,
      timeToEntry: "12-24 months",
      education: ["Statistics/Math Degree", "Data Science Bootcamp", "Online Specialization"],
      skills: ["Python", "SQL", "Machine Learning", "Statistics", "Data Visualization"],
      icon: "📊",
      color: "career-purple",
      pathways: [
        {
          type: "University Degree",
          duration: "3-4 years",
          cost: "R180,000 - R350,000",
          pros: ["Strong foundation", "Research opportunities", "High credibility"],
          cons: ["Expensive", "Time-consuming", "May lack practical skills"]
        },
        {
          type: "Data Science Bootcamp",
          duration: "6-12 months",
          cost: "R80,000 - R180,000",
          pros: ["Industry-focused", "Portfolio building", "Job support"],
          cons: ["Intensive", "Expensive", "Competitive admission"]
        }
      ]
    }
  ];

  const selectedCareer = careerPaths[0]; // Default to first career for detailed view

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => navigate("/dashboard")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-primary">Career Pathways</h1>
            </div>
            <Badge variant="secondary" className="text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              Discover Your Future
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Career Pathways
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover detailed career paths with salary insights, education requirements, 
            and step-by-step roadmaps to your dream job.
          </p>
        </div>

        {/* Career Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {careerPaths.map((career) => (
            <Card key={career.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{career.icon}</div>
                  <Badge 
                    variant={career.demand === "Very High" ? "default" : "secondary"}
                    className={`${career.demand === "Very High" ? "bg-career-green" : "bg-career-orange"}`}
                  >
                    {career.demand} Demand
                  </Badge>
                </div>
                <CardTitle className="text-xl">{career.title}</CardTitle>
                <CardDescription className="text-base">
                  {career.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Salary Range</span>
                    <span className="font-semibold text-career-green">{career.salaryRange}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Time to Entry</span>
                    <span className="font-medium">{career.timeToEntry}</span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">Job Growth</span>
                      <span className="font-medium">{career.growth}%</span>
                    </div>
                    <Progress value={career.growth} className="h-2" />
                  </div>

                  <Button className="w-full bg-career-gradient hover:opacity-90">
                    Explore Pathway
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Pathway View */}
        <Card className="mb-8">
          <CardHeader className="bg-career-gradient text-white rounded-t-lg">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{selectedCareer.icon}</div>
              <div>
                <CardTitle className="text-2xl text-white">{selectedCareer.title}</CardTitle>
                <CardDescription className="text-blue-100">
                  Detailed pathway analysis and recommendations
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <DollarSign className="w-8 h-8 text-career-green mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Salary Range</h4>
                <p className="text-sm text-gray-600">{selectedCareer.salaryRange}</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <Clock className="w-8 h-8 text-career-blue mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Time to Entry</h4>
                <p className="text-sm text-gray-600">{selectedCareer.timeToEntry}</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <TrendingUp className="w-8 h-8 text-career-purple mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Job Growth</h4>
                <p className="text-sm text-gray-600">{selectedCareer.growth}%</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                <Users className="w-8 h-8 text-career-orange mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Demand</h4>
                <p className="text-sm text-gray-600">{selectedCareer.demand}</p>
              </div>
            </div>

            {/* Required Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-career-purple" />
                Required Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedCareer.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Education Pathways */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-career-blue" />
                Education Pathways
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {selectedCareer.pathways.map((pathway, index) => (
                  <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{pathway.type}</CardTitle>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Duration: {pathway.duration}</span>
                        <span className="font-semibold text-career-green">{pathway.cost}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-green-700 mb-2">Advantages</h5>
                          <ul className="space-y-1">
                            {pathway.pros.map((pro, i) => (
                              <li key={i} className="text-sm flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-orange-700 mb-2">Considerations</h5>
                          <ul className="space-y-1">
                            {pathway.cons.map((con, i) => (
                              <li key={i} className="text-sm flex items-center">
                                <div className="w-4 h-4 rounded-full bg-orange-200 mr-2 flex-shrink-0"></div>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button variant="outline" className="w-full">
                          View Programs
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-career-gradient text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Take our career assessment to get personalized pathway recommendations 
              tailored to your skills, interests, and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate("/career-assessment")}
              >
                Take Career Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => navigate("/mentorship")}
              >
                Find a Mentor
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CareerPathways;