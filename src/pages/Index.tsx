import { 
  CreditCard, 
  Users, 
  Target, 
  Briefcase, 
  GraduationCap, 
  Wallet, 
  Gift, 
  Shield, 
  Heart,
  ChevronRight,
  Smartphone,
  TrendingUp,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import StatsCard from "@/components/StatsCard";

const Index = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Career Chatbot",
      description: "Get instant career guidance, resume tips, and job search advice from our AI-powered Career Chatbot",
      
    },
    {
      icon: Users,
      title: "Mentorship Programme",
      description: "Connect with experienced industry professionals for personalized guidance, career growth, and skill development.",
      
    },
    {
      icon: Heart,
      title: "CV Generator",
      description: "Track your progress, earn points, and unlock rewards as you achieve career milestones.",
  
    },
    {
      icon: Briefcase,
      title: "Job Hub",
      description: "Discover and apply to your dream job opportunities with tailored listings and career support",
     
    },
    {
      icon: GraduationCap,
      title: "Career Assessment",
      description: "Unlock lessons progressively without large upfront costs",
      
    },
    {
      icon: Wallet,
      title: "Communities",
      description: "Connect with like-minded professionals, share insights, and grow together",
      
    },
    {
      icon: Target,
      title: "Cover letter Generator",
      description: "Create personalized, professional cover letters in minutes with AI assistance",
     
    },
    {
      icon: Gift,
      title: "Rewards Hub",
      description: "Track your progress, earn points, and unlock rewards as you achieve career milestones.",
     
    },
   
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-sunset rounded-lg flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">CareerNest</h1>
                <p className="text-xs text-muted-foreground">Nest Your Ambitions, Grow Your Career</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="absolute inset-0">
          <img
            src="https://9d2480a8-d4de-4138-abcf-31ba6cd585e9.lovableproject.com/src/assets/hero-image.jpg"
            className="w-full h-full object-cover"
            alt="CareerNest Hero"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Unlocking potential for smooth career journeys
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              CareerNest is a career development platform that helps students and early-career professionals discover, plan, and grow in their chosen fields
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="hero-button text-lg px-8 py-4" onClick={() => window.location.href = '/signup'}>
                Start Your Journey today!
                <Zap className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard value="150K+" label="Active Users" change="12% this month" />
            <StatsCard value="500+" label="Expert Mentors" change="8% this month" />
            <StatsCard value="100+" label="Communities" change="25% this month" />
            <StatsCard value="98%" label="Success Rate" change="2% improvement" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-growth/10 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="h-4 w-4 text-earth-green" />
              <span className="text-earth-green font-medium">Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Revolutionary Career Platform Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience seamless career growth that makes professional development affordable and accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                pricing={feature.pricing}
                className="animate-float"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          {/* Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Join thousands of professionals already growing their careers with CareerNest.
            </p>
            <Button 
              className="hero-button text-lg px-8 py-4 animate-pulse-glow"
              onClick={() => window.location.href = '/signup'}
            >
              Launch Your Career Journey
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-brown text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-sunset rounded-lg flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">CareerNest</span>
          </div>
          <p className="text-white/80 mb-4">
            Empowering you to reach your full potential
          </p>
          <div className="flex justify-center gap-4 text-sm text-white/60">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
