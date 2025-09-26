import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Search, 
  MapPin, 
  Briefcase,
  Clock,
  DollarSign,
  Building,
  Users,
  TrendingUp,
  Star,
  Bookmark,
  ExternalLink,
  Filter
} from "lucide-react";

const JobHub = () => {
  const navigate = useNavigate();

 const jobs = [
  {
    id: 1,
    title: "Junior Software Developer",
    company: "Takealot",
    location: "Cape Town, SA",
    type: "Full-time",
    salary: "R25,000 - R35,000",
    posted: "2 days ago",
    applications: 47,
    match: 92,
    logo: "/api/placeholder/60/60",
    description: "Join our dynamic tech team building South Africa's leading e-commerce platform.",
    requirements: ["JavaScript", "React", "Node.js", "SQL"],
    benefits: ["Medical Aid", "Flexible Hours", "Learning Budget", "Remote Work"],
    isBookmarked: false,
    isApplied: false,
    urgency: "high"
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    company: "Standard Bank",
    location: "Johannesburg, SA",
    type: "Full-time",
    salary: "R22,000 - R32,000",
    posted: "1 week ago",
    applications: 89,
    match: 87,
    logo: "/api/placeholder/60/60",
    description: "Drive digital transformation and customer engagement through innovative marketing strategies.",
    requirements: ["Google Analytics", "SEO", "Social Media", "Content Marketing"],
    benefits: ["Pension Fund", "Medical Aid", "Career Development", "Bonus Scheme"],
    isBookmarked: true,
    isApplied: false,
    urgency: "medium"
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    company: "Discovery",
    location: "Sandton, SA",
    type: "Internship",
    salary: "R8,000 - R12,000",
    posted: "3 days ago",
    applications: 156,
    match: 78,
    logo: "/api/placeholder/60/60",
    description: "12-month internship program with full-time conversion opportunities.",
    requirements: ["Python", "Excel", "Statistics", "SQL"],
    benefits: ["Mentorship", "Training Program", "Conversion Opportunity", "Transport Allowance"],
    isBookmarked: false,
    isApplied: true,
    urgency: "high"
  },
  {
    id: 4,
    title: "UX Designer",
    company: "Naspers",
    location: "Cape Town, SA",
    type: "Contract",
    salary: "R35,000 - R50,000",
    posted: "5 days ago",
    applications: 23,
    match: 85,
    logo: "/api/placeholder/60/60",
    description: "Create user-centered designs for our global portfolio of digital products.",
    requirements: ["Figma", "User Research", "Prototyping", "Design Systems"],
    benefits: ["Flexible Contract", "Remote Options", "High Impact Projects", "Portfolio Building"],
    isBookmarked: true,
    isApplied: false,
    urgency: "low"
  },
  {
    id: 5,
    title: "Graduate Trainee Program",
    company: "PwC",
    location: "Multiple Locations",
    type: "Graduate Program",
    salary: "R18,000 - R25,000",
    posted: "1 day ago",
    applications: 234,
    match: 73,
    logo: "/api/placeholder/60/60",
    description: "18-month comprehensive program across consulting, audit, and tax services.",
    requirements: ["Degree Required", "Analytical Skills", "Communication", "Problem Solving"],
    benefits: ["Global Exposure", "Professional Qualification", "Mentorship", "Career Fast-track"],
    isBookmarked: false,
    isApplied: false,
    urgency: "high"
  },
  {
    id: 6,
    title: "Content Creator",
    company: "Media24",
    location: "Remote",
    type: "Freelance",
    salary: "R300 - R500/article",
    posted: "4 days ago",
    applications: 67,
    match: 91,
    logo: "/api/placeholder/60/60",
    description: "Create engaging content across digital platforms for South African audiences.",
    requirements: ["Writing Skills", "SEO Knowledge", "Social Media", "Content Strategy"],
    benefits: ["Flexible Schedule", "Remote Work", "Creative Freedom", "Portfolio Building"],
    isBookmarked: false,
    isApplied: false,
    urgency: "medium"
  },
  // NEW JOBS
  {
    id: 7,
    title: "Financial Analyst",
    company: "ABSA",
    location: "Johannesburg, SA",
    type: "Full-time",
    salary: "R28,000 - R40,000",
    posted: "2 days ago",
    applications: 34,
    match: 88,
    logo: "/api/placeholder/60/60",
    description: "Analyze financial data and support investment decisions.",
    requirements: ["Excel", "Financial Modeling", "Accounting Principles"],
    benefits: ["Medical Aid", "Pension Fund", "Performance Bonus"],
    isBookmarked: false,
    isApplied: false,
    urgency: "high"
  },
  {
    id: 8,
    title: "Civil Engineer",
    company: "WBHO Construction",
    location: "Durban, SA",
    type: "Full-time",
    salary: "R35,000 - R50,000",
    posted: "3 days ago",
    applications: 29,
    match: 90,
    logo: "/api/placeholder/60/60",
    description: "Manage construction projects and ensure compliance with regulations.",
    requirements: ["AutoCAD", "Project Management", "Structural Analysis"],
    benefits: ["Health Insurance", "Transport Allowance", "Retirement Benefits"],
    isBookmarked: false,
    isApplied: false,
    urgency: "medium"
  },
  {
    id: 9,
    title: "HR Manager",
    company: "Sasol",
    location: "Secunda, SA",
    type: "Full-time",
    salary: "R45,000 - R60,000",
    posted: "1 week ago",
    applications: 51,
    match: 85,
    logo: "/api/placeholder/60/60",
    description: "Lead HR initiatives and talent development programs.",
    requirements: ["HR Policies", "Employee Relations", "Recruitment", "Conflict Resolution"],
    benefits: ["Medical Aid", "Retirement Plan", "Training Budget", "Wellness Programs"],
    isBookmarked: true,
    isApplied: false,
    urgency: "high"
  },
  {
    id: 10,
    title: "Graphic Designer",
    company: "Pick n Pay",
    location: "Cape Town, SA",
    type: "Contract",
    salary: "R25,000 - R35,000",
    posted: "4 days ago",
    applications: 22,
    match: 82,
    logo: "/api/placeholder/60/60",
    description: "Design marketing collateral for retail campaigns and promotions.",
    requirements: ["Adobe Suite", "Creativity", "Branding", "Typography"],
    benefits: ["Flexible Hours", "Remote Options", "Portfolio Exposure"],
    isBookmarked: false,
    isApplied: false,
    urgency: "medium"
  },
  {
    id: 11,
    title: "Pharmacist",
    company: "Clicks Group",
    location: "Johannesburg, SA",
    type: "Full-time",
    salary: "R35,000 - R50,000",
    posted: "2 days ago",
    applications: 16,
    match: 91,
    logo: "/api/placeholder/60/60",
    description: "Dispense medications and counsel patients on proper usage.",
    requirements: ["Pharmacy Degree", "Prescription Knowledge", "Customer Service"],
    benefits: ["Medical Aid", "Pension Fund", "Paid Training"],
    isBookmarked: false,
    isApplied: false,
    urgency: "medium"
  },
  {
    id: 12,
    title: "Operations Manager",
    company: "Bidvest",
    location: "Pretoria, SA",
    type: "Full-time",
    salary: "R50,000 - R70,000",
    posted: "1 week ago",
    applications: 39,
    match: 87,
    logo: "/api/placeholder/60/60",
    description: "Oversee operational processes and optimize efficiency across departments.",
    requirements: ["Leadership", "Process Improvement", "Logistics", "Problem Solving"],
    benefits: ["Medical Aid", "Pension", "Company Car", "Performance Bonus"],
    isBookmarked: true,
    isApplied: false,
    urgency: "high"
  },
  {
    id: 13,
    title: "Social Media Manager",
    company: "FNB",
    location: "Sandton, SA",
    type: "Full-time",
    salary: "R28,000 - R40,000",
    posted: "3 days ago",
    applications: 72,
    match: 89,
    logo: "/api/placeholder/60/60",
    description: "Manage social media campaigns and engagement for the bank.",
    requirements: ["Content Creation", "Analytics", "Branding", "Community Management"],
    benefits: ["Medical Aid", "Flexible Hours", "Training Budget"],
    isBookmarked: false,
    isApplied: false,
    urgency: "medium"
  },
  {
    id: 14,
    title: "Mechanical Engineer",
    company: "Denel",
    location: "Pretoria, SA",
    type: "Full-time",
    salary: "R40,000 - R55,000",
    posted: "5 days ago",
    applications: 18,
    match: 86,
    logo: "/api/placeholder/60/60",
    description: "Design, test, and maintain mechanical systems for defense projects.",
    requirements: ["SolidWorks", "CAD", "Project Management", "Problem Solving"],
    benefits: ["Medical Aid", "Pension", "Technical Training"],
    isBookmarked: false,
    isApplied: false,
    urgency: "high"
  },
  {
    id: 15,
    title: "Customer Support Agent",
    company: "Vodacom",
    location: "Durban, SA",
    type: "Full-time",
    salary: "R15,000 - R22,000",
    posted: "1 day ago",
    applications: 101,
    match: 80,
    logo: "/api/placeholder/60/60",
    description: "Assist customers with queries, complaints, and service requests.",
    requirements: ["Communication Skills", "CRM Knowledge", "Problem Solving"],
    benefits: ["Medical Aid", "Training", "Commission", "Career Path"],
    isBookmarked: false,
    isApplied: false,
    urgency: "high"
  },
  {
    id: 16,
    title: "Restaurant Manager",
    company: "Wimpy",
    location: "Cape Town, SA",
    type: "Full-time",
    salary: "R20,000 - R32,000",
    posted: "3 days ago",
    applications: 44,
    match: 78,
    logo: "/api/placeholder/60/60",
    description: "Manage daily operations, staff, and customer service at our restaurant.",
    requirements: ["Leadership", "Hospitality Management", "Scheduling", "Customer Service"],
    benefits: ["Medical Aid", "Bonus", "Meal Allowance"],
    isBookmarked: false,
    isApplied: false,
    urgency: "medium"
  },
  {
    id: 17,
    title: "Project Coordinator",
    company: "Siemens",
    location: "Johannesburg, SA",
    type: "Contract",
    salary: "R30,000 - R45,000",
    posted: "2 days ago",
    applications: 28,
    match: 85,
    logo: "/api/placeholder/60/60",
    description: "Coordinate engineering projects and track progress across teams.",
    requirements: ["Project Management", "MS Project", "Communication", "Reporting"],
    benefits: ["Medical Aid", "Transport Allowance", "Flexible Hours"],
    isBookmarked: false,
    isApplied: false,
    urgency: "medium"
  },
  {
    id: 18,
    title: "Biomedical Scientist",
    company: "Netcare",
    location: "Johannesburg, SA",
    type: "Full-time",
    salary: "R35,000 - R50,000",
    posted: "4 days ago",
    applications: 27,
    match: 88,
    logo: "/api/placeholder/60/60",
    description: "Conduct laboratory testing and support clinical diagnostics.",
    requirements: ["Lab Techniques", "Medical Knowledge", "Attention to Detail"],
    benefits: ["Medical Aid", "Retirement Fund", "Training Programs"],
    isBookmarked: false,
    isApplied: false,
    urgency: "high"
  },
  {
    id: 19,
    title: "Interior Designer",
    company: "Decorex SA",
    location: "Cape Town, SA",
    type: "Freelance",
    salary: "R350 - R600/hour",
    posted: "1 week ago",
    applications: 19,
    match: 84,
    logo: "/api/placeholder/60/60",
    description: "Design residential and commercial spaces with aesthetic appeal.",
    requirements: ["AutoCAD", "SketchUp", "Creativity", "Client Management"],
    benefits: ["Flexible Schedule", "Portfolio Exposure", "Remote Work"],
    isBookmarked: false,
    isApplied: false,
    urgency: "medium"
  },
  {
    id: 20,
    title: "Supply Chain Analyst",
    company: "Tiger Brands",
    location: "Durban, SA",
    type: "Full-time",
    salary: "R28,000 - R42,000",
    posted: "3 days ago",
    applications: 36,
    match: 89,
    logo: "/api/placeholder/60/60",
    description: "Analyze supply chain processes and optimize operations.",
    requirements: ["Excel", "Logistics", "Data Analysis", "ERP Systems"],
    benefits: ["Medical Aid", "Pension Fund", "Performance Bonus"],
    isBookmarked: false,
    isApplied: false,
    urgency: "high"
  },
  {
    id: 21,
    title: "Event Coordinator",
    company: "FNB Events",
    location: "Johannesburg, SA",
    type: "Contract",
    salary: "R18,000 - R28,000",
    posted: "2 days ago",
    applications: 41,
    match: 81,
    logo: "/api/placeholder/60/60",
    description: "Plan and execute corporate events and conferences.",
    requirements: ["Event Planning", "Communication", "Vendor Management"],
    benefits: ["Flexible Hours", "Travel Allowance", "Networking Opportunities"],
    isBookmarked: false,
    isApplied: false,
    urgency: "medium"
  },
  {
    id: 22,
    title: "Environmental Consultant",
    company: "AECOM",
    location: "Pretoria, SA",
    type: "Full-time",
    salary: "R40,000 - R60,000",
    posted: "1 week ago",
    applications: 22,
    match: 87,
    logo: "/api/placeholder/60/60",
    description: "Advise on sustainability practices and environmental compliance.",
    requirements: ["Environmental Science", "Data Analysis", "Reporting"],
    benefits: ["Medical Aid", "Training Programs", "Flexible Work Hours"],
    isBookmarked: false,
    isApplied: false,
    urgency: "high"
  },
  {
    id: 23,
    title: "Legal Advisor",
    company: "Bowmans",
    location: "Cape Town, SA",
    type: "Full-time",
    salary: "R50,000 - R75,000",
    posted: "2 days ago",
    applications: 15,
    match: 92,
    logo: "/api/placeholder/60/60",
    description: "Provide legal advice and manage corporate legal matters.",
    requirements: ["LLB Degree", "Corporate Law", "Contract Drafting", "Negotiation"],
    benefits: ["Medical Aid", "Retirement Plan", "Professional Development"],
    isBookmarked: false,
    isApplied: false,
    urgency: "high"
  },
  {
    id: 24,
    title: "Restaurant Chef",
    company: "The Test Kitchen",
    location: "Cape Town, SA",
    type: "Full-time",
    salary: "R20,000 - R35,000",
    posted: "5 days ago",
    applications: 30,
    match: 85,
    logo: "/api/placeholder/60/60",
    description: "Prepare innovative dishes and manage kitchen operations.",
    requirements: ["Culinary Skills", "Food Safety", "Creativity", "Team Management"],
    benefits: ["Meals Provided", "Flexible Hours", "Bonus Scheme"],
    isBookmarked: false,
    isApplied: false,
    urgency: "medium"
  },
  {
    id: 25,
    title: "UX Researcher",
    company: "Amazon SA",
    location: "Johannesburg, SA",
    type: "Full-time",
    salary: "R45,000 - R60,000",
    posted: "3 days ago",
    applications: 28,
    match: 88,
    logo: "/api/placeholder/60/60",
    description: "Conduct research to improve user experiences across digital platforms.",
    requirements: ["User Research", "Interviewing", "Data Analysis", "Prototyping"],
    benefits: ["Medical Aid", "Remote Work", "Training Programs"],
    isBookmarked: false,
    isApplied: false,
    urgency: "high"
  },
  {
    id: 26,
    title: "Blockchain Developer",
    company: "Luno",
    location: "Cape Town, SA",
    type: "Full-time",
    salary: "R60,000 - R90,000",
    posted: "2 days ago",
    applications: 20,
    match: 93,
    logo: "/api/placeholder/60/60",
    description: "Develop and maintain blockchain applications and smart contracts.",
    requirements: ["Solidity", "Ethereum", "Node.js", "Smart Contracts"],
    benefits: ["Medical Aid", "Stock Options", "Remote Work", "Learning Budget"],
    isBookmarked: false,
    isApplied: false,
    urgency: "high"
  }
];



  const jobStats = {
    totalJobs: 1247,
    newThisWeek: 89,
    averageSalary: "R28,500",
    topLocation: "Cape Town"
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getMatchColor = (match: number) => {
    if (match >= 90) return 'text-career-green';
    if (match >= 80) return 'text-career-blue';
    if (match >= 70) return 'text-career-orange';
    return 'text-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => navigate("/dashboard")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-primary">Job Hub</h1>
            </div>
            <Badge variant="secondary" className="text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              {jobStats.newThisWeek} New This Week
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Dream Job
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover opportunities tailored to your career goals with AI-powered matching 
            and application tracking.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search jobs, companies, or skills..." 
                className="pl-10 h-12 text-lg"
              />
            </div>
            <Button size="lg" className="bg-career-gradient px-8">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Job Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-career-blue">{jobStats.totalJobs}</div>
              <div className="text-sm text-gray-600">Total Jobs</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-career-green">{jobStats.newThisWeek}</div>
              <div className="text-sm text-gray-600">New This Week</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-career-purple">{jobStats.averageSalary}</div>
              <div className="text-sm text-gray-600">Avg Salary</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-career-orange">{jobStats.topLocation}</div>
              <div className="text-sm text-gray-600">Top Location</div>
            </CardContent>
          </Card>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        {job.urgency === 'high' && (
                          <Badge className={getUrgencyColor(job.urgency)}>
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-gray-600 mb-2">
                        <div className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{job.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-right flex-shrink-0">
                    <div className={`text-2xl font-bold mb-1 ${getMatchColor(job.match)}`}>
                      {job.match}%
                    </div>
                    <div className="text-sm text-gray-500 mb-2">Match</div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className={job.isBookmarked ? "text-career-orange" : ""}
                      >
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {job.requirements.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {job.benefits.slice(0, 3).map((benefit, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-career-green/10 text-career-green">
                          {benefit}
                        </Badge>
                      ))}
                      {job.benefits.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{job.benefits.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span className="font-medium text-career-green">{job.salary}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Posted {job.posted}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{job.applications} applicants</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                    <Button 
                      size="sm" 
                      className={`${
                        job.isApplied 
                          ? "bg-gray-400 hover:bg-gray-400" 
                          : "bg-career-gradient hover:opacity-90"
                      }`}
                      disabled={job.isApplied}
                    >
                      {job.isApplied ? "Applied" : "Quick Apply"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button size="lg" variant="outline">
            Load More Jobs
          </Button>
        </div>

        {/* CTA Section */}
        <Card className="bg-career-gradient text-white mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Not Finding the Right Fit?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Set up job alerts and let opportunities come to you. Our AI will notify you 
              when jobs matching your criteria are posted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
              >
                Set Job Alerts
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Improve Your CV
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default JobHub;
