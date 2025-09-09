import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Target, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CareerAssessment = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState({
    academicAchievements: "",
    skills: "",
    hobbies: "",
    passions: "",
    workPreferences: "",
    careerGoals: ""
  });
  const [results, setResults] = useState<{
    suggestedCareers: string[];
    careerPath: string;
    nextSteps: string[];
  } | null>(null);

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: string, value: string) => {
    setAssessmentData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateAssessment = async () => {
    // Simulate AI analysis (would use Google Cloud API in real implementation)
    setTimeout(() => {
      const mockResults = {
        suggestedCareers: [
          "Software Developer",
          "Data Analyst", 
          "Product Manager",
          "UX Designer",
          "Digital Marketing Specialist"
        ],
        careerPath: `Based on your academic background in ${assessmentData.academicAchievements || 'your field'} and your interest in ${assessmentData.passions || 'technology'}, we recommend starting with entry-level positions in tech. Your skills in ${assessmentData.skills || 'problem-solving'} make you well-suited for analytical roles.`,
        nextSteps: [
          "Complete relevant online courses or certifications",
          "Build a portfolio showcasing your skills",
          "Network with professionals in your target field",
          "Apply for internships or junior positions",
          "Consider mentorship opportunities"
        ]
      };
      
      setResults(mockResults);
      toast.success("Career assessment completed!");
    }, 2000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Academic Background</h3>
            <div>
              <Label htmlFor="achievements">Highest Academic Achievements</Label>
              <Textarea
                id="achievements"
                value={assessmentData.academicAchievements}
                onChange={(e) => handleInputChange("academicAchievements", e.target.value)}
                placeholder="Describe your education, certifications, grades, awards..."
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Skills & Abilities</h3>
            <div>
              <Label htmlFor="skills">Your Skills</Label>
              <Textarea
                id="skills"
                value={assessmentData.skills}
                onChange={(e) => handleInputChange("skills", e.target.value)}
                placeholder="List your technical skills, soft skills, languages..."
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Interests & Passions</h3>
            <div>
              <Label htmlFor="hobbies">Hobbies & Activities</Label>
              <Textarea
                id="hobbies"
                value={assessmentData.hobbies}
                onChange={(e) => handleInputChange("hobbies", e.target.value)}
                placeholder="What do you enjoy doing in your free time?"
              />
            </div>
            <div>
              <Label htmlFor="passions">What You're Passionate About</Label>
              <Textarea
                id="passions"
                value={assessmentData.passions}
                onChange={(e) => handleInputChange("passions", e.target.value)}
                placeholder="What subjects or activities energize you?"
              />
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Career Preferences</h3>
            <div>
              <Label htmlFor="workPreferences">Work Environment Preferences</Label>
              <Textarea
                id="workPreferences"
                value={assessmentData.workPreferences}
                onChange={(e) => handleInputChange("workPreferences", e.target.value)}
                placeholder="Remote vs office, team vs individual work, startup vs corporate..."
              />
            </div>
            <div>
              <Label htmlFor="careerGoals">Career Goals & Aspirations</Label>
              <Textarea
                id="careerGoals"
                value={assessmentData.careerGoals}
                onChange={(e) => handleInputChange("careerGoals", e.target.value)}
                placeholder="Where do you see yourself in 5-10 years?"
              />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              <Button variant="ghost" onClick={() => navigate("/dashboard")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-xl font-semibold text-primary ml-4">Career Assessment Results</h1>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Assessment Complete!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Based on your responses, we've analyzed your profile and generated personalized career recommendations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Careers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {results.suggestedCareers.map((career, index) => (
                    <div key={index} className="p-3 bg-primary/5 rounded-lg border">
                      <span className="font-medium">{career}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Career Path</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{results.careerPath}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {results.nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button onClick={() => setResults(null)} variant="outline">
                Take Assessment Again
              </Button>
              <Button onClick={() => navigate("/dashboard")}>
                Back to Dashboard
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-xl font-semibold text-primary ml-4">Career Assessment</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary" />
                Discover Your Ideal Career Path
              </CardTitle>
              <span className="text-sm text-muted-foreground">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            <Progress value={progress} className="mt-2" />
          </CardHeader>
          <CardContent>
            <div className="min-h-[300px]">
              {renderStep()}
            </div>
            
            <div className="flex justify-between mt-6">
              <Button 
                variant="outline" 
                onClick={prevStep} 
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < totalSteps ? (
                <Button onClick={nextStep}>
                  Next
                </Button>
              ) : (
                <Button onClick={generateAssessment}>
                  Generate Career Assessment
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CareerAssessment;