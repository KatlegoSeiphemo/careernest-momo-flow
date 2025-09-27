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
            src="data:image/webp;base64,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"
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
